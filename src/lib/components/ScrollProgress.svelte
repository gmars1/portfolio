<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let progressBar: HTMLDivElement;

  onMount(() => {
    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  });
</script>

<div class="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 z-[60]" 
     bind:this={progressBar} 
     style="width: 0%">
</div>