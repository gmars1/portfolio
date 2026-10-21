<script lang="ts">
	import type { PageData } from './$types';
	import AnimatedSection from '$lib/components/AnimatedSection.svelte';
	import { asset, resolve } from '$app/paths';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} — Marsel</title>
	<meta name="description" content={project.description} />
	<meta property="og:title" content="{project.title} — Marsel" />
	<meta property="og:description" content={project.description} />
</svelte:head>

<div class="mx-auto max-w-5xl">
	<div class="mb-6">
		<a
			href={resolve('/projects/')}
			class="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
					clip-rule="evenodd"
				/>
			</svg>
			Все проекты
		</a>
	</div>

	<AnimatedSection>
		<h1 class="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
			{project.title}
		</h1>
		<ul class="mb-12 flex list-none flex-wrap gap-3 p-0">
			{#each project.technologies as tech (tech)}
				<li
					class="rounded-full border border-purple-500/30 bg-white/5 px-3 py-1 text-sm font-medium text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
				>
					{tech}
				</li>
			{/each}
		</ul>
	</AnimatedSection>

	<AnimatedSection delay={100}>
		<div class="group mb-16 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
			<img
				src={asset(project.image)}
				alt={project.title}
				width="1280"
				height="720"
				class="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
			/>
		</div>
	</AnimatedSection>

	<AnimatedSection delay={200}>
		<div class="prose prose-invert prose-lg mb-16 max-w-none text-gray-300">
			<p class="text-xl leading-relaxed text-white/90">{project.description}</p>
		</div>
	</AnimatedSection>

	{#if project.screenshots && project.screenshots.length > 0}
		<AnimatedSection delay={300}>
			<h2 class="mb-8 text-2xl font-bold text-white">Галерея</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each project.screenshots as screenshot, i (screenshot)}
					<img
						src={asset(screenshot)}
						alt="Скриншот {project.title} {i + 1}"
						loading="lazy"
						decoding="async"
						width="800"
						height="600"
						class="rounded-xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
					/>
				{/each}
			</div>
		</AnimatedSection>
	{/if}

	<AnimatedSection delay={400}>
		<div class="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row">
			{#if project.link}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:scale-105 hover:bg-purple-500"
				>
					<span>Посмотреть демо</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			{/if}

			{#if project.github}
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
				>
					<span>Исходный код</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
				</a>
			{/if}
		</div>
	</AnimatedSection>
</div>
