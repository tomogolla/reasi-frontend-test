<script>
  export let data;
  const { post } = data;
</script>

<div class="guide">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <a href="/">Home</a>
</div>

<style>
    .guide {
        margin: 40px;
        padding: 10px;
    }
    a {
        margin-top: 20px;
        color: aquamarine;
        text-decoration: underline;
    }
</style>