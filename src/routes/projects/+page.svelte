<script lang="ts">
	import AnimatedSection from '$lib/components/AnimatedSection.svelte';
	import { projects } from '$lib/data/projects';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Проекты — Marsel</title>
	<meta
		name="description"
		content="Список разработок Marsel: backend-сервисы на Java, Spring, Go."
	/>
	<meta property="og:title" content="Проекты — Marsel" />
</svelte:head>

<div class="mx-auto max-w-6xl">
	<AnimatedSection>
		<h1 class="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl">Все проекты</h1>
		<p class="mb-16 max-w-2xl text-lg text-gray-400">
			Здесь собраны работы, над которыми я трудился. Каждый проект — это новый вызов и изученная
			технология.
		</p>
	</AnimatedSection>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project, i (project.slug)}
			<AnimatedSection delay={i * 100}>
				<a
					href={resolve(`/projects/${project.slug}/`)}
					class="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-purple-500/50"
				>
					<img
						src={project.image}
						alt={project.title}
						loading="lazy"
						decoding="async"
						width="800"
						height="600"
						class="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
					></div>
					<div class="absolute bottom-0 left-0 w-full p-6">
						<h3
							class="mb-1 text-2xl font-bold text-white transition-colors group-hover:text-purple-400"
						>
							{project.title}
						</h3>
						<p class="line-clamp-1 text-sm text-gray-300">{project.description}</p>

						<div class="mt-4 flex flex-wrap gap-2">
							{#each project.technologies.slice(0, 3) as tech}
								<span
									class="rounded border border-white/10 bg-white/10 px-2 py-1 text-xs text-gray-200"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</a>
			</AnimatedSection>
		{/each}
	</div>
</div>
