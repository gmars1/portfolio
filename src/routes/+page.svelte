<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import AnimatedSection from '$lib/components/AnimatedSection.svelte';
	import NeuralyzerTrap from '$lib/components/NeuralyzerTrap.svelte';
	import SkillsTicker from '$lib/components/SkillsTicker.svelte';
	import { projects } from '$lib/data/projects';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Marsel — Backend Developer</title>
	<meta
		name="description"
		content="Портфолио Marsel — backend разработчик. Java, Spring, Go, PostgreSQL."
	/>
	<meta property="og:title" content="Marsel — Backend Developer" />
	<meta
		property="og:description"
		content="Портфолио Marsel — backend разработчик. Java, Spring, Go, PostgreSQL."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<NeuralyzerTrap />

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
	<div
		class="animate-pulse-slow absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-purple-900/20 blur-[120px]"
	></div>
	<div
		class="animate-pulse-slow absolute right-[-10%] bottom-[-10%] h-[50vw] w-[50vw] rounded-full bg-blue-900/20 blur-[120px] delay-1000"
	></div>
</div>

<section class="relative z-10 flex min-h-[70vh] flex-col items-center justify-center text-center">
	<AnimatedSection>
		<h1 class="mb-6 text-7xl leading-none font-bold tracking-tighter md:text-9xl">
			Marsel<span class="text-purple-500">.</span>
		</h1>
	</AnimatedSection>
	<AnimatedSection delay={120}>
		<p class="mb-10 max-w-lg text-xl text-gray-300 md:text-2xl">
			Backend Developer.<br />
			Создаю цифровые продукты.
		</p>
	</AnimatedSection>

	<AnimatedSection delay={240}>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href={resolve('/projects/')}
				class="group relative overflow-hidden rounded-full bg-white px-8 py-3 font-bold text-black transition-all hover:scale-105"
			>
				<span class="relative z-10">Мои работы</span>
				<div
					class="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-20"
				></div>
			</a>
			<a
				href={resolve('/about/')}
				class="rounded-full border border-white/20 px-8 py-3 transition-all hover:border-white/40 hover:bg-white/10"
			>
				Обо мне
			</a>
		</div>
	</AnimatedSection>
</section>

<section class="border-t border-white/10 py-24">
	<AnimatedSection>
		<h2 class="mb-12 flex items-center gap-2 text-3xl font-bold">
			<span class="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
			></span>
			Избранные проекты
		</h2>
	</AnimatedSection>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project, i (project.slug)}
			<AnimatedSection delay={i * 100}>
				<ProjectCard {project} />
			</AnimatedSection>
		{/each}
	</div>
</section>

<div class="py-8">
	<SkillsTicker />
</div>

<style>
	.animate-pulse-slow {
		animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.2;
		}
		50% {
			opacity: 0.4;
		}
	}
</style>
