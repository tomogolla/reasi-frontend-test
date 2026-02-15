<script>
  import Button from "$lib/ui/Button.svelte";
  export let sectionLabel = "SERVICES";
  export let buttonHref = '/services';
</script>

<section class="services-wrapper">
  
  
  <div class="services-section">
    <p class="section-label">{sectionLabel}</p>
    <div class="grid">
      <div class="text-col">
        <h2 class="service-title">Transform Your Sales Operations</h2>
        <p class="service-description">
          We partner with ambitious teams to build scalable sales systems that drive predictable growth. From strategy to execution, we help you eliminate operational chaos and create clarity at every stage of your customer journey.
        </p>
        <a href={buttonHref} class="cta-button">
          <span class="button-text">View all Offerings</span>
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      
      <div class="image-col">
        <div class="image-container">
          <img src="/hero-thumbnail1.jpg" alt="Services showcase" />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .services-wrapper {
    max-width: 1600px;
    margin: 0 auto; 
    width: 100%;
    padding: 8rem 3rem;
  }

  
  .services-section {
    padding: 0 3rem;
  }
  .section-label {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #999;
        margin: 0 0 4rem 0;
    }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: center;
  }

  .text-col {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-right: 2rem;
  }

  .service-title {
    font-size: clamp(1.25rem, 3vw, 2rem);
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0;
    color: #1a1a1a;
  }

  .service-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #4a4a4a;
    margin: 0;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    font-size: 1.0625rem;
    font-weight: 600;
    color: #000;
    background: transparent;
    border: 2px solid #000;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    align-self: flex-start;
    border-radius: 2.25rem;
  }

  .cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #000;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  .cta-button:hover::before {
    left: 0;
  }

  .cta-button:hover {
    color: #fff;
  }

  .button-text,
  .arrow-icon {
    position: relative;
    z-index: 1;
  }

  .arrow-icon {
    width: 22px;
    height: 22px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cta-button:hover .arrow-icon {
    transform: translateX(4px);
  }

  .image-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #f5f5f5;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .image-container:hover img {
    transform: scale(1.05);
  }

  /* Responsive Breakpoints */
  @media (max-width: 1023px) {
    .services-wrapper {
      padding: 3.5rem 0;
    }

    .heading {
      margin: 0 2rem 2.5rem 2rem;
    }

    .services-section {
      padding: 0 2rem;
    }

    .grid {
      gap: 3rem;
    }

    .text-col {
      padding-right: 1rem;
      gap: 1.75rem;
    }

    .service-title {
      font-size: clamp(1.75rem, 3.5vw, 2.25rem);
    }

    .service-description {
      font-size: 1.0625rem;
    }
  }

  @media (max-width: 768px) {
    .services-wrapper {
      padding: 3rem 0;
    }

    .heading {
      margin: 0 1.5rem 2rem 1.5rem;
    }

    .section-title {
      font-size: 1.375rem;
      margin-top: 1.25rem;
    }

    .services-section {
      padding: 0 1.5rem;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .text-col {
      padding-right: 0;
      gap: 1.5rem;
    }

    .service-title {
      font-size: clamp(1.5rem, 5vw, 2rem);
    }

    .service-description {
      font-size: 1rem;
      line-height: 1.65;
    }

    .cta-button {
      padding: 0.875rem 1.75rem;
      font-size: 1rem;
    }

    .arrow-icon {
      width: 20px;
      height: 20px;
    }

    .image-container {
      aspect-ratio: 4 / 3;
    }
  }

  @media (max-width: 480px) {
    .services-wrapper {
      padding: 2.5rem 0;
    }

    .heading {
      margin: 0 1.25rem 1.75rem 1.25rem;
    }

    .section-title {
      font-size: 1.25rem;
    }

    .services-section {
      padding: 0 1.25rem;
    }

    .grid {
      gap: 2rem;
    }

    .text-col {
      gap: 1.25rem;
    }

    .service-title {
      font-size: 1.5rem;
    }

    .service-description {
      font-size: 0.9375rem;
    }

    .cta-button {
      padding: 0.75rem 1.5rem;
      font-size: 0.9375rem;
    }
  }

  /* Large screens */
  @media (min-width: 1280px) {
    .services-wrapper {
      padding: 5rem 0;
    }

    .heading {
      margin: 0 4rem 4rem 4rem;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .services-section {
      padding: 0 4rem;
    }

    .grid {
      gap: 5rem;
    }

    .text-col {
      gap: 2.5rem;
      padding-right: 3rem;
    }

    .service-title {
      font-size: 3rem;
    }

    .service-description {
      font-size: 1.1875rem;
    }

    .cta-button {
      padding: 1.125rem 2.25rem;
      font-size: 1.125rem;
    }

    .arrow-icon {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 1536px) {
    .services-wrapper {
      padding: 6rem 0;
    }

    .heading {
      margin: 0 5rem 5rem 5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .services-section {
      padding: 0 5rem;
    }

    .grid {
      gap: 6rem;
      max-width: 1600px;
      margin: 0 auto;
    }

    .text-col {
      gap: 3rem;
      padding-right: 4rem;
    }

    .service-title {
      font-size: 3.5rem;
    }

    .service-description {
      font-size: 1.25rem;
      line-height: 1.75;
    }

    .cta-button {
      padding: 1.25rem 2.5rem;
      font-size: 1.1875rem;
    }

    .arrow-icon {
      width: 26px;
      height: 26px;
    }
  }
</style>