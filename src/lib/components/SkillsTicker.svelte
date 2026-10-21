<script lang="ts">
	let paused = $state(false);
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

<section
	class="ticker w-full overflow-hidden border-y border-white/10 bg-white/[0.02] py-8"
	class:paused
	aria-label="Технологии"
>
	<ul class="sr-only">
		{#each skills as skill (skill)}
			<li>{skill}</li>
		{/each}
	</ul>
	<div class="ticker-track flex overflow-hidden select-none" aria-hidden="true">
		{#each [0, 1, 2] as copy (copy)}
			<div
				class="ticker-copy flex shrink-0 gap-12 pr-12 text-2xl font-bold tracking-widest whitespace-nowrap text-gray-500 uppercase"
			>
				{#each skills as item (item)}
					<span>{item}</span>
				{/each}
			</div>
		{/each}
	</div>
	<div class="ticker-controls mt-4 flex justify-end px-4">
		<button
			type="button"
			class="rounded px-3 py-2 text-sm text-gray-400 transition-colors hover:text-white"
			aria-pressed={paused}
			onclick={() => (paused = !paused)}
		>
			{paused ? 'Продолжить движение' : 'Остановить движение'}
		</button>
	</div>
</section>

<style>
	@keyframes marquee {
		to {
			transform: translateX(-100%);
		}
	}

	.ticker-copy {
		animation: marquee 25s linear infinite;
	}

	.ticker:hover .ticker-copy,
	.ticker:focus-within .ticker-copy,
	.paused .ticker-copy {
		animation-play-state: paused;
	}

	@media (prefers-reduced-motion: reduce) {
		.ticker-track {
			overflow: visible;
		}
		.ticker-copy {
			animation: none;
			flex-wrap: wrap;
			flex-shrink: 1;
			gap: 1rem;
			padding-inline: 1rem;
			white-space: normal;
		}
		.ticker-copy ~ .ticker-copy,
		.ticker-controls {
			display: none;
		}
	}
</style>
