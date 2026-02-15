<script>
  export let sectionLabel = "ABOUT";
  export let headline = "We design systems that move businesses forward.";
  export let description = `
  Reasi is a systems-first consulting practice focused on helping small and growing businesses operate with clarity and confidence. Through diagnostics, workflow design, and digital enablement, I create practical growth systems tailored to how founders actually work.
  `;
</script>

<section class="about-section">
  <div class="container">

    <p class="section-label">{sectionLabel}</p>

    <div class="about-grid">
      <div class="headline-col">
        <h2 class="headline">{headline}</h2>
      </div>

      <div class="description-col">
        <p class="description">{description}</p>
      </div>
    </div>

    

  </div>
</section>

<style>
  .about-section {
    position: relative;
    width: 100%;
    padding: 8rem 3rem;
    background: white;
    overflow: hidden;
  }

  .container {
    max-width: 1600px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .section-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #999;
    margin-bottom: 4rem;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 6rem;
  }

  .headline {
    font-size: clamp(2.5rem, 4vw, 4rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.7;
    color: #333;
    margin: 0;
    max-width: 500px;
  }



  /* Responsive */
  @media (max-width: 1024px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .description {
      max-width: 100%;
    }

    
  }

  @media (max-width: 768px) {
    .about-section {
      padding: 5rem 1.5rem;
    }

    .section-label {
      margin-bottom: 2.5rem;
    }
  }
</style>
