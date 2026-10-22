<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import type { Project } from '$lib/data/projects';
	import Arrow from './Arrow.svelte';

	let {
		project,
		showTechnologies = true,
		heading = 'h3',
		index = 0
	}: {
		project: Project;
		showTechnologies?: boolean;
		heading?: 'h2' | 'h3';
		index?: number;
	} = $props();
	let imageFailed = $state(false);
</script>

<a class="project-card" href={resolve(`/projects/${project.slug}/`)}>
	<div class="project-art" class:art-blue={index % 2 === 0}>
		{#if !imageFailed}
			<img
				src={asset(project.image)}
				alt=""
				width="1280"
				height="720"
				loading="lazy"
				decoding="async"
				onerror={() => (imageFailed = true)}
			/>
		{/if}
		<div class="art-grid" aria-hidden="true"></div>
		<div class="art-top" aria-hidden="true">
			<span>PROJECT / {String(index + 1).padStart(2, '0')}</span>
			<span class="art-mark">M.</span>
		</div>
		<div class="art-name" aria-hidden="true">{project.title}<span>↗</span></div>
		<div class="art-bottom" aria-hidden="true">
			<span>{project.technologies[0] ?? 'Project'}</span><span>{project.technologies[1] ?? ''}</span
			>
		</div>
	</div>
	<div class="card-body">
		<div class="card-title">
			<svelte:element this={heading}>{project.title}</svelte:element>
			<span class="card-arrow"><Arrow /></span>
		</div>
		<p>{project.description}</p>
		{#if showTechnologies && project.technologies.length}
			<ul class="card-tags" aria-label="Технологии проекта">
				{#each project.technologies as tech (tech)}<li class="tag">{tech}</li>{/each}
			</ul>
		{/if}
		<span class="card-action">Открыть проект <Arrow direction="right" /></span>
	</div>
</a>

<style>
	.project-card {
		display: block;
		min-width: 0;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--surface);
		text-decoration: none;
		transition:
			border-color 0.2s,
			background 0.2s;
	}
	.project-card:hover,
	.project-card:focus-visible {
		border-color: var(--border-strong);
	}
	.project-art {
		position: relative;
		isolation: isolate;
		aspect-ratio: 1.8;
		overflow: hidden;
		background: #112221;
	}
	.project-art.art-blue {
		background: #16222d;
	}
	.project-art img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.55;
		transition:
			transform 0.6s var(--ease),
			opacity 0.6s;
	}
	.art-grid {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image:
			linear-gradient(#ffffff08 1px, transparent 1px),
			linear-gradient(90deg, #ffffff08 1px, transparent 1px);
		background-size: 42px 42px;
	}
	.art-top,
	.art-bottom {
		position: absolute;
		left: 28px;
		right: 28px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #b8c9cd;
		font:
			11px/1.4 ui-monospace,
			monospace;
		letter-spacing: 0.08em;
	}
	.art-top {
		top: 24px;
	}
	.art-mark {
		font:
			600 24px/1 'Onest',
			sans-serif;
		letter-spacing: -0.06em;
		color: #d3e8ea;
	}
	.art-name {
		position: absolute;
		bottom: 56px;
		left: 28px;
		right: 28px;
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 12px;
		color: #ecf4f2;
		font-size: clamp(28px, 3.6vw, 52px);
		font-weight: 500;
		line-height: 1;
		letter-spacing: -0.05em;
	}
	.art-name span {
		color: var(--accent);
		font-size: 0.8em;
	}
	.art-bottom {
		bottom: 22px;
	}
	.card-body {
		padding: 28px;
	}
	.card-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}
	.card-title :is(h2, h3) {
		font-size: 25px;
		font-weight: 500;
		line-height: 1.25;
		letter-spacing: -0.035em;
	}
	.card-arrow {
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		border: 1px solid var(--border);
		border-radius: 50%;
		color: var(--fg-muted);
		transition:
			color 0.2s,
			background 0.2s,
			transform 0.2s;
	}
	.card-body p {
		max-width: 44ch;
		margin-top: 12px;
		color: var(--fg-muted);
		font-size: 15px;
		line-height: 1.65;
	}
	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 24px;
		padding: 0;
		list-style: none;
	}
	.card-action {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 28px;
		padding-top: 18px;
		border-top: 1px solid var(--border);
		color: var(--fg);
		font-size: 13px;
	}
	.project-card:is(:hover, :focus-visible) .card-arrow {
		background: var(--accent);
		color: var(--bg);
		border-color: var(--accent);
		transform: rotate(8deg);
	}
	@media (hover: hover) and (pointer: fine) {
		.project-card:hover img {
			transform: scale(1.04);
			opacity: 0.7;
		}
	}
	@media (max-width: 760px) {
		.card-body {
			padding: 22px;
		}
		.art-top,
		.art-bottom {
			left: 22px;
			right: 22px;
		}
		.art-name {
			left: 22px;
			right: 22px;
			font-size: clamp(28px, 7vw, 44px);
		}
	}
</style>
