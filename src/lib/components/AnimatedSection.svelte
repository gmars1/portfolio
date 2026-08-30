<script lang="ts">
  // Импортируем действие inview (обратите внимание на регистр)
  import { inview } from 'svelte-inview';

  let ref: HTMLDivElement;
  
  // В Svelte 5 используем $props()
  let { delay = 0, duration = 800 } = $props();

  function handleEnter(event: CustomEvent) {
    if (event.detail.isIntersecting) {
      const target = event.target as HTMLElement;
      target.classList.add('opacity-100', 'translate-y-0');
      target.classList.remove('opacity-0', 'translate-y-10');
    }
  }
</script>

<div 
  bind:this={ref} 
  use:inview={{ once: true }} 
  on:inview={handleEnter}
  class="opacity-0 translate-y-10 transition-all ease-out"
  style="transition-duration: {duration}ms; transition-delay: {delay}ms;"
>
  <slot />
</div>