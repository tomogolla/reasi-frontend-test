<script>
  export let logoSrc = "/images/icons/tom-ogolla-logo-black.png";
  export let year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <hr class="divider">
    <div class="footer-grid">

      <!-- Brand Column -->
      <div class="brand-col">
        <img src={logoSrc} alt="Reasi Logo" class="logo" />
        <p class="brand-text">
          Building operational clarity that scales. Strategy, systems,
          and digital enablement designed for long-term execution.
        </p>
      </div>

      <!-- Navigation -->
      <div class="nav-col">
        <p class="footer-heading">Navigation</p>
        <a href="/work">Work</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <!-- Contact -->
      <div class="contact-col">
        <p class="footer-heading">Contact</p>
        <p>info@reasi.co</p>
        <p>Nairobi, Kenya</p>
      </div>

      <!-- Social -->
      <div class="social-col">
        <p class="footer-heading">Connect</p>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>

    </div>

    <div class="bottom-row">
    <hr class="divider">
      <p>© {year} Reasi. All rights reserved.</p>
    </div>

  </div>
</footer>

<style>
  .footer {
    width: 100%;
    padding: 6rem 3rem 3rem 3rem;
    background: #f5f5f5;
    color: #111;
    
  }

  .divider {
    background-color: #14213d;
    height: 0.1rem;
    opacity: 20%;
    margin: 2rem;
  }

  .container {
    max-width: 1600px;
    margin: 0 auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .logo {
    max-width: 140px;
    margin-bottom: 1.5rem;
  }

  .brand-text {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 350px;
    
    margin: 0;
  }

  .footer-heading {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
   
    margin-bottom: 1.5rem;
  }

  .nav-col,
  .contact-col,
  .social-col {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  a {
    text-decoration: none;
    
    font-size: 0.95rem;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.6;
  }

  .contact-col p {
    margin: 0;
    font-size: 0.95rem;
   
  }

  .bottom-row {
    font-size: 0.85rem;
    text-align: center;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 768px) {
    .footer {
      padding: 4rem 1.5rem 2rem 1.5rem;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
</style>
