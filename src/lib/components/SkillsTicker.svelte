<script lang="ts">
	const skills = ['Svelte', 'TypeScript', 'Tailwind', 'Node.js', 'Git', 'Figma', 'Vite', 'HTML/CSS'];
</script>

<div
	class="w-full bg-white/[0.02] py-8 overflow-hidden border-y border-white/10 select-none"
	role="marquee"
	aria-label="Технологии"
>
	<div class="relative flex overflow-x-hidden group">
		<div
			class="animate-marquee whitespace-nowrap flex gap-12 text-2xl font-bold text-gray-500 uppercase tracking-widest pr-12"
		>
			{#each skills as item}
				<span class="hover:text-purple-400 transition-colors cursor-default">{item}</span>
			{/each}
		</div>

		<div
			class="animate-marquee whitespace-nowrap flex gap-12 text-2xl font-bold text-gray-500 uppercase tracking-widest pr-12"
			aria-hidden="true"
		>
			{#each skills as item}
				<span class="hover:text-purple-400 transition-colors cursor-default">{item}</span>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.animate-marquee {
		animation: marquee 25s linear infinite;
	}

	.group:hover .animate-marquee {
		animation-play-state: paused;
	}

	@media (prefers-reduced-motion: reduce) {
		.animate-marquee {
			animation: none;
		}
	}
</style>