<!-- src/routes/+error.svelte -->
<script>
  import { page } from '$app/stores';
</script>

<div class="error">
  <h1>{$page.status}: {$page.error.message}</h1>
  <a href="/guides">Go to Guides</a>
</div>

<style>
  .error {
    text-align: center;
    padding: 2rem;
    margin-bottom: 60px;
  }
  h1 {
    color: red;
  }
</style>
