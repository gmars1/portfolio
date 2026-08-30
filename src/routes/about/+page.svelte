<script lang="ts">
  import AnimatedSection from '$lib/components/AnimatedSection.svelte';
</script>

<svelte:head>
  <title>Обо мне | LaGGe</title>
  <meta name="description" content="Информация о разработчике, его навыках и опыте" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16">
  
  <!-- Заголовок -->
  <AnimatedSection>
    <h1 class="text-4xl font-bold mb-8 text-gray-900">Обо мне</h1>
  </AnimatedSection>

  <!-- Основной текст -->
  <AnimatedSection delay={100}>
    <div class="prose prose-lg text-gray-700 mb-12">
      <p class="mb-4">
        Привет! Меня зовут LaGGe. Я студент и начинающий разработчик, который не может представить свою жизнь без кода. 
        Мой путь в IT начался с простого любопытства: "А как это работает?", которое переросло в страсть к созданию современных веб-интерфейсов.
      </p>
      <p class="mb-4">
        Сейчас я активно углубляюсь в экосистему <strong>SvelteKit</strong> и <strong>TypeScript</strong>. 
        Мне нравится принцип "меньше кода — больше результата", который предлагает Svelte, и строгая типизация, которая спасает от глупых ошибок.
      </p>
      <p>
        Помимо фронтенда, я изучаю работу с базами данных и серверными технологиями, чтобы понимать процесс разработки продукта целиком.
      </p>
    </div>
  </AnimatedSection>

  <!-- Секция Навыков (Skills) -->
  <AnimatedSection delay={200}>
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Мой стек технологий</h2>
    <div class="flex flex-wrap gap-3">
      {#each [
        'Svelte', 'SvelteKit', 'TypeScript', 'JavaScript', 
        'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 
        'Node.js', 'Vite', 'Figma'
      ] as skill}
        <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 font-medium hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
          {skill}
        </span>
      {/each}
    </div>
  </AnimatedSection>

  <!-- Секция Контактов -->
  <AnimatedSection delay={300}>
    <div class="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
      <h2 class="text-2xl font-bold mb-4 text-gray-900">Давайте общаться!</h2>
      <p class="text-gray-600 mb-6">
        Я всегда открыт для обсуждения новых проектов, интересных идей или возможностей стать частью вашей команды.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4">
        <a 
          href="mailto:your-email@example.com" 
          class="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Написать на почту
        </a>
        
        <a 
          href="https://github.com/your-username" 
          target="_blank"
          class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </AnimatedSection>

</div>