<script lang="ts">
  import type { PageData } from './$types';
  import AnimatedSection from '$lib/components/AnimatedSection.svelte';

  // Получаем данные, которые вернул +page.ts
  let { data }: { data: PageData } = $props();
  
  const { project } = data;
</script>

<svelte:head>
  <title>{project.title} | LaGGe</title>
  <meta name="description" content={project.description} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16">
  
  <!-- Кнопка "Назад" -->
  <AnimatedSection>
    <a href="/projects" class="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Назад к проектам
    </a>
  </AnimatedSection>

  <!-- Заголовок и технологии -->
  <AnimatedSection delay={100}>
    <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{project.title}</h1>
    <div class="flex flex-wrap gap-2 mb-8">
      {#each project.technologies as tech}
        <span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
          {tech}
        </span>
      {/each}
    </div>
  </AnimatedSection>

  <!-- Главное изображение -->
  <AnimatedSection delay={200}>
    <div class="rounded-2xl overflow-hidden shadow-lg mb-12 border border-gray-100">
      <img src={project.image} alt={project.title} class="w-full h-auto object-cover" />
    </div>
  </AnimatedSection>

  <!-- Описание -->
  <AnimatedSection delay={300}>
    <div class="prose prose-lg max-w-none text-gray-700 mb-12">
      <p class="text-xl leading-relaxed">{project.description}</p>
      <!-- Здесь можно добавить более длинное описание, если захотите -->
    </div>
  </AnimatedSection>

  <!-- Галерея скриншотов (если есть) -->
  {#if project.screenshots && project.screenshots.length > 0}
    <AnimatedSection delay={400}>
      <h2 class="text-2xl font-bold mb-6">Скриншоты</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each project.screenshots as screenshot}
          <img src={screenshot} alt="Screenshot" class="rounded-lg border border-gray-200 hover:shadow-md transition-shadow" />
        {/each}
      </div>
    </AnimatedSection>
  {/if}

  <!-- Ссылки -->
  <AnimatedSection delay={500}>
    <div class="flex gap-4 mt-12 pt-8 border-t border-gray-100">
      {#if project.link}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
        >
          Посмотреть демо
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      {/if}
      
      {#if project.github}
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
        >
          GitHub
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      {/if}
    </div>
  </AnimatedSection>

</div>