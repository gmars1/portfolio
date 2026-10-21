<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';
	import Arrow from './Arrow.svelte';

	let selected = $state(0);
	let enhanced = $state(false);
	onMount(() => {
		enhanced = true;
	});
	const project = $derived(projects[selected]);
</script>

{#if project}
	<div class="spotlight">
		<div class="spotlight-toolbar">
			<span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>
			<span>PROJECT EXPLORER</span>
			<span class="toolbar-mark" aria-hidden="true">↗</span>
		</div>
		<div class="spotlight-scene">
			<img src={asset(project.image)} alt="" width="1280" height="720" fetchpriority="low" />
			<div class="scene-grid" aria-hidden="true"></div>
			<div class="scene-orbit orbit-one" aria-hidden="true"></div>
			<div class="scene-orbit orbit-two" aria-hidden="true"></div>
			<span class="scene-coordinate" aria-hidden="true"
				>M / {String(selected + 1).padStart(2, '0')}</span
			>
			<div class="scene-content" aria-live="polite" aria-atomic="true">
				<span class="scene-label">Избранный проект</span>
				<span class="scene-title" class:short={project.title.length < 10}>{project.title}</span>
				<p>{project.description}</p>
			</div>
			<div class="scene-footer">
				<span>{project.technologies.slice(0, 2).join(' / ')}</span>
				<a href={resolve(`/projects/${project.slug}/`)} aria-label="Открыть проект {project.title}"
					><Arrow /></a
				>
			</div>
		</div>
		<div class="spotlight-tabs" role="group" aria-label="Выбрать проект для просмотра">
			{#each projects as item, i (item.slug)}
				{#if enhanced}
					<button type="button" aria-pressed={selected === i} onclick={() => (selected = i)}>
						<span class="project-index">{String(i + 1).padStart(2, '0')}</span>{item.title}<span
							class="tab-dot"
							aria-hidden="true"
						></span>
					</button>
				{:else}
					<a href={resolve(`/projects/${item.slug}/`)}
						><span class="project-index">{String(i + 1).padStart(2, '0')}</span>{item.title}<span
							class="tab-dot"
							aria-hidden="true"
						></span></a
					>
				{/if}
			{/each}
		</div>
	</div>
{/if}

<style>
	.spotlight {
		position: relative;
		min-width: 0;
		border: 1px solid #46505a;
		border-radius: 16px;
		background: #171c21;
		box-shadow: 0 32px 80px #0003;
		overflow: hidden;
	}
	.spotlight-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 17px 22px;
		border-bottom: 1px solid var(--border);
		color: var(--fg-muted);
		font:
			10px/1.5 ui-monospace,
			monospace;
		letter-spacing: 0.12em;
	}
	.window-dots {
		display: flex;
		gap: 5px;
	}
	.window-dots i {
		width: 6px;
		height: 6px;
		border: 1px solid #6d7883;
		border-radius: 50%;
	}
	.toolbar-mark {
		color: var(--accent);
		font-size: 18px;
		line-height: 1;
	}
	.spotlight-scene {
		position: relative;
		min-height: 348px;
		isolation: isolate;
		overflow: hidden;
		background: radial-gradient(ellipse at 80% 20%, #234d582e, transparent 65%), #141b20;
	}
	.spotlight-scene > img {
		position: absolute;
		inset: 0;
		z-index: -2;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.3;
	}
	.scene-grid {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image:
			linear-gradient(#c5e6f008 1px, transparent 1px),
			linear-gradient(90deg, #c5e6f008 1px, transparent 1px);
		background-size: 38px 38px;
		mask-image: linear-gradient(#0009, #0002);
	}
	.scene-orbit {
		position: absolute;
		z-index: -1;
		width: 310px;
		height: 310px;
		border: 1px solid #76d6f223;
		border-radius: 50%;
		right: -100px;
		top: 10px;
	}
	.orbit-two {
		width: 220px;
		height: 220px;
		right: -55px;
		top: 55px;
	}
	.scene-coordinate {
		position: absolute;
		top: 24px;
		right: 24px;
		color: #a8bdc6;
		font:
			11px/1.5 ui-monospace,
			monospace;
	}
	.scene-content {
		padding: 48px 30px 80px;
	}
	.scene-label {
		color: var(--accent);
		font:
			11px/1.5 ui-monospace,
			monospace;
	}
	.scene-title {
		display: block;
		max-width: 8ch;
		margin-top: 18px;
		font-size: clamp(44px, 5.4vw, 74px);
		font-weight: 500;
		line-height: 0.98;
		letter-spacing: -0.065em;
	}
	.scene-title.short {
		font-size: clamp(64px, 8vw, 104px);
	}
	.scene-content p {
		max-width: 32ch;
		margin-top: 22px;
		font-size: 14px;
		line-height: 1.65;
		color: #bcc9cf;
	}
	.scene-footer {
		position: absolute;
		bottom: 20px;
		left: 30px;
		right: 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #a8bdc6;
		font:
			11px/1.5 ui-monospace,
			monospace;
	}
	.scene-footer a {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border: 1px solid #5a7783;
		border-radius: 50%;
		color: var(--accent);
		transition:
			color 0.2s,
			background 0.2s;
	}
	.scene-footer a:hover {
		background: var(--accent);
		color: var(--bg);
	}
	.spotlight-tabs {
		display: flex;
		flex-wrap: wrap;
		border-top: 1px solid var(--border);
	}
	.spotlight-tabs :is(button, a) {
		display: flex;
		flex: 1;
		align-items: center;
		gap: 10px;
		min-height: 60px;
		padding: 16px 20px;
		color: var(--fg-muted);
		font-size: 12px;
		text-align: left;
		border-right: 1px solid var(--border);
		transition:
			background 0.2s,
			color 0.2s;
	}
	.spotlight-tabs :is(button, a):last-child {
		border-right: 0;
	}
	.spotlight-tabs button[aria-pressed='true'] {
		background: #76d6f209;
		color: var(--fg);
	}
	.spotlight-tabs :is(button, a):hover {
		background: var(--surface-hover);
	}
	.project-index {
		font:
			10px/1.5 ui-monospace,
			monospace;
		color: var(--fg-muted);
	}
	.tab-dot {
		margin-left: auto;
		width: 5px;
		height: 5px;
		background: var(--fg-muted);
		border-radius: 50%;
	}
	[aria-pressed='true'] .tab-dot {
		background: var(--accent);
		box-shadow: 0 0 9px #76d6f23b;
	}
	@media (max-width: 760px) {
		.spotlight-scene {
			min-height: 290px;
		}
		.scene-content {
			padding: 32px 24px 76px;
		}
		.scene-title {
			font-size: 54px;
		}
		.scene-title.short {
			font-size: 76px;
		}
		.spotlight-tabs :is(button, a) {
			padding: 14px;
			gap: 8px;
		}
		.scene-footer {
			left: 24px;
		}
	}
</style>
