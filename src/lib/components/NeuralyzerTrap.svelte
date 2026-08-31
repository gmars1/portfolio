<script lang="ts">
  import { onMount } from 'svelte';
  
  let flashOverlay: HTMLDivElement;
  let hasTriggered = false;

  onMount(() => {
    // Используем sessionStorage вместо localStorage
    const seenFlash = sessionStorage.getItem('neuralyzer_seen');
    
    if (!seenFlash) {
      window.addEventListener('scroll', handleScroll);
    }
  });

  function handleScroll() {
    if (hasTriggered) return;

    // Триггер срабатывает, когда проскроллили 15% экрана
    if (window.scrollY > window.innerHeight * 0.15) {
      triggerNeuralyzer();
    }
  }

  function triggerNeuralyzer() {
    hasTriggered = true;
    window.removeEventListener('scroll', handleScroll);

    // Записываем в sessionStorage (исчезнет при закрытии вкладки)
    sessionStorage.setItem('neuralyzer_seen', 'true');

    // 1. Вспышка
    if (flashOverlay) {
      flashOverlay.classList.remove('opacity-0', 'pointer-events-none');
      flashOverlay.classList.add('opacity-100');
    }

    // 2. Возврат в начало и очистка
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // 3. Плавное исчезновение белого экрана
      setTimeout(() => {
        if (flashOverlay) {
          flashOverlay.classList.remove('opacity-100');
          flashOverlay.classList.add('opacity-0', 'pointer-events-none');
        }
      }, 800);
    }, 150);
  }
</script>

<!-- Слой вспышки -->
<div 
  bind:this={flashOverlay}
  class="fixed inset-0 bg-white z-[9999] opacity-0 pointer-events-none transition-opacity duration-1000 ease-out flex items-center justify-center overflow-hidden"
>
  <div class="absolute inset-0 bg-radial-gradient from-white to-gray-200"></div>
</div>

<style>
  .bg-radial-gradient {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%);
  }
</style>