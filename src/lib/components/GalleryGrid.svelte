<script>
  import GalleryCard from './GalleryCard.svelte';
  export let items = [];
</script>

<div class="grid-wrap">
  {#each items as item, i}
    <GalleryCard
      title={item.title}
      src={item.src}
      alt={item.alt}
      subtitle={item.subtitle}
      body={item.body}
      bgColor={item.bgColor}
      />
  {/each}
</div>

<style>
  .grid-wrap{
    display:grid;
    grid-template-columns: repeat(3, 450px);
    gap:16px;
    justify-content:center;
    align-items:start;
    padding:16px;
    box-sizing:border-box;
    
    margin: 0; /* Mobile */
	}
	@media (min-width: 768px) {
		.grid-wrap {
		margin: 1rem auto; /* Tablet/Desktop, centered */
		max-width: 1200px;
		}
	}
  @media (max-width:1400px){
    .grid-wrap{
      grid-template-columns: repeat(3, 1fr);
    }
    .grid-wrap :global(.card){
      width:100%;
      height:415px;
    }
  }
  /* Small screens: single column layout for cards */
  @media (max-width: 640px) {
    .grid-wrap{
      grid-template-columns: 1fr;
      padding: 12px;
      gap: 12px;
      justify-items: stretch;
    }
    .grid-wrap :global(.card){
      width:100%;
      height: auto;
    }
  }
</style>
