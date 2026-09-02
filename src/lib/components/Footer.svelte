<script lang="ts">
	import { resolve } from '$app/paths';

	const year = new Date().getFullYear();
</script>

<footer class="mt-24 border-t border-white/10 py-8">
	<div
		class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-gray-500 sm:flex-row"
	>
		<p>&copy; {year} Marsel. Все права защищены.</p>
		<div class="flex items-center gap-6">
			<a
				href="https://github.com/marsel"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors hover:text-white"
				aria-label="GitHub профиль"
			>
				GitHub
			</a>
			<a
				href="https://t.me/marsel"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors hover:text-white"
				aria-label="Telegram"
			>
				Telegram
			</a>
			<a href={resolve('/privacy/')} class="transition-colors hover:text-white">
				Конфиденциальность
			</a>
		</div>
	</div>
</footer>
