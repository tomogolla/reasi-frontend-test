<script>
  export let sectionLabel = "PURPOSE";
  export let words = ["What to Do", "and", "It's Systems"];
</script>

<section class="purpose-section">
  <div class="container">
    <p class="section-label">{sectionLabel}</p>

    <div class="stairs">
      {#each words as word, index}
        <h2
          class="large-word {index === words.length - 1 ? 'italic' : ''}"
          style="--step:{index}"
        >
          {word}
        </h2>
      {/each}
    </div>
  </div>
</section>

<style>
  .purpose-section {
    width: 100%;
    padding: 8rem 3rem;
    background: #f5f5f5;
  }

  .container {
    max-width: 1600px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #999;
    margin: 0 0 4rem 0;
  }

  /* Stairs Layout */
  .stairs {
    display: flex;
    flex-direction: column;
  }

  .large-word {
    font-size: clamp(6rem, 15vw, 18rem);
    font-weight: 400;
    line-height: 0.9;
    letter-spacing: -0.03em;
    color: #d1d1d1;
    margin: 0;
    font-family: Georgia, 'Times New Roman', serif;

    /* Stair effect */
    margin-left: calc(var(--step) * 6vw);
  }

  .italic {
    font-style: italic;
  }

  /* Responsive Adjustments */
  @media (max-width: 1279px) {
    .purpose-section {
      padding: 6rem 2rem;
    }

    .large-word {
      font-size: clamp(5rem, 12vw, 14rem);
      margin-left: calc(var(--step) * 5vw);
    }
  }

  @media (max-width: 1023px) {
    .purpose-section {
      padding: 5rem 2rem;
    }

    .large-word {
      font-size: clamp(4rem, 15vw, 10rem);
      margin-left: calc(var(--step) * 4vw);
    }
  }

  @media (max-width: 768px) {
    .purpose-section {
      padding: 4rem 1.5rem;
    }

    .large-word {
      font-size: clamp(3rem, 18vw, 7rem);
      margin-left: calc(var(--step) * 3vw);
    }
  }

  @media (max-width: 480px) {
    .purpose-section {
      padding: 3.5rem 1.25rem;
    }

    .large-word {
      font-size: clamp(2.5rem, 20vw, 5rem);
      margin-left: calc(var(--step) * 2vw);
    }
  }

  @media (min-width: 1536px) {
    .purpose-section {
      padding: 10rem 5rem;
    }

    .large-word {
      font-size: 20rem;
      margin-left: calc(var(--step) * 8rem);
    }
  }
</style>
