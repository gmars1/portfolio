<script lang="ts">
	import { asset } from '$app/paths';
	import type { Project } from '$lib/data/projects';
	import Arrow from './Arrow.svelte';

	let { images, title }: { images: Project['screenshots']; title: string } = $props();
	let dialog: HTMLDialogElement | undefined = $state();
	let selected = $state(0);
	let opener: HTMLAnchorElement | undefined;

	function open(event: MouseEvent, index: number) {
		if (!dialog?.showModal) return;
		event.preventDefault();
		opener = event.currentTarget as HTMLAnchorElement;
		selected = index;
		dialog.showModal();
	}
	function move(direction: number) {
		selected = (selected + direction + images.length) % images.length;
	}
	function onKey(event: KeyboardEvent) {
		if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
			event.preventDefault();
			move(event.key === 'ArrowRight' ? 1 : -1);
		}
	}
</script>

{#if images.length}
	<div class="gallery-grid">
		{#each images as image, i (`${image}-${i}`)}<a
				class="gallery-image"
				href={asset(image)}
				onclick={(event) => open(event, i)}
				aria-label="Увеличить визуал {title} {i + 1}"
				><img
					src={asset(image)}
					alt="Визуал проекта {title}, изображение {i + 1}"
					width="1280"
					height="720"
					loading="lazy"
					decoding="async"
				/>
				<div class="gallery-caption">
					<span>Визуал / {String(i + 1).padStart(2, '0')}</span><span class="expand-label"
						>Рассмотреть <Arrow /></span
					>
				</div></a
			>{/each}
	</div>
	<dialog
		bind:this={dialog}
		class="gallery-dialog"
		aria-labelledby="gallery-title"
		onkeydown={onKey}
		onclose={() => opener?.focus()}
	>
		<div class="modal-top">
			<h3 id="gallery-title">{title} / Галерея</h3>
			<button
				class="close-button"
				type="button"
				aria-label="Закрыть галерею"
				onclick={() => dialog?.close()}>✕</button
			>
		</div>
		<img
			class="modal-image"
			src={asset(images[selected])}
			alt="Визуал проекта {title}, изображение {selected + 1}"
			width="1280"
			height="720"
		/>
		<div class="modal-bottom">
			<span aria-live="polite">{selected + 1} / {images.length}</span>
			<div>
				<button
					type="button"
					class="gallery-control"
					aria-label="Предыдущее изображение"
					onclick={() => move(-1)}><Arrow direction="left" /></button
				><button
					type="button"
					class="gallery-control"
					aria-label="Следующее изображение"
					onclick={() => move(1)}><Arrow direction="right" /></button
				>
			</div>
		</div>
	</dialog>
{/if}

<style>
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
	}
	.gallery-image {
		min-width: 0;
		border: 1px solid var(--border);
		border-radius: 12px;
		overflow: hidden;
		background: var(--surface);
		transition: border-color 0.2s;
	}
	.gallery-image:hover {
		border-color: var(--border-strong);
	}
	.gallery-image > img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16/9;
		object-fit: contain;
	}
	.gallery-caption {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding: 16px 20px;
		color: var(--fg-muted);
		font:
			11px/1.5 ui-monospace,
			monospace;
	}
	.expand-label {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--fg);
	}
	.expand-label :global(svg) {
		width: 14px;
		height: 14px;
		color: var(--accent);
	}
	.gallery-dialog {
		margin: auto;
		width: min(1080px, calc(100% - 40px));
		max-height: calc(100dvh - 40px);
		padding: 0;
		border: 1px solid var(--border-strong);
		border-radius: 14px;
		color: var(--fg);
		background: var(--surface);
	}
	.gallery-dialog::backdrop {
		background: #05090de8;
		backdrop-filter: blur(8px);
	}
	.gallery-dialog[open] {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
	}
	.modal-top,
	.modal-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding: 12px 20px;
		font-size: 13px;
	}
	.modal-top {
		border-bottom: 1px solid var(--border);
	}
	.modal-bottom {
		border-top: 1px solid var(--border);
		color: var(--fg-muted);
		font:
			12px/1.5 ui-monospace,
			monospace;
	}
	.modal-bottom > div {
		display: flex;
		gap: 8px;
	}
	.modal-image {
		width: 100%;
		height: 100%;
		min-height: 0;
		max-height: calc(100dvh - 200px);
		object-fit: contain;
		background: #0e1012;
	}
	.close-button,
	.gallery-control {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border: 1px solid var(--border-strong);
		border-radius: 7px;
	}
	.close-button:hover,
	.gallery-control:hover {
		background: var(--surface-hover);
		color: var(--accent);
	}
	:global(body:has(dialog[open])) {
		overflow: hidden;
	}
	@media (max-width: 600px) {
		.gallery-grid {
			grid-template-columns: minmax(0, 1fr);
			gap: 16px;
		}
		.gallery-dialog {
			width: calc(100% - 24px);
		}
		.gallery-caption {
			padding-inline: 16px;
		}
	}
</style>
