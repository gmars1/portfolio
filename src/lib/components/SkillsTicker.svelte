<script lang="ts">
	const skills = [
		'Svelte',
		'TypeScript',
		'Tailwind',
		'Node.js',
		'Git',
		'Figma',
		'Vite',
		'HTML/CSS'
	];
</script>

<div
	class="w-full overflow-hidden border-y border-white/10 bg-white/[0.02] py-8 select-none"
	role="marquee"
	aria-label="Технологии"
>
	<div class="group relative flex overflow-x-hidden">
		<div
			class="animate-marquee flex gap-12 pr-12 text-2xl font-bold tracking-widest whitespace-nowrap text-gray-500 uppercase"
		>
			{#each skills as item (item)}
				<span class="cursor-default transition-colors hover:text-purple-400">{item}</span>
			{/each}
		</div>

		<div
			class="animate-marquee flex gap-12 pr-12 text-2xl font-bold tracking-widest whitespace-nowrap text-gray-500 uppercase"
			aria-hidden="true"
		>
			{#each skills as item (item)}
				<span class="cursor-default transition-colors hover:text-purple-400">{item}</span>
			{/each}
		</div>

		<div
			class="animate-marquee flex gap-12 pr-12 text-2xl font-bold tracking-widest whitespace-nowrap text-gray-500 uppercase"
			aria-hidden="true"
		>
			{#each skills as item (item)}
				<span class="cursor-default transition-colors hover:text-purple-400">{item}</span>
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
