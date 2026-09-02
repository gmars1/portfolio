<script lang="ts">
	import { resolve } from '$app/paths';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-white/10 mt-24 py-8">
	<div class="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
		<p>&copy; {year} Marsel. Все права защищены.</p>
		<div class="flex items-center gap-6">
			<a
				href="https://github.com/marsel"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-white transition-colors"
				aria-label="GitHub профиль"
			>
				GitHub
			</a>
			<a
				href="https://t.me/marsel"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-white transition-colors"
				aria-label="Telegram"
			>
				Telegram
			</a>
			<a href={resolve('/privacy/')} class="hover:text-white transition-colors">
				Конфиденциальность
			</a>
		</div>
	</div>
</footer>