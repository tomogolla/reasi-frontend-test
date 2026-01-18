<script>
   import { onMount } from 'svelte';
   
   let videoElement;
   let isPlaying = false;
   let showControls = true;
   let controlsTimeout;
   
   // Props
   export let videoSrc = '/hero-1-video.webm';
   export let posterSrc = '/hero-1.svg';
   export let altText = 'Hero video';
   
   function togglePlay() {
      if (videoElement) {
         if (isPlaying) {
            videoElement.pause();
            isPlaying = false;
            showControls = true;
         } else {
            videoElement.play();
            isPlaying = true;
            hideControlsAfterDelay();
         }
      }
   }
   
   function hideControlsAfterDelay() {
      clearTimeout(controlsTimeout);
      controlsTimeout = setTimeout(() => {
         if (isPlaying) {
            showControls = false;
         }
      }, 2000);
   }
   
   function handleMouseMove() {
      if (isPlaying) {
         showControls = true;
         hideControlsAfterDelay();
      }
   }
   
   function handleVideoClick() {
      togglePlay();
   }
   
   onMount(() => {
      if (videoElement) {
         videoElement.addEventListener('ended', () => {
            isPlaying = false;
            showControls = true;
         });
      }
      
      return () => {
         clearTimeout(controlsTimeout);
      };
   });
</script>

<div 
   class="hero-video-container"
   on:mousemove={handleMouseMove}
   on:mouseleave={() => isPlaying && (showControls = false)}
>
   <video
      bind:this={videoElement}
      class="hero-video"
      poster={posterSrc}
      on:click={handleVideoClick}
      playsinline
      muted
      loop
   >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
   </video>
   
   <div class="video-overlay" class:hidden={!showControls}>
      <button 
         class="play-pause-button" 
         on:click={togglePlay}
         aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
         {#if isPlaying}
            <!-- Pause Icon -->
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
               <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
            </svg>
         {:else}
            <!-- Play Icon -->
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8 5.14v13.72L19 12L8 5.14z" fill="currentColor"/>
            </svg>
         {/if}
      </button>
   </div>
</div>

<style>
   .hero-video-container {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: #000;
   }
   
   .hero-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
   }
   
   .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.2);
      transition: opacity 0.3s ease, visibility 0.3s ease;
      pointer-events: none;
   }
   
   .video-overlay.hidden {
      opacity: 0;
      visibility: hidden;
   }
   
   .play-pause-button {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      pointer-events: all;
      backdrop-filter: blur(10px);
   }
   
   .play-pause-button:hover {
      transform: scale(1.1);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
   }
   
   .play-pause-button:active {
      transform: scale(0.95);
   }
   
   .play-pause-button svg {
      width: 32px;
      height: 32px;
      color: #000;
   }
   
   /* Responsive adjustments */
   @media (max-width: 768px) {
      .hero-video-container {
         height: 60vh;
      }
      
      .play-pause-button {
         width: 64px;
         height: 64px;
      }
      
      .play-pause-button svg {
         width: 24px;
         height: 24px;
      }
   }
   
   @media (max-width: 480px) {
      .hero-video-container {
         height: 50vh;
      }
      
      .play-pause-button {
         width: 56px;
         height: 56px;
      }
      
      .play-pause-button svg {
         width: 20px;
         height: 20px;
      }
   }
   
   /* Tablet landscape */
   @media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
      .hero-video-container {
         height: 80vh;
      }
   }
   
   /* Large screens */
   @media (min-width: 1920px) {
      .play-pause-button {
         width: 100px;
         height: 100px;
      }
      
      .play-pause-button svg {
         width: 40px;
         height: 40px;
      }
   }



@media (min-width: 1024px) {
    .hero-video-container {
      border-radius: 1.25rem;
      margin-left: 0.25rem;
      margin-right: 0.5rem;
    }
    

}

</style>