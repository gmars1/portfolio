<script lang="ts">
  let { 
    title = "Привет, я Marsel", 
    subtitle = "Frontend Developer & Student" 
  } = $props();
</script>

<section class="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-950 text-white">
  <!-- Анимированные фоновые пятна -->
  <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
  <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
  <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

  <div class="relative z-10 text-center px-4 max-w-3xl">
    <!-- Градиентный текст -->
    <h1 class="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
        {title}
      </span>
    </h1>
    
    <p class="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-wide">{subtitle}</p>
    
    <div class="flex justify-center gap-4">
      <a 
        href="/projects" 
        class="group relative px-8 py-3 bg-white text-gray-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105"
      >
        <span class="relative z-10">Смотреть работы</span>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </a>
      
      <a 
        href="/about" 
        class="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:bg-gray-800 hover:border-gray-500 transition-all"
      >
        Обо мне
      </a>
    </div>
  </div>
</section>

<style>
  /* Кастомные анимации для фона */
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  
  @keyframes gradient-x {
    0%, 100% { background-size: 200% 200%; background-position: left center; }
    50% { background-size: 200% 200%; background-position: right center; }
  }
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
  }
</style>