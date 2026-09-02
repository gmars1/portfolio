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

<div class="max-w-6xl mx-auto">
	<AnimatedSection>
		<h1 class="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">Все проекты</h1>
		<p class="text-lg text-gray-400 mb-16 max-w-2xl">
			Здесь собраны работы, над которыми я трудился. Каждый проект — это новый вызов и изученная
			технология.
		</p>
	</AnimatedSection>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each projects as project, i (project.slug)}
			<AnimatedSection delay={i * 100}>
				<a
					href={resolve(`/projects/${project.slug}/`)}
					class="group relative block aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-500/50 transition-all duration-500"
				>
					<img
						src={project.image}
						alt={project.title}
						loading="lazy"
						decoding="async"
						width="800"
						height="600"
						class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
					></div>
					<div class="absolute bottom-0 left-0 p-6 w-full">
						<h3
							class="text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors text-white"
						>
							{project.title}
						</h3>
						<p class="text-sm text-gray-300 line-clamp-1">{project.description}</p>

						<div class="flex flex-wrap gap-2 mt-4">
							{#each project.technologies.slice(0, 3) as tech}
								<span
									class="bg-white/10 text-gray-200 text-xs px-2 py-1 rounded border border-white/10"
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