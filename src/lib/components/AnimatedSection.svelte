<script lang="ts">
  import { inview } from 'svelte-inview'; // Важно: inview с маленькой буквы

  let ref: HTMLDivElement;
  let { delay = 0, duration = 800 } = $props();

  function handleEnter(event: CustomEvent) {
    // Проверяем, действительно ли элемент появился на экране
    if (event.detail.isIntersecting) {
      const target = event.target as HTMLElement;
      // Добавляем классы видимости
      target.classList.add('opacity-100', 'translate-y-0');
      // Убираем классы скрытности
      target.classList.remove('opacity-0', 'translate-y-10');
    }
  }
</script>

<div 
  bind:this={ref} 
  use:inview={{ once: true }} // once: true значит анимация проиграется только один раз
  on:inview={handleEnter}     // Слушаем событие inview
  class="opacity-100 translate-y-10 transition-all ease-out"
  style="transition-duration: {duration}ms; transition-delay: {delay}ms;"
>
  <slot />
</div>