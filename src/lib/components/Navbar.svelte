<script>
  import Button from '$lib/ui/Button.svelte';
  import { onMount } from 'svelte';
  
  let mobileMenuOpen = false;
  let screenSize = 'xxl';
  let scrollY = 0;
  let prevScrollY = 0;
  let isNavbarVisible = true;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
  
  function updateScreenSize() {
    const width = window.innerWidth;
    if (width < 640) {
      screenSize = 'sm';
    } else if (width < 768) {
      screenSize = 'md';
    } else if (width < 1024) {
      screenSize = 'lg';
    } else if (width < 1280) {
      screenSize = 'xl';
    } else {
      screenSize = 'xxl';
    }
  }
  
  onMount(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    const handleScroll = () => {
      scrollY = window.scrollY;
      if (scrollY > prevScrollY && scrollY > 100) {
        isNavbarVisible = false;
      } else if (scrollY < prevScrollY) {
        isNavbarVisible = true;
      }
      prevScrollY = scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', updateScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav class="navbar" class:hidden={!isNavbarVisible}>
  <!-- Mobile (sm): Brand + Hamburger -->
  <div class="mobile-layout">
    <div class="brand-name">Ironsides.BI</div>
    <button class="hamburger" on:click={toggleMobileMenu} aria-label="Toggle menu">
      <span class="hamburger-line" class:open={mobileMenuOpen}></span>
      <span class="hamburger-line" class:open={mobileMenuOpen}></span>
      <span class="hamburger-line" class:open={mobileMenuOpen}></span>
    </button>
  </div>

  <!-- Tablet (md): Brand + Work/Services + Hamburger -->
  <div class="tablet-layout">
    <div class="brand-name">Ironsides.Bi</div>
    <div class="tablet-buttons">
      <Button href="/" variant="primary">Work</Button>
      <Button href="/services" variant="primary">Services</Button>
    </div>
    <button class="hamburger" on:click={toggleMobileMenu} aria-label="Toggle menu">
      <span class="hamburger-line" class:open={mobileMenuOpen}></span>
      <span class="hamburger-line" class:open={mobileMenuOpen}></span>
      <span class="hamburger-line" class:open={mobileMenuOpen}></span>
    </button>
  </div>

  <!-- Desktop (lg, xl, xxl): Full layout with centered brand -->
  <div class="desktop-layout">
    <div class="navbar-left">
      <Button href="/" variant="primary">Work</Button>
      <Button href="/services" variant="primary">Services</Button>
    </div>
    
    <div class="brand-name-center">Ironsides.BI</div>
    
    <div class="navbar-right">
      <Button href="/latest" variant="primary">Latest</Button>
      <Button href="/about" variant="primary">About</Button>
      <Button href="/contact" variant="primary">Contact</Button>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  <div class="mobile-menu" class:open={mobileMenuOpen}>
    <div class="mobile-menu-content">
      <!-- Show only on mobile (sm) -->
      <div class="mobile-only-links">
        <a href="/" on:click={closeMobileMenu}>Work</a>
        <a href="/services" on:click={closeMobileMenu}>Services</a>
      </div>
      
      <!-- Show on both mobile and tablet -->
      <a href="/latest" on:click={closeMobileMenu}>Latest</a>
      <a href="/about" on:click={closeMobileMenu}>About</a>
      <a href="/contact" on:click={closeMobileMenu}>Contact</a>
    </div>
  </div>
</nav>

<style>

  @import url('https://fonts.googleapis.com/css2?family=BBH+Bogle&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Racing+Sans+One&display=swap');
  .navbar {
    padding: 1rem 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
  }

  .hidden {
    transform: translateY(-100%);
  }
 

  /* Hide all layouts by default */
  .mobile-layout,
  .tablet-layout,
  .desktop-layout {
    display: none;
  }

  .brand-name,
  .brand-name-center {
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    font-family: "Racing Sans One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  /* Hamburger Button */
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1000;
  }

  .hamburger-line {
    width: 1.5rem;
    height: 0.125rem;
    background-color: #333;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .hamburger-line.open:nth-child(1) {
    transform: translateY(0.5rem) rotate(45deg);
  }

  .hamburger-line.open:nth-child(2) {
    opacity: 0;
  }

  .hamburger-line.open:nth-child(3) {
    transform: translateY(-0.5rem) rotate(-45deg);
  }

  /* Mobile Menu Dropdown */
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    z-index: 999;
  }

  .mobile-menu.open {
    max-height: 400px;
  }

  .mobile-menu-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .mobile-menu-content a {
    color: #333;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.5rem 0;
    transition: color 0.2s ease;
  }

  .mobile-menu-content a:hover {
    color: #666;
  }

  .mobile-only-links {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e5e5;
  }

  /* Mobile (sm): < 640px */
  @media (max-width: 639px) {
    .mobile-layout {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-only-links {
      display: flex;
    }
  }

  /* Tablet (md): 640px - 1023px */
  @media (min-width: 640px) and (max-width: 1023px) {
    .tablet-layout {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .tablet-buttons {
      display: flex;
      gap: 1rem;
    }

    /* Hide Work/Services in mobile menu on tablet */
    .mobile-only-links {
      display: none;
    }
  }

  /* Desktop (lg, xl, xxl): >= 1024px */
  @media (min-width: 1024px) {
    .desktop-layout {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    .navbar-left,
    .navbar-right {
      display: flex;
      gap: 1rem;
      flex: 1;
    }

    .navbar-right {
      justify-content: flex-end;
    }

    .brand-name-center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.5rem;
    }

    .hamburger,
    .mobile-menu {
      display: none;
    }
  }

  /* Large Desktop (xl): >= 1280px */
  @media (min-width: 1280px) {
    .navbar {
      padding: 1.25rem 2rem;
    }

    .navbar-left,
    .navbar-right {
      gap: 1.5rem;
    }

    .brand-name-center {
      font-size: 1.75rem;
    }
  }

  /* Extra Large Desktop (xxl): >= 1536px */
  @media (min-width: 1536px) {
    .navbar {
      padding: 1.5rem 3rem;
    }

    .navbar-left,
    .navbar-right {
      gap: 2rem;
    }

    .brand-name-center {
      font-size: 2rem;
    }
  }
</style>