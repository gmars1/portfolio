<script lang="ts">
  import AnimatedSection from '$lib/components/AnimatedSection.svelte';
  import { projects } from '$lib/data/projects';
</script>

<svelte:head>
  <title>Проекты | LaGGe</title>
  <meta name="description" content="Список всех моих разработок и проектов" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16">
  
  <AnimatedSection>
    <h1 class="text-4xl font-bold mb-8 text-gray-900">Все мои проекты</h1>
    <p class="text-lg text-gray-600 mb-12">
      Здесь собраны работы, над которыми я трудился. Каждый проект — это новый вызов и изученная технология.
    </p>
  </AnimatedSection>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each projects as project, i}
      <AnimatedSection delay={i * 100}>
        <a href="/projects/{project.slug}" class="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
          <div class="h-56 overflow-hidden relative">
            <!-- Затемнение картинки при наведении -->
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <div class="p-6 flex-grow flex flex-col">
            <h2 class="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h2>
            <p class="text-gray-600 mb-4 flex-grow">{project.description}</p>
            
            <div class="flex flex-wrap gap-2 mt-auto">
              {#each project.technologies as tech}
                <span class="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-200">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </a>
      </AnimatedSection>
    {/each}
  </div>

</div>