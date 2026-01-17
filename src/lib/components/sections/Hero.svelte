<script>
    export let src = '/gf-zukerberg-oily-painting.jpg';
    export let alt = '';
    export let radius = '22px';
</script>

<style>
    .hero {
        width: 100%;
    }

    .hero img {
        padding: 0.25rem   ;
        display: block;
        width: 100%;
        height: auto;
        border-radius: var(--radius);
        object-fit: cover;
         
    }
</style>

<div class="hero" style="--radius: {radius}">
    <img src="{src}" alt="{alt}" />
</div>