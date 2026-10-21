<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import type { Project } from '$lib/data/projects';

	let {
		project,
		showTechnologies = false,
		heading = 'h3'
	}: {
		project: Project;
		showTechnologies?: boolean;
		heading?: 'h2' | 'h3';
	} = $props();
</script>

<a
	href={resolve(`/projects/${project.slug}/`)}
	class="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-500 hover:border-purple-500/50 focus-visible:border-purple-400"
>
	<img
		src={asset(project.image)}
		alt=""
		loading="lazy"
		decoding="async"
		width="1280"
		height="720"
		class="absolute inset-0 h-full w-full object-cover opacity-70 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
	<div class="absolute bottom-0 left-0 w-full p-6">
		<svelte:element
			this={heading}
			class="mb-1 text-2xl font-bold text-white transition-colors group-hover:text-purple-400"
		>
			{project.title}
		</svelte:element>
		<p class="line-clamp-2 text-sm text-gray-300">{project.description}</p>
		{#if showTechnologies}
			<ul class="mt-4 flex flex-wrap gap-2" aria-label="Технологии проекта">
				{#each project.technologies.slice(0, 3) as tech (tech)}
					<li class="rounded border border-white/10 bg-white/10 px-2 py-1 text-xs text-gray-200">
						{tech}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</a>
