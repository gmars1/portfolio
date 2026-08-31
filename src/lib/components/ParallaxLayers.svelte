<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let container: HTMLDivElement;
  let layer1: HTMLDivElement; // Дальний фон
  let layer2: HTMLDivElement; // Средний план (например, самолет или горы)
  let content: HTMLDivElement; // Текст

  onMount(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Разная скорость для каждого слоя (parallax factor)
      // Чем меньше число, тем медленнее движется слой
      if (layer1) layer1.style.transform = `translateY(${scrolled * 0.2}px)`;
      if (layer2) layer2.style.transform = `translateY(${scrolled * 0.5}px)`;
      if (content) content.style.transform = `translateY(${scrolled * -0.1}px)`; // Текст чуть всплывает вверх
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<!-- Контейнер должен быть выше экрана, чтобы было куда скроллить -->
<div bind:this={container} class="relative h-[150vh] overflow-hidden bg-gray-900">
  
  <!-- СЛОЙ 1: Дальний фон (движется медленно) -->
  <div 
    bind:this={layer1}
    class="absolute inset-0 w-full h-[120%] bg-cover bg-center z-0 will-change-transform"
    style="background-image: url('/images/sky-bg.png');" 
  ></div>

  <!-- СЛОЙ 2: Средний план (движется быстрее) -->
  <!-- Здесь может быть ваш самолет или силуэт города -->
  <div 
    bind:this={layer2}
    class="absolute bottom-0 left-0 w-full h-[80%] bg-contain bg-no-repeat bg-bottom z-10 will-change-transform"
    style="background-image: url('/images/spring_logo.png');"
  ></div>

  <!-- СЛОЙ 3: Контент (стоит почти на месте или чуть плывет) -->
  <div bind:this={content} class="relative z-20 h-screen flex flex-col items-center justify-center text-white px-4 will-change-transform">
    <h1 class="text-6xl md:text-8xl font-bold mb-4 drop-shadow-xl">Marsel</h1>
    <p class="text-2xl md:text-3xl text-gray-200 drop-shadow-md">Frontend Developer</p>
    
    <div class="mt-12 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>

</div>