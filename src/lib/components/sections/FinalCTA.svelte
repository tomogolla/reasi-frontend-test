<script>

  export let paragraph = `
  To deliver operational clarity that actually scales, Reasi applies a cross-functional model that blends business diagnostics, workflow engineering, and digital enablement. Every engagement is executed in tight partnership with founders to ensure solutions are practical, sustainable, and embedded into day-to-day execution.
  `;
</script>

<section class="cta-section">
  <div class="container">
    


    <div class="content">
      <p class="cta-text">{paragraph}</p>

      <a href="/services" class="cta-button">
        See Services
        <span class="arrow">→</span>
      </a>
    </div>

  </div>
</section>

<style>
  .cta-section {
    width: 100%;
    padding: 8rem 3rem;
    background: #111;
    color: white;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  

  .content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .cta-text {
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    line-height: 1.6;
    font-weight: 400;
    margin: 0;
  }

  .cta-button {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.9rem 1.5rem;
    border: 1px solid white;
    color: white;
    transition: all 0.25s ease;
    border-radius: 2rem;
  }

  .cta-button:hover {
    background: white;
    color: #111;
  }

  .cta-button:hover .arrow {
    transform: translateX(4px);
  }

  .arrow {
    transition: transform 0.25s ease;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .cta-section {
      padding: 5rem 1.5rem;
    }

    .content {
      gap: 2rem;
    }
  }
</style>
