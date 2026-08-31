<script lang="ts">
  import AnimatedSection from '$lib/components/AnimatedSection.svelte';
  import { projects } from '$lib/data/projects';
</script>

<svelte:head>
  <title>LaGGe | Creative Developer</title>
</svelte:head>

<!-- Фоновые пятна -->
<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
  <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
  <div class="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
</div>

<main class="px-4 max-w-6xl mx-auto">
  
  <!-- INTRO HERO SECTION -->
  <!-- Этот блок занимает весь первый экран и "уезжает" при скролле -->
  <section class="min-h-screen flex flex-col justify-center items-center text-center relative z-10 intro-section">
    <h1 class="text-7xl md:text-9xl font-bold leading-none mb-6 tracking-tighter hero-title">
      LaGGe<span class="text-purple-500">.</span>
    </h1>
    <p class="text-xl md:text-2xl text-gray-400 max-w-lg mb-10 hero-subtitle">
      Frontend Developer & UI Designer.<br />
      Создаю цифровые продукты с характером.
    </p>
    
    <div class="flex gap-4 hero-buttons">
      <a href="/projects" class="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105">
        <span class="relative z-10">Мои работы</span>
        <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </a>
      <a href="/about" class="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all">
        Обо мне
      </a>
    </div>
  </section>

  <!-- CONTENT STARTS HERE -->
  <section class="py-24 border-t border-white/10">
    <AnimatedSection>
      <h2 class="text-3xl font-bold mb-12 flex items-center gap-2">
        <span class="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span> 
        Избранные проекты
      </h2>
    </AnimatedSection>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project, i}
        <AnimatedSection delay={i * 100}>
          <a href="/projects/{project.slug}" class="group relative block aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-500/50 transition-all duration-500">
            <img src={project.image} alt={project.title} class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6 w-full">
              <h3 class="text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p class="text-sm text-gray-400 line-clamp-1">{project.description}</p>
            </div>
          </a>
        </AnimatedSection>
      {/each}
    </div>
  </section>

</main>

<style>
  /* Анимация появления при загрузке */
  .hero-title {
    animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
    transform: translateY(40px);
  }
  
  .hero-subtitle {
    animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
    opacity: 0;
    transform: translateY(30px);
  }

  .hero-buttons {
    animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Эффект медленного пульсации фона */
  .animate-pulse-slow {
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
  }
</style>