<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let flashOverlay: HTMLDivElement;
  let stick: HTMLDivElement; // Наша "палка"
  let hasTriggered = false;

  function toggleScroll(lock: boolean) {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = lock ? 'hidden' : '';
    }
  }

  function handleScrollAttempt() {
    if (hasTriggered) return;
    
    hasTriggered = true;
    window.removeEventListener('wheel', handleScrollAttempt);
    window.removeEventListener('touchstart', handleScrollAttempt);

    triggerSequence();
  }

  function triggerSequence() {
    sessionStorage.setItem('neuralyzer_seen', 'true');

    // 1. Выдвигаем палку сбоку
    if (stick) {
      stick.classList.remove('translate-x-[150%]');
      stick.classList.add('translate-x-0');
    }

    // 2. Ждем пока она выедет, потом делаем вспышку
    setTimeout(() => {
      // ЗВУК ЩЕЛЧКА (опционально, можно добавить аудио)
      
      // ВСПЫШКА
      if (flashOverlay) {
        flashOverlay.classList.remove('opacity-0', 'pointer-events-none');
        flashOverlay.classList.add('opacity-100');
      }

      // 3. Через мгновение после вспышки скроллим и убираем палку
      setTimeout(() => {
        toggleScroll(false); // Разблокируем скролл
        
        const content = document.getElementById('main-content');
        if (content) {
          content.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Убираем палку обратно
        if (stick) {
          stick.classList.remove('translate-x-0');
          stick.classList.add('translate-x-[150%]');
        }

        // Убираем белый экран
        setTimeout(() => {
          if (flashOverlay) {
            flashOverlay.classList.remove('opacity-100');
            flashOverlay.classList.add('opacity-0', 'pointer-events-none');
          }
        }, 800);

      }, 400); // Задержка между вспышкой и скроллом

    }, 800); // Задержка на выезд палки
  }

  onMount(() => {
    if (typeof window === 'undefined') return;

    const seenFlash = sessionStorage.getItem('neuralyzer_seen');
    
    if (!seenFlash) {
      toggleScroll(true); 
      window.addEventListener('wheel', handleScrollAttempt, { passive: true });
      window.addEventListener('touchstart', handleScrollAttempt, { passive: true });
    } else {
      toggleScroll(false);
    }
  });

  onDestroy(() => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('wheel', handleScrollAttempt);
    window.removeEventListener('touchstart', handleScrollAttempt);
  });
</script>

<!-- ПАЛКА НЕЙРАЛИЗАТОРА (Спрятана справа за экраном) -->
<div 
  bind:this={stick}
  class="fixed right-0 top-1/2 -translate-y-1/2 z-[90] translate-x-[150%] transition-transform duration-700 ease-out flex items-center"
>
  <div class="bg-gray-900 border-l-4 border-purple-500 p-6 rounded-l-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center gap-4">
    <div class="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
    <span class="text-white font-bold tracking-widest text-sm uppercase">Scanning...</span>
  </div>
</div>

<!-- СЛОЙ ВСПЫШКИ -->
<div 
  bind:this={flashOverlay}
  class="fixed inset-0 bg-white z-[100] opacity-0 pointer-events-none transition-opacity duration-500 ease-out"
></div>