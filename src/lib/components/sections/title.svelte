<script>
  import brandUrl from '$lib/assets/Title.svg';
</script>

<img src={brandUrl} alt="Brand Name" class="hero-title" />

<style>
  .hero-title {
    width: 100%;
    height: auto;
   
  }

   /* Hide on tablet and mobile (md and sm screens) */
   @media (max-width: 1023px) {
      .hero-title {
         display: none;
      }
   }

   /* Desktop breakpoints for fine-tuning if needed */
   @media (min-width: 1024px) and (max-width: 1279px) {
      /* lg - Large screens */
      .hero-title {
         padding: 0 2rem;
      }
   }

   @media (min-width: 1280px) and (max-width: 1535px) {
      /* xl - Extra large screens */
      .hero-title {
         padding: 0 2rem;
      }
   }

   @media (min-width: 1536px) {
      /* xxl - Extra extra large screens */
      .hero-title {
         padding: 0 2rem;
      }
   }
</style>
