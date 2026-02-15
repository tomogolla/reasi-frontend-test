<script>
   export let buttonHref = '/work';
</script>

<section class="intro-section">
   <div class="content-wrapper">
      <h2 class="intro-text">
         Reasi helps <span class="highlight">You</span> replace operational chaos with <span class="highlight-1">simple & scalable</span> systems to run your Sales with clarity, consistency, and confidence.
      </h2>
      
      <a href={buttonHref} class="cta-button">
         <span class="button-text">View all Work</span>
         <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      </a>
   </div>
</section>

<style>
   .intro-section {
      width: 100%;
      padding: 5rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
   }
   
   .content-wrapper {
      max-width: 1200px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;
   }
   
   .intro-text {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      line-height: 1.3;
      font-weight: 300;
      letter-spacing: -0.02em;
      color: #1a1a1a;
      margin: 0;
      max-width: 1100px;
   }
   
   .highlight {
      font-weight: 500;
      position: relative;
      color: #bbaaff;
   }
   .highlight-1 {
      font-weight: 500;
      position: relative;
      color: #bbaaff;
      text-decoration: underline;
   }
   .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      font-size: 1.125rem;
      font-weight: 600;
      color: #000;
      background: transparent;
      border: 2px solid #000;
      text-decoration: none; 
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      border-radius: 2.25rem;
   }
   
   .cta-button::before {
      content: ''; 
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: #000;
      transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 0;
   }
   
   .cta-button:hover::before {
      left: 0;
   }
   
   .cta-button:hover {
      color: #fff;
   }
   
   .button-text,
   .arrow-icon {
      position: relative;
      z-index: 1;
   }
   
   .arrow-icon {
      width: 24px;
      height: 24px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
   }
   
   .cta-button:hover .arrow-icon {
      transform: translateX(4px);
   }
   
   /* Responsive breakpoints */
   @media (max-width: 1023px) {
      .intro-section {
         padding: 4rem 2rem;
      }
      
      .content-wrapper {
         gap: 2rem;
      }
      
      .intro-text {
         font-size: clamp(1.375rem, 3.5vw, 2rem);
      }
   }
   
   @media (max-width: 768px) {
      .intro-section {
         padding: 3.5rem 1.5rem;
      }
      
      .content-wrapper {
         gap: 1.75rem;
      }
      
      .intro-text {
         font-size: clamp(1.25rem, 4vw, 1.75rem);
         line-height: 1.35;
      }
      
      .cta-button {
         padding: 0.875rem 1.75rem;
         font-size: 1rem;
      }
      
      .arrow-icon {
         width: 20px;
         height: 20px;
      }
   }
   
   @media (max-width: 480px) {
      .intro-section {
         padding: 3rem 1.25rem;
      }
      
      .intro-text {
         font-size: clamp(1.125rem, 5vw, 1.5rem);
      }
      
      .cta-button {
         padding: 0.75rem 1.5rem;
         font-size: 0.9375rem;
      }
   }
   
   /* Large screens */
   @media (min-width: 1280px) {
      .intro-section {
         padding: 6rem 2rem;
      }
      
      .content-wrapper {
         gap: 3rem;
      }
   }
   
   @media (min-width: 1536px) {
      .intro-section {
         padding: 7rem 3rem;
      }
      
      .content-wrapper {
         max-width: 1400px;
         gap: 3.5rem;
      }
      
      .intro-text {
         font-size: 2.75rem;
      }
      
      .cta-button {
         padding: 1.25rem 2.5rem;
         font-size: 1.25rem;
      }
      
      .arrow-icon {
         width: 28px;
         height: 28px;
      }
   }
</style>