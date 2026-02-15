<script>
  export let logoSrc = "/images/icons/tom-ogolla-logo-black.png";
  export let heading = "Keep up to date with our quarterly newsletter";
  export let description =
    "Insights, field notes, and operational thinking delivered once a quarter. No noise, no clutter.";

  let email = "";

  function handleSubmit() {
    console.log("Subscribed:", email);
    email = "";
  }
</script>

<section class="newsletter-section">
  <div class="container">
    <div class="grid">

      <!-- Logo Column -->
      <div class="logo-col">
        <img src={logoSrc} alt="Company Logo" />
      </div>

      <!-- Content Column -->
      <div class="content-col">
        <h2>{heading}</h2>
        <p class="description">{description}</p>

        <form class="form" on:submit|preventDefault={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            bind:value={email}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

    </div>
  </div>
</section>

<style>
  .newsletter-section {
    width: 100%;
    padding: 6rem 3rem;
    background: #f5f5f5;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 4rem;
    align-items: start;
  }

  .logo-col img {
    max-width: 160px;
    height: auto;
  }

  .content-col {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left;
    width: 80%;
  }

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 400;
    margin: 0;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
    max-width: 500px;
    color: #444;
  }

  .form {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  input {
    flex: 1;
    padding: 0.85rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    outline: none;
    transition: border 0.2s ease;
  }

  input:focus {
    border-color: #000;
  }

  button {
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
    border: 1px solid #000;
    background: transparent;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  button:hover {
    background: #000;
    color: white;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .logo-col img {
      max-width: 140px;
    }

    .form {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .newsletter-section {
      padding: 4rem 1.5rem;
    }
  }
</style>
