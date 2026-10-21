<script lang="ts">
	import { resolve } from '$app/paths';
	import Arrow from '$lib/components/Arrow.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectSpotlight from '$lib/components/ProjectSpotlight.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import AnimatedSection from '$lib/components/AnimatedSection.svelte';
	import { projects } from '$lib/data/projects';
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

<section class="hero" aria-labelledby="hero-title">
	<div class="hero-copy">
		<span class="eyebrow">Портфолио разработчика</span>
		<h1 id="hero-title">Marsel<span>.</span></h1>
		<p class="hero-role">Backend Developer<span aria-hidden="true"> / </span></p>
		<p class="hero-description">Создаю цифровые<br class="desktop-break" /> продукты.</p>
		<div class="hero-actions">
			<a class="button button-primary" href="#projects">Мои работы <Arrow direction="down" /></a><a
				class="button"
				href="#contact">Связаться <Arrow /></a
			>
		</div>
		<div class="hero-caption">
			<span class="caption-line" aria-hidden="true"></span><span
				>Java / Spring / Go / PostgreSQL</span
			>
		</div>
	</div>
	<ProjectSpotlight />
</section>

<section id="projects" class="work-section" aria-labelledby="work-title">
	<div class="section-heading">
		<div>
			<span class="eyebrow">01 / Мои работы</span>
			<h2 id="work-title">Избранные проекты<span class="accent">.</span></h2>
		</div>
		<a class="text-link" href={resolve('/projects/')}>Все проекты <Arrow direction="right" /></a>
	</div>
	<div class="project-grid">
		{#each projects as project, i (project.slug)}<AnimatedSection delay={i * 80} duration={450}
				><ProjectCard {project} index={i} /></AnimatedSection
			>{/each}
	</div>
</section>

<section class="about-teaser" aria-labelledby="about-title">
	<div>
		<span class="eyebrow">02 / Знакомство</span>
		<h2 id="about-title">Код. Архитектура.<br /><span>Внимание к деталям.</span></h2>
	</div>
	<div class="about-summary">
		<p>Привет! Меня зовут Marsel. Я backend-разработчик.</p>
		<p>Люблю чистый код, понятную архитектуру и быстрые итерации.</p>
		<a class="text-link" href={resolve('/about/')}>Обо мне <Arrow direction="right" /></a>
	</div>
</section>
<ContactSection />

<style>
	.hero {
		display: grid;
		grid-template-columns: 1.08fr 1fr;
		align-items: center;
		gap: clamp(32px, 5vw, 76px);
		padding-block: 48px 64px;
	}
	.hero-copy {
		min-width: 0;
	}
	h1 {
		margin-top: 28px;
		font-size: clamp(76px, 9.2vw, 132px);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.075em;
	}
	h1 > span,
	.accent {
		color: var(--accent);
	}
	.hero-role {
		display: flex;
		gap: 16px;
		align-items: center;
		margin-top: 22px;
		font-size: 20px;
		letter-spacing: -0.025em;
	}
	.hero-role span {
		color: var(--accent);
		font-family: ui-monospace, monospace;
	}
	.hero-description {
		margin-top: 18px;
		color: var(--fg-muted);
		font-size: clamp(22px, 2.6vw, 34px);
		line-height: 1.35;
		letter-spacing: -0.04em;
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 32px;
	}
	.hero-caption {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-top: 32px;
		color: var(--fg-muted);
		font:
			11px/1.6 ui-monospace,
			monospace;
	}
	.caption-line {
		width: 24px;
		height: 1px;
		background: var(--border-strong);
	}
	.work-section {
		padding-top: 44px;
		border-top: 1px solid var(--border);
	}
	.section-heading h2 {
		margin-top: 16px;
	}
	.about-teaser {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 48px;
		margin-top: 80px;
		padding-block: 48px;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}
	.about-teaser h2 {
		margin-top: 24px;
		font-size: clamp(28px, 3vw, 40px);
		font-weight: 500;
		line-height: 1.25;
		letter-spacing: -0.04em;
	}
	.about-teaser h2 span {
		color: var(--fg-muted);
	}
	.about-summary {
		align-self: end;
		padding-top: 20px;
	}
	.about-summary p {
		color: var(--fg-muted);
		font-size: 16px;
		line-height: 1.75;
	}
	.about-summary p + p {
		margin-top: 12px;
	}
	.about-summary a {
		margin-top: 20px;
	}
	@media (max-width: 980px) and (min-width: 761px) {
		.hero {
			gap: 28px;
		}
		.hero-role {
			font-size: 17px;
		}
		.hero-actions {
			gap: 8px;
		}
		.hero-actions :global(.button) {
			padding-inline: 14px;
			font-size: 13px;
		}
	}
	@media (max-width: 760px) {
		.hero {
			grid-template-columns: minmax(0, 1fr);
			gap: 36px;
			padding-block: 24px 40px;
		}
		h1 {
			margin-top: 24px;
			font-size: clamp(76px, 20vw, 116px);
		}
		.hero-role {
			margin-top: 20px;
			font-size: 19px;
		}
		.hero-description {
			font-size: 26px;
			margin-top: 12px;
		}
		.desktop-break {
			display: none;
		}
		.hero-actions {
			margin-top: 26px;
			gap: 10px;
		}
		.hero-actions :global(.button) {
			padding-inline: 16px;
		}
		.hero-caption {
			margin-top: 24px;
			font-size: 10px;
		}
		.work-section {
			padding-top: 32px;
		}
		.about-teaser {
			grid-template-columns: minmax(0, 1fr);
			gap: 24px;
			padding-block: 32px;
			margin-top: 48px;
		}
		.about-summary {
			padding-top: 0;
		}
	}
</style>
