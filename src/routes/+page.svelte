<script lang="ts">
  import HeroSection from '$lib/components/HeroSection.svelte';
  import SkillsTicker from '$lib/components/SkillsTicker.svelte';
  import AnimatedSection from '$lib/components/AnimatedSection.svelte'; // Возвращаем анимацию
  import { projects } from '$lib/data/projects';
</script>

<svelte:head>
  <title>LaGGe | Портфолио</title>
  <meta name="description" content="Персональный сайт-визитка разработчика LaGGe" />
</svelte:head>

<HeroSection title="Привет, я LaGGe" subtitle="Студент и начинающий разработчик" />

<SkillsTicker />

<main class="max-w-4xl mx-auto px-4 py-16 space-y-24">

  <!-- Секция "Обо мне" С анимацией -->
  <AnimatedSection>
    <h2 class="text-3xl font-bold mb-6 text-gray-800">Обо мне</h2>
    <p class="text-lg text-gray-600 leading-relaxed">
      Я увлечен современными веб-технологиями и постоянно учусь новому. 
      Мой путь в программировании начался с curiosity, а сейчас я активно работаю с 
      SvelteKit, TypeScript и базами данных. Стремлюсь создавать быстрые и удобные интерфейсы.
    </p>
  </AnimatedSection>

  <!-- Секция "Проекты" С анимацией -->
  <section>
    <AnimatedSection>
      <div class="flex justify-between items-end mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Мои проекты</h2>
        <a href="/projects" class="text-blue-600 hover:underline font-medium">Все проекты &rarr;</a>
      </div>
    </AnimatedSection>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects.slice(0, 2) as project, i}
        <!-- Добавляем задержку (delay), чтобы карточки появлялись по очереди -->
        <AnimatedSection delay={i * 150}>
            <a href="/projects/{project.slug}" class="group relative block p-1 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 hover:from-blue-200 hover:to-purple-200 transition-all duration-500">
              <div class="relative h-full bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-white/50 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                <div class="h-52 overflow-hidden">
                  <img src={project.image} alt={project.title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div class="p-6">
                  <h3 class="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p class="text-gray-600 line-clamp-2 mb-4">{project.description}</p>
                  <div class="flex flex-wrap gap-2">
                    {#each project.technologies.slice(0, 3) as tech}
                      <span class="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded border border-gray-200">{tech}</span>
                    {/each}
                  </div>
                </div>
              </div>
            </a>
        </AnimatedSection>
      {/each}
    </div>
  </section>

  <!-- Секция контактов С анимацией -->
  <AnimatedSection>
    <div class="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
      <h2 class="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h2>
      <p class="text-gray-300 mb-8 max-w-lg mx-auto">
        Я всегда открыт для новых идей и интересных проектов. Напишите мне, и мы обсудим детали.
      </p>
      <a 
        href="mailto:your-email@example.com" 
        class="inline-block bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
      >
        Связаться со мной
      </a>
    </div>
  </AnimatedSection>

</main>