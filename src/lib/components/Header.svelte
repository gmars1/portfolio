<script lang="ts">
  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';

  let header: HTMLElement;
  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      // Если проскроллили больше 50px, меняем стиль
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header 
  bind:this={header}
  class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent"
  class:bg-black/80={isScrolled}
  class:backdrop-blur-md={isScrolled}
  class:border-white/10={isScrolled}
  class:py-4={isScrolled}
  class:py-8={!isScrolled}
>
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
    <!-- Логотип -->
    <a href="/" class="font-bold text-2xl tracking-tighter hover:text-purple-400 transition-colors">
      Marsel<span class="text-purple-500">.</span>
    </a>

    <!-- Навигация -->
    <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-400">
      <a href="/" class="hover:text-white transition-colors {$page.url.pathname === '/' ? 'text-white' : ''}">Home</a>
      <a href="/projects" class="hover:text-white transition-colors {$page.url.pathname.startsWith('/projects') ? 'text-white' : ''}">Work</a>
      <a href="/about" class="hover:text-white transition-colors {$page.url.pathname === '/about' ? 'text-white' : ''}">About</a>
    </nav>

    <!-- Кнопка (появляется только при скролле) -->
    <a 
      href="mailto:hello@.dev" 
      class="hidden md:block px-5 py-2 bg-white/10 rounded-full text-sm font-semibold hover:bg-white/20 transition-all"
      class:opacity-0={!isScrolled}
      class:translate-y-[-10px]={!isScrolled}
    >
      Contact
    </a>
  </div>
</header>