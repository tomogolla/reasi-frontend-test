<script>
  export let data;
  const { posts } = data;
</script>

<div class="guides">
  <ul>
    {#each posts as post}
      <li>
        <a href={`/guides/${post.id}`} data-sveltekit-preload-data>{post.title}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .guides {
    margin: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: #719a89;
    padding: 0.4rem 0.6rem;
    display: inline-block;
    border: 1px dotted #719a89;
  }
</style>
