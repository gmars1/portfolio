<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import AnimatedSection from '$lib/components/AnimatedSection.svelte';
	import { projects } from '$lib/data/projects';
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
				<ProjectCard {project} showTechnologies heading="h2" />
			</AnimatedSection>
		{/each}
	</div>
</div>
