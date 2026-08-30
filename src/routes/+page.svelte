<script lang="ts">
  import HeroSection from '$lib/components/HeroSection.svelte';
  // import AnimatedSection from '$lib/components/AnimatedSection.svelte'; // Временно закомментировали
  import { projects } from '$lib/data/projects';
</script>

<svelte:head>
  <title>LaGGe | Портфолио</title>
  <meta name="description" content="Персональный сайт-визитка разработчика LaGGe" />
</svelte:head>

<HeroSection title="Привет, я LaGGe" subtitle="Студент и начинающий разработчик" />

<main class="max-w-4xl mx-auto px-4 py-16 space-y-24">

  <!-- Секция "Обо мне" БЕЗ анимации -->
  <div>
    <h2 class="text-3xl font-bold mb-6 text-gray-800">Обо мне</h2>
    <p class="text-lg text-gray-600 leading-relaxed">
      Я увлечен современными веб-технологиями и постоянно учусь новому. 
      Мой путь в программировании начался с curiosity, а сейчас я активно работаю с 
      SvelteKit, TypeScript и базами данных. Стремлюсь создавать быстрые и удобные интерфейсы.
    </p>
  </div>

  <!-- Секция "Проекты" БЕЗ анимации -->
  <section>
    <div class="flex justify-between items-end mb-8">
      <h2 class="text-3xl font-bold text-gray-800">Мои проекты</h2>
      <a href="/projects" class="text-blue-600 hover:underline font-medium">Все проекты &rarr;</a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects.slice(0, 2) as project}
        <a href="/projects/{project.slug}" class="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
          <div class="h-48 overflow-hidden">
            <img src={project.image} alt={project.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
            <p class="text-gray-600 line-clamp-2 mb-4">{project.description}</p>
            <div class="flex flex-wrap gap-2">
              {#each project.technologies.slice(0, 3) as tech}
                <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">{tech}</span>
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>

</main>