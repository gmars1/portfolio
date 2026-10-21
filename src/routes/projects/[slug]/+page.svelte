<script lang="ts">
	import type { PageData } from './$types';
	import { asset, resolve } from '$app/paths';
	import { projects } from '$lib/data/projects';
	import Arrow from '$lib/components/Arrow.svelte';
	import ProjectGallery from '$lib/components/ProjectGallery.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import ScenarioPreview from '$lib/components/ScenarioPreview.svelte';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
	const projectIndex = $derived(projects.findIndex((item) => item.slug === project.slug));
	const nextProject = $derived(projects[(projectIndex + 1) % projects.length]);
	const sections = $derived(
		[
			{ id: 'task', title: 'Задача', body: project.caseStudy?.task },
			{ id: 'role', title: 'Моя роль', body: project.caseStudy?.role },
			{ id: 'approach', title: 'Подход', body: project.caseStudy?.approach },
			{ id: 'decisions', title: 'Ключевые решения', body: project.caseStudy?.decisions },
			{ id: 'result', title: 'Результат', body: project.caseStudy?.result }
		].filter((section) => section.body?.trim())
	);
</script>

<svelte:head
	><title>{project.title} — Marsel</title><meta
		name="description"
		content={project.description}
	/><meta property="og:title" content="{project.title} — Marsel" /><meta
		property="og:description"
		content={project.description}
	/></svelte:head
>

<a class="text-link back-link" href={resolve('/projects/')}><Arrow direction="left" />Все проекты</a
>
<article>
	<header class="case-header">
		<span class="eyebrow">Проект / {String(projectIndex + 1).padStart(2, '0')}</span>
		<div class="case-heading">
			<div>
				<h1>{project.title}<span>.</span></h1>
				<p>{project.description}</p>
			</div>
			<div class="case-actions">
				{#if project.link}<a
						class="button button-primary"
						href={project.link}
						target="_blank"
						rel="noopener noreferrer">Посмотреть демо <Arrow /></a
					>{/if}{#if project.github}<a
						class="button"
						href={project.github}
						target="_blank"
						rel="noopener noreferrer">Исходный код <Arrow /></a
					>{/if}
			</div>
		</div>
		<ul class="case-tech" aria-label="Технологии проекта">
			{#each project.technologies as tech (tech)}<li class="tag">{tech}</li>{/each}
		</ul>
	</header>
	<figure class="case-cover">
		<img
			src={asset(project.image)}
			alt="Декоративный визуал проекта {project.title}"
			width="1280"
			height="720"
		/>
		<div class="cover-grid" aria-hidden="true"></div>
		<span class="cover-title" aria-hidden="true">{project.title}</span>
		<figcaption>
			<span>{project.title} / Визуал проекта</span><span aria-hidden="true">M.</span>
		</figcaption>
	</figure>
	{#if sections.length}<div class="case-content" class:with-toc={sections.length >= 3}>
			{#if sections.length >= 3}<nav class="case-toc" aria-label="Разделы проекта">
					<span>В ЭТОМ ПРОЕКТЕ</span>{#each sections as section (section.id)}<a href="#{section.id}"
							>{section.title}</a
						>{/each}
				</nav>{/if}
			<div class="case-sections">
				{#each sections as section (section.id)}<section id={section.id}>
						<h2>{section.title}</h2>
						<p class="reading">{section.body}</p>
					</section>{/each}
			</div>
		</div>{/if}
	{#if project.slug === 'site-scrapper'}<ScenarioPreview />{/if}
	{#if project.screenshots.length}<section class="case-gallery" aria-labelledby="visual-title">
			<div class="section-heading">
				<div>
					<span class="eyebrow">Детали</span>
					<h2 id="visual-title">Визуальная часть<span>.</span></h2>
				</div>
				<p>Нажмите, чтобы рассмотреть</p>
			</div>
			<ProjectGallery images={project.screenshots} title={project.title} />
		</section>{/if}
</article>
{#if projects.length > 1 && nextProject}<a
		class="next-project"
		href={resolve(`/projects/${nextProject.slug}/`)}
		><div>
			<span class="eyebrow">Следующий проект</span><span class="next-title"
				>{nextProject.title}</span
			>
		</div>
		<span class="next-arrow"><Arrow /></span></a
	>{/if}
<ContactSection />

<style>
	.back-link {
		margin-top: 24px;
		color: var(--fg-muted);
	}
	.back-link :global(svg) {
		width: 16px;
	}
	.case-header {
		padding-block: 36px 32px;
	}
	.case-heading {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: end;
		gap: 24px;
		margin-top: 24px;
	}
	.case-heading > div:first-child {
		flex: 1;
		min-width: min(100%, 320px);
	}
	h1 {
		font-size: clamp(44px, 7vw, 88px);
		font-weight: 500;
		line-height: 1.08;
		letter-spacing: -0.06em;
		overflow-wrap: anywhere;
	}
	h1 span,
	.section-heading h2 span {
		color: var(--accent);
	}
	.case-heading p {
		max-width: 52ch;
		margin-top: 24px;
		color: var(--fg-muted);
		font-size: 18px;
		line-height: 1.7;
	}
	.case-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		padding-bottom: 4px;
	}
	.case-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 28px;
		list-style: none;
	}
	.case-cover {
		width: 100%;
		min-width: 0;
		position: relative;
		isolation: isolate;
		overflow: hidden;
		min-height: 220px;
		aspect-ratio: 3.5;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: #162029;
	}
	.case-cover > img {
		position: absolute;
		inset: 0;
		z-index: -2;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.5;
	}
	.cover-grid {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image:
			linear-gradient(#ffffff06 1px, transparent 1px),
			linear-gradient(90deg, #ffffff06 1px, transparent 1px);
		background-size: 48px 48px;
	}
	.cover-title {
		position: absolute;
		left: 40px;
		bottom: 64px;
		font-size: clamp(40px, 6vw, 80px);
		letter-spacing: -0.06em;
		font-weight: 500;
		line-height: 1;
	}
	.case-cover figcaption {
		position: absolute;
		inset: auto 32px 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #bbccd4;
		font:
			11px/1.5 ui-monospace,
			monospace;
	}
	.case-cover figcaption span:last-child {
		font:
			600 22px/1 'Onest',
			sans-serif;
		color: var(--accent);
	}
	.case-content {
		margin-top: 64px;
	}
	.case-content.with-toc {
		display: grid;
		grid-template-columns: 220px minmax(0, 1fr);
		gap: 48px;
	}
	.case-toc {
		align-self: start;
		position: sticky;
		top: 120px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		border-left: 1px solid var(--border);
		padding-left: 20px;
	}
	.case-toc > span {
		margin-bottom: 12px;
		color: var(--fg-muted);
		font:
			10px/1.5 ui-monospace,
			monospace;
	}
	.case-toc a {
		display: flex;
		align-items: center;
		min-height: 44px;
		color: var(--fg-muted);
		font-size: 13px;
	}
	.case-toc a:hover {
		color: var(--accent);
	}
	.case-sections {
		max-width: 760px;
	}
	.case-sections section + section {
		margin-top: 48px;
	}
	.case-sections h2 {
		margin-bottom: 20px;
		font-size: 30px;
		font-weight: 500;
		letter-spacing: -0.035em;
	}
	.case-sections p {
		color: var(--fg-muted);
		white-space: pre-line;
	}
	.case-gallery {
		margin-top: 64px;
	}
	.section-heading h2 {
		margin-top: 16px;
	}
	.section-heading > p {
		color: var(--fg-muted);
		font-size: 12px;
	}
	.next-project {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		margin-top: 64px;
		padding-block: 32px;
		border-block: 1px solid var(--border);
	}
	.next-title {
		display: block;
		margin-top: 16px;
		font-size: clamp(32px, 4vw, 48px);
		line-height: 1.1;
		letter-spacing: -0.045em;
	}
	.next-arrow {
		display: grid;
		place-items: center;
		width: 64px;
		height: 64px;
		border: 1px solid var(--border-strong);
		border-radius: 50%;
		color: var(--accent);
		transition:
			background 0.2s,
			color 0.2s;
	}
	.next-project:hover .next-arrow {
		color: var(--bg);
		background: var(--accent);
	}
	@media (max-width: 760px) {
		.case-header {
			padding-top: 24px;
		}
		.case-heading p {
			font-size: 16px;
			margin-top: 20px;
		}
		.case-cover {
			aspect-ratio: 1.6;
		}
		.cover-title {
			left: 24px;
			bottom: 64px;
			font-size: clamp(30px, 8vw, 48px);
		}
		.case-cover figcaption {
			inset-inline: 24px;
			font-size: 10px;
		}
		.case-content.with-toc {
			grid-template-columns: minmax(0, 1fr);
			gap: 32px;
		}
		.case-toc {
			position: static;
		}
		.case-gallery,
		.case-content {
			margin-top: 40px;
		}
		.next-arrow {
			width: 48px;
			height: 48px;
		}
	}
</style>
