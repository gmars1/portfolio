<script lang="ts">
  import { base } from '$app/paths';
</script>

<footer class="border-t border-gray-200 py-6 mt-12">
  <div class="container mx-auto px-4 text-center text-gray-500 text-sm">
    <p>&copy; {new Date().getFullYear()} Моё портфолио. Все права защищены.</p>
  </div>
  <div class="mt-2">
      <a href="{base}/privacy" class="hover:text-blue-600 transition-colors underline">
          Политика конфиденциальности
      </a>
  </div>
</footer>