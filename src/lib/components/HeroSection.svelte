<script lang="ts">
  let { 
    title = "Привет, я LaGGe", 
    subtitle = "Frontend Developer & Student" 
  } = $props();
</script>

<section class="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
  <!-- Фоновое изображение с эффектом параллакса -->
  <div 
    class="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-50"
    style="background-image: url('/images/s.png');" 
  ></div>
  
  <!-- Контент -->
  <div class="relative z-10 text-center px-4 max-w-2xl">
    <h1 class="text-5xl md:text-7xl font-bold mb-4 tracking-tight">{title}</h1>
    <p class="text-xl md:text-2xl text-gray-300 mb-8">{subtitle}</p>
    <a 
      href="/projects" 
      class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-transform hover:scale-105"
    >
      Смотреть проекты
    </a>
  </div>
</section>