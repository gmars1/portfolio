<script lang="ts">
  import { page } from '$app/stores';
</script>

<header class="bg-white shadow-sm">
  <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
    <a href="/" class="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
      My Portfolio
    </a>
    <ul class="flex gap-6 text-gray-600 font-medium">
      <li>
        <a href="/" class:underline={$page.url.pathname === '/'} class="hover:text-blue-600 transition">
          Главная
        </a>
      </li>
      <li>
        <a href="/projects" class:underline={$page.url.pathname.startsWith('/projects')} class="hover:text-blue-600 transition">
          Проекты
        </a>
      </li>
      <li>
        <a href="/about" class:underline={$page.url.pathname === '/about'} class="hover:text-blue-600 transition">
          Обо мне
        </a>
      </li>
    </ul>
  </nav>
</header>