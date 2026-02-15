<script>
  export let title = '';
  export let src = '';
  export let alt = '';
  export let subtitle = '';
  export let body = '';
  export let bgColor = '#ffffff';
</script>

<div class="card" style="background-color: {bgColor};">
  <h3 class="card-title">{title}</h3>
  <div class="card-image">
    <img src={src} alt={alt} />
  </div>
  <p class="card-subtitle">{subtitle}</p>
  <p class="card-body">{body}</p>
</div>

<style>
  .card{
    width:450px;
    height:440px;
    border-radius:0px;
    box-shadow:0 4px 6px rgba(0,0,0,0.1);
    overflow:hidden;
    display:flex;
    flex-direction:column;
    padding:16px;
    box-sizing:border-box;
    cursor: pointer;
    transition: transform 0.3s ease-in-out; /* */
  }
  .card:hover {
    transform: scale(1.05); 
    
  }
  .card-title{
    font-size:1.125rem;
    font-weight:600;
    margin:0 0 8px 0;
    color:#111827;
  }
  .card-image{
    width:100%;
    height:260px;
    overflow:hidden;
    border-radius:6px;
    margin-bottom:10px;
  }
  .card-image img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
  }
  .card-subtitle{
    margin:0 0 8px 0;
    color:#374151;
    font-size:0.95rem;
  }
  .card-body{
    margin:0;
    color:#111827;
    font-size:0.9rem;
    flex:1;
    overflow:auto;
  }
</style>
