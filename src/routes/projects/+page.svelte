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

<div class="page-intro">
	<span class="eyebrow">Портфолио / {String(projects.length).padStart(2, '0')} проекта</span>
	<h1>Все проекты<span class="accent">.</span></h1>
	<p>
		Здесь собраны работы, над которыми я трудился. Каждый проект — это новый вызов и изученная
		технология.
	</p>
</div>
<div class="project-grid">
	{#each projects as project, i (project.slug)}
		<AnimatedSection delay={i * 80}
			><ProjectCard {project} index={i} heading="h2" /></AnimatedSection
		>
	{/each}
</div>

<style>
	.accent {
		color: var(--accent);
	}
</style>
