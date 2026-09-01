<script lang="ts">
  import { page } from '$app/stores';
  import { resolve } from '$app/paths';
</script>

<section class="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050505]">
  
  <!-- Навигация внутри Hero -->
  <nav class="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20">
    <a href={resolve('/')} class="font-bold text-2xl tracking-tighter text-white hover:text-purple-400 transition-colors">
      LaGGe<span class="text-purple-500">.</span>
    </a>
    <div class="hidden md:flex gap-8 text-sm font-medium text-gray-400">
      <a href={resolve('/projects')} class="hover:text-white transition-colors">Work</a>
      <a href={resolve('/about')} class="hover:text-white transition-colors">About</a>
      <a href="mailto:hello@lagge.dev" class="px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all">Contact</a>
    </div>
  </nav>

  <!-- Центральный контент -->
  <div class="flex-grow flex flex-col items-center justify-center text-center px-4 z-10">
    <h1 class="text-[12vw] leading-none font-bold text-white tracking-tighter mix-blend-difference">
      LaGGe
    </h1>
    <p class="mt-4 text-xl text-gray-400 max-w-md animate-fade-in-up">
      Frontend Developer & UI Designer
    </p>
  </div>

  <!-- Индикатор скролла -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>

  <!-- Фоновый градиент -->
  <div class="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
</section>

<style>
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out 0.5s forwards;
    opacity: 0;
  }
</style>