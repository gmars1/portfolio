<script lang="ts">
  const skills = ['Svelte', 'TypeScript', 'Tailwind', 'Node.js', 'Git', 'Figma', 'Vite', 'HTML/CSS'];
</script>

<div class="w-full bg-gray-50 py-8 overflow-hidden border-y border-gray-200 select-none">
  <!-- Внешний контейнер скрывает всё, что вылезает за края -->
  <div class="relative flex overflow-x-hidden group">
    
    <!-- Первый набор навыков -->
    <div class="animate-marquee whitespace-nowrap flex gap-12 text-2xl font-bold text-gray-400 uppercase tracking-widest pr-12">
      {#each skills as item}
        <span class="hover:text-blue-600 transition-colors cursor-default">{item}</span>
      {/each}
    </div>

    <!-- Второй набор (точная копия) для бесшовного цикла -->
    <div class="animate-marquee whitespace-nowrap flex gap-12 text-2xl font-bold text-gray-400 uppercase tracking-widest pr-12" aria-hidden="true">
      {#each skills as item}
        <span class="hover:text-blue-600 transition-colors cursor-default">{item}</span>
      {/each}
    </div>

  </div>
</div>

<style>
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }
  
  /* Останавливаем анимацию при наведении на всю полосу */
  .group:hover .animate-marquee {
    animation-play-state: paused;
  }
</style>