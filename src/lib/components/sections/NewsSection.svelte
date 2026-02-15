<script>
  export let sectionLabel = "LATEST & NOTEWORTHY";

  export let featured = {
    title: "Rethinking Scalable Systems in Emerging Markets",
    category: "INSIGHT",
    date: "January 2026",
    link: "#"
  };

  export let articles = [
    {
      title: "Designing Infrastructure for Long-Term Growth",
      category: "FEATURE",
      date: "December 2025",
      link: "#"
    },
    {
      title: "Why Clarity Is a Competitive Advantage",
      category: "OPINION",
      date: "November 2025",
      link: "#"
    },
    {
      title: "Building Digital Foundations That Endure",
      category: "CASE STUDY",
      date: "October 2025",
      link: "#"
    }
  ];
</script>

<section class="news-section">
  <div class="container">

    <p class="section-label">{sectionLabel}</p>

    <div class="news-grid">
      
      <!-- Featured Article -->
      <a class="featured" href={featured.link}>
        <div class="meta">
          <span>{featured.category}</span>
          <span>{featured.date}</span>
        </div>
        <h2>{featured.title}</h2>
      </a>

      <!-- Secondary Articles -->
      <div class="list">
        {#each articles as article}
          <a class="list-item" href={article.link}>
            <div class="meta">
              <span>{article.category}</span>
              <span>{article.date}</span>
            </div>
            <h3>{article.title}</h3>
          </a>
        {/each}
      </div>

    </div>

  </div>
</section>

<style>
  .news-section {
    width: 100%;
    padding: 8rem 3rem;
    background: #111;
    color: #fff;
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
    margin-bottom: 4rem;
  }

  .news-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 6rem;
  }

  /* Featured Article */
  .featured {
    text-decoration: none;
    color: inherit;
  }

  .featured h2 {
    font-size: clamp(2.5rem, 4vw, 4rem);
    font-weight: 400;
    line-height: 1.15;
    margin: 1rem 0 0 0;
    transition: opacity 0.3s ease;
  }

  /* List */
  .list {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .list-item {
    text-decoration: none;
    color: inherit;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e5e5e5;
    transition: opacity 0.3s ease;
  }

  .list-item h3 {
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0.5rem 0 0 0;
  }

  /* Meta */
  .meta {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    display: flex;
    gap: 1rem;
  }

  /* Hover Effects */
  .featured:hover h2,
  .list-item:hover {
    opacity: 0.6;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .news-grid {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }

  @media (max-width: 768px) {
    .news-section {
      padding: 5rem 1.5rem;
    }

    .featured h2 {
      font-size: clamp(2rem, 6vw, 3rem);
    }
  }
</style>
