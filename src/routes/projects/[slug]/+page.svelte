<script lang="ts">
  import type { PageData } from './$types';
  import AnimatedSection from '$lib/components/AnimatedSection.svelte';
  import { resolve } from '$app/paths';

  let { data }: { data: PageData } = $props();
  const { project } = data;
</script>

<svelte:head>
  <title>{project.title} | LaGGe</title>
  <meta name="description" content={project.description} />
</svelte:head>

<!-- НАВИГАЦИЯ -->
<nav class="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
  <a href={resolve('/')} class="font-bold text-2xl tracking-tighter text-white hover:text-purple-400 transition-colors">
    LaGGe<span class="text-purple-500">.</span>
  </a>
  <a href={resolve('/projects')} class="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
    Все проекты
  </a>
</nav>

<div class="max-w-5xl mx-auto px-4 pt-32 pb-24">
  
  <!-- Заголовок и технологии -->
  <AnimatedSection>
    <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">{project.title}</h1>
    <div class="flex flex-wrap gap-3 mb-12">
      {#each project.technologies as tech}
        <span class="bg-white/5 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
          {tech}
        </span>
      {/each}
    </div>
  </AnimatedSection>

  <!-- Главное изображение -->
  <AnimatedSection delay={100}>
    <div class="rounded-2xl overflow-hidden shadow-2xl mb-16 border border-white/10 group">
      <img 
        src={project.image} 
        alt={project.title} 
        class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
      />
    </div>
  </AnimatedSection>

  <!-- Описание -->
  <AnimatedSection delay={200}>
    <div class="prose prose-invert prose-lg max-w-none text-gray-300 mb-16">
      <p class="text-xl leading-relaxed text-white/90">{project.description}</p>
      <!-- Здесь можно добавить больше текста о проекте -->
    </div>
  </AnimatedSection>

  <!-- Галерея скриншотов -->
  {#if project.screenshots && project.screenshots.length > 0}
    <AnimatedSection delay={300}>
      <h2 class="text-2xl font-bold mb-8 text-white">Галерея</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each project.screenshots as screenshot}
          <img 
            src={screenshot} 
            alt="Screenshot" 
            class="rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" 
          />
        {/each}
      </div>
    </AnimatedSection>
  {/if}

  <!-- Ссылки (Demo & GitHub) -->
  <AnimatedSection delay={400}>
    <div class="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-white/10">
      {#if project.link}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-900/20"
        >
          <span>Посмотреть демо</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      {/if}
      
      {#if project.github}
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl border border-white/10 transition-all hover:border-white/30"
        >
          <span>Исходный код</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      {/if}
    </div>
  </AnimatedSection>

</div>