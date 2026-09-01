<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { resolve, base } from '$app/paths';
  
  let container: HTMLDivElement;
  let plane: HTMLImageElement;
  let content: HTMLDivElement;
  
  // Параметры для анимации
  let scrollY = 0;
  let windowHeight = 0;

  onMount(() => {
    windowHeight = window.innerHeight;
    
    const handleScroll = () => {
      scrollY = window.scrollY;
      updateAnimation();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function updateAnimation() {
    if (!container || !plane || !content) return;

    // Процент прокрутки относительно высоты экрана (0 to 1)
    const progress = Math.min(scrollY / (windowHeight * 1.5), 1);

    // Логика движения самолета
    // 1. Движение по диагонали
    const x = progress * 200; 
    const y = progress * -100;
    const scale = 1 + progress * 0.5;
    const rotate = progress * 15;

    // Если мы проскроллили достаточно далеко, начинаем трансформацию в фон
    if (progress > 0.8) {
      const transformProgress = (progress - 0.8) / 0.2; // от 0 до 1
      
      // Самолет улетает вверх и исчезает
      plane.style.transform = `translate(${x}px, ${y - 500 * transformProgress}px) scale(${scale}) rotate(${rotate}deg)`;
      plane.style.opacity = `${1 - transformProgress}`;
      
      // Фон (салон) появляется
      content.style.opacity = `${transformProgress}`;
      content.style.transform = `scale(${0.8 + 0.2 * transformProgress})`;
    } else {
      // Обычное движение самолета
      plane.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`;
      plane.style.opacity = '1';
      content.style.opacity = '0';
      content.style.transform = 'scale(0.8)';
    }
  }
</script>

<div bind:this={container} class="relative h-[150vh] bg-gray-900 overflow-hidden">
  
  <!-- Слой 1: Самолет -->
  <img 
    bind:this={plane}
    src={resolve('/images/plane.png')}
    alt="Plane" 
    class="absolute top-1/2 left-1/2 w-64 md:w-96 z-10 transition-transform will-change-transform"
    style="transform-origin: center;"
  />

  <!-- Слой 2: Салон / Контент (появляется позже) -->
  <div 
    bind:this={content}
    class="absolute inset-0 z-20 flex flex-col items-center justify-center text-white bg-cover bg-center transition-all duration-100 ease-out"
    style="background-image: url('{base}/images/interior.jpg');"
  >
    <div class="bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center max-w-2xl mx-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Добро пожаловать на борт</h1>
      <p class="text-xl text-gray-200 mb-8">
        Мы отправляемся в путешествие по миру современных технологий.
      </p>
      <a href={resolve('/projects')} class="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105">
        Начать полет
      </a>
    </div>
  </div>

  <!-- Подсказка для скролла -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-30">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>

</div>