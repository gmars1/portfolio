<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let headerRef: HTMLDivElement;
  let heroText: HTMLSpanElement;
  let navLinks: HTMLDivElement;
  let logoSmall: HTMLSpanElement;

  onMount(() => {
    // Создаем таймлайн, привязанный к скроллу всей страницы
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body", // Триггер - все тело страницы
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Плавность (0.5 секунды задержки)
      }
    });

    // Анимация морфинга
    tl
      // 1. Большой текст уезжает вверх, уменьшается и становится прозрачным
      .to(heroText, {
        y: -100,
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      })
      
      // 2. Маленький логотип появляется из "ниоткуда"
      .fromTo(logoSmall, 
        { scale: 0, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8 },
        "-=0.8" // Начинаем чуть раньше окончания предыдущей анимации
      )

      // 3. Навигационные ссылки выплывают справа
      .fromTo(navLinks,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )

      // 4. Сам хедер получает фон и размытие
      .to(headerRef, {
        backgroundColor: "rgba(5, 5, 5, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        duration: 0.5
      }, 0); // Начинаем с самого начала
  });
</script>

<!-- 
  Хедер всегда fixed. 
  Изначально он прозрачный и без границ.
-->
<header 
  bind:this={headerRef}
  class="fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-6 py-4 flex items-center justify-between"
>
  <!-- Левая часть: Логотип -->
  <div class="flex items-center gap-4">
    <!-- Маленький логотип (изначально скрыт) -->
    <span bind:this={logoSmall} class="text-xl font-bold text-white opacity-0 scale-0 block">
      LaGGe<span class="text-purple-500">.</span>
    </span>

    <!-- Большой Hero-текст (изначально виден, но позиционируется как часть хедера для анимации) -->
    <!-- Мы используем абсолютное позиционирование или margin, чтобы он был по центру экрана в начале -->

  </div>

  <!-- Правая часть: Навигация -->
  <div bind:this={navLinks} class="flex gap-8 text-sm font-medium text-gray-400 opacity-0 translate-x-10">
    <a href="/" class="hover:text-white transition-colors">Home</a>
    <a href="/projects" class="hover:text-white transition-colors">Work</a>
    <a href="/about" class="hover:text-white transition-colors">About</a>
    <a href="mailto:hello@lagge.dev" class="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-all">
      Contact
    </a>
  </div>
</header>

<!-- 
  ВАЖНО: Этот пустой блок нужен, чтобы создать "пространство" для скролла, 
  если мы хотим, чтобы морфинг занимал определенную высоту. 
  Но в данном случае мы привязались к body, так что это опционально.
-->
