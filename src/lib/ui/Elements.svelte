<script>
  export let variant = 'default';
  export let size = 'medium';
  export let align = 'left';
</script>

<hr class="hr {variant} {size} {align}" />

<style>
  .hr {
    border: none;
    height: 1px;
    background-color: currentColor;
    opacity: 0.25;
    
  }

  /* Dash variant: show a centered dash instead of a line */
  .dash {
    background: none;
    height: auto;
    opacity: 1;
    
  }

  .dash::after {
    content: "-";
    display: block;
    text-align: center;
    font-size: 1.25rem;
    color: currentColor;
    opacity: 0.9;
    line-height: 1;
  }

  /* Variants */
  .default {
    color: #000;
  }

  .muted {
    color: #000;
    opacity: 0.15;
  }

  .strong {
    opacity: 0.5;
  }

  /* Sizes */
  .small {
    width: 2rem;
  }

  .medium {
    width: 3rem;
  }

  .large {
    width: 90%;
    
  }

  /* Alignment */
  .left {
    margin-left: 0;
  }

  .center {
    margin-left: auto;
    margin-right: auto;
  }

  .right {
    margin-left: auto;
  }
</style>
