<script lang="ts">
  import GalleryGrid from '../GalleryGrid.svelte';
  import { galleryData } from './galleryData.js';
  import Hr from '$lib/ui/Elements.svelte';
  export let sectionLabel = "RECENT WORK";
</script>
<div class="recent-work">
    <p class="section-label">{sectionLabel}</p>
    <GalleryGrid items={galleryData} />
</div>

<style>
  .recent-work {
    padding: 8rem 3rem;
  }
  .section-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #999;
    margin: 0 0 4rem 0;
  }

  /* Responsive Breakpoints */
  @media (max-width: 1279px) {
    .recent-work {
      padding: 6rem 2rem;
    }

    .section-label {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 480px) {
    .recent-work {
      padding: 3.5rem 1.25rem;
    }

    .section-label {
      margin-bottom: 2rem;
    }

  }
  /* Large screens */
  @media (min-width: 1536px) {
    .recent-work {
      padding: 10rem 5rem;
    }

    .section-label {
      font-size: 0.8125rem;
      margin-bottom: 5rem;
    }

  }
</style>