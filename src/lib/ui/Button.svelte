<script>
  export let variant = 'primary';
  export let size = 'medium';
  export let href = null;
  export let disabled = false;
</script>

{#if href}
  <a {href} class="button {variant} {size}" class:disabled {...$$restProps}>
    <slot />
  </a>
{:else}
  <button class="button {variant} {size}" {disabled} {...$$restProps}>
    <slot />
  </button>
{/if}

<style> 
  .button {
    border-radius: 50px;
    padding: 0.25rem 2rem;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;
    display: inline-block;
    text-align: center;
    font-family: inherit;
    font-size: 1rem;
  }

  .primary {
    background-color: #d9d9d9;
    color: #333;
  }

  .primary:hover:not(.disabled) {
    background-color: #333;
    color: #d9d9d9;
  }

  .brand {
    background-color: transparent;
    color: #333;
    font-weight: bold;
    font-size: 1.25rem;
    border: 1px solid #d9d9d9;
  }

  .brand:hover:not(.disabled) {
    background-color: #d9d9d9;
    color: white;
  }

  .disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .small {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }

  .large {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }




  
</style>
