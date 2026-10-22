<script lang="ts">
	import { onMount } from 'svelte';
	import Arrow from './Arrow.svelte';

	const steps = ['Исходный текст', 'Новая версия', 'Найденное изменение'];
	const descriptions = [
		'Сохраняем исходную версию страницы для сравнения.',
		'На странице обновилось время начала встречи.',
		'Сравниваем версии: время изменилось с 18:00 на 19:00.'
	];
	let active = $state(0);
	let playing = $state(false);
	let reducedMotion = $state(true);

	onMount(() => {
		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => {
			reducedMotion = media.matches;
			if (reducedMotion) playing = false;
		};
		update();
		media.addEventListener('change', update);
		return () => media.removeEventListener('change', update);
	});

	$effect(() => {
		if (!playing || reducedMotion) return;
		if (active >= 2) {
			playing = false;
			return;
		}
		const timer = window.setTimeout(() => {
			active += 1;
		}, 1600);
		return () => window.clearTimeout(timer);
	});

	function select(index: number) {
		playing = false;
		active = index;
	}
	function togglePlayback() {
		if (playing) {
			playing = false;
			return;
		}
		if (reducedMotion) {
			active = 2;
			return;
		}
		if (active === 2) active = 0;
		playing = true;
	}
</script>

<div class="scenario-player">
	<div class="scenario-steps" role="group" aria-label="Шаги демонстрации">
		{#each steps as step, i (step)}<button
				class:current={active === i}
				type="button"
				aria-pressed={active === i}
				onclick={() => select(i)}
				><span class="step-number">{String(i + 1).padStart(2, '0')}</span><span>{step}</span><span
					class="step-indicator"
					aria-hidden="true">{active > i ? '✓' : active === i ? '↗' : '·'}</span
				></button
			>{/each}
	</div>
	<div class="scenario-output">
		<div class="output-top">
			<span>CONTENT DIFF / EXAMPLE</span><span class="output-counter">0{active + 1} / 03</span>
		</div>
		<div class="output-body" aria-live="polite" aria-atomic="true">
			<h3>{steps[active]}</h3>
			<p class="step-description">{descriptions[active]}</p>
			<div class="content-example">
				<div class="example-heading">
					<span>Пример страницы</span><span aria-hidden="true">↗</span>
				</div>
				<div class="example-title">Встреча разработчиков</div>
				{#if active < 2}<p class="event-time">
						Начало встречи <strong>{active === 0 ? '18:00' : '19:00'}</strong>
					</p>{:else}<div class="diff-line removed">
						<span>− Удалено</span><s>Начало встречи: 18:00</s>
					</div>
					<div class="diff-line added">
						<span>+ Добавлено</span><span>Начало встречи: 19:00</span>
					</div>{/if}
			</div>
		</div>
		<div class="player-controls">
			<button type="button" class="button button-primary" onclick={togglePlayback}
				>{playing ? 'Пауза' : active === 2 ? 'Повторить сценарий' : 'Пройти сценарий'}<span
					aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span
				></button
			>
			<div class="step-navigation">
				<button
					type="button"
					aria-label="Предыдущий шаг"
					disabled={active === 0}
					onclick={() => select(active - 1)}><Arrow direction="left" /></button
				><button
					type="button"
					aria-label="Следующий шаг"
					disabled={active === 2}
					onclick={() => select(active + 1)}><Arrow direction="right" /></button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.scenario-player {
		display: grid;
		grid-template-columns: 0.7fr 1.3fr;
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: 14px;
		background: var(--surface);
	}
	.scenario-steps {
		padding: 24px;
		border-right: 1px solid var(--border);
	}
	.scenario-steps > button {
		display: flex;
		align-items: center;
		gap: 14px;
		width: 100%;
		min-height: 72px;
		padding: 16px;
		border: 1px solid transparent;
		border-radius: 9px;
		color: var(--fg-muted);
		text-align: left;
		font-size: 14px;
		transition:
			border-color 0.18s,
			background 0.18s,
			color 0.18s;
	}
	.scenario-steps > button + button {
		margin-top: 8px;
	}
	.scenario-steps > button:hover {
		background: var(--surface-hover);
	}
	.scenario-steps > button.current {
		background: #76d6f20a;
		border-color: #5e7f8d;
		color: var(--fg);
	}
	.step-number {
		color: var(--accent);
		font:
			11px/1.5 ui-monospace,
			monospace;
	}
	.step-indicator {
		margin-left: auto;
		color: var(--accent);
	}
	.scenario-output {
		min-width: 0;
	}
	.output-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		padding: 18px 28px;
		border-bottom: 1px solid var(--border);
		color: var(--fg-muted);
		font:
			10px/1.5 ui-monospace,
			monospace;
		letter-spacing: 0.04em;
	}
	.output-counter {
		color: var(--accent);
	}
	.output-body {
		min-height: 320px;
		padding: 28px;
	}
	h3 {
		font-size: 24px;
		font-weight: 500;
		letter-spacing: -0.035em;
	}
	.step-description {
		max-width: 46ch;
		margin-top: 12px;
		min-height: 48px;
		color: var(--fg-muted);
		font-size: 13px;
		line-height: 1.75;
	}
	.content-example {
		margin-top: 24px;
		padding: 20px;
		border: 1px solid var(--border);
		border-radius: 9px;
		background: #13171b;
	}
	.example-heading {
		display: flex;
		justify-content: space-between;
		color: var(--fg-muted);
		font:
			10px/1.5 ui-monospace,
			monospace;
	}
	.example-title {
		margin-top: 16px;
		font-size: 17px;
		letter-spacing: -0.025em;
	}
	.event-time {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 12px;
		margin-top: 20px;
		color: var(--fg-muted);
		font-size: 13px;
	}
	.event-time strong {
		font-weight: 500;
		color: var(--accent);
	}
	.diff-line {
		display: flex;
		flex-wrap: wrap;
		gap: 6px 20px;
		margin-top: 10px;
		padding: 10px;
		border-radius: 5px;
		font-size: 12px;
		line-height: 1.6;
	}
	.diff-line > span:first-child {
		flex: 0 0 88px;
		font:
			10px/1.8 ui-monospace,
			monospace;
	}
	.removed {
		background: #edb6a70c;
		color: #e5b9ac;
	}
	.added {
		background: #76d6f20c;
		color: #a0dce8;
	}
	.player-controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding: 20px 28px;
		border-top: 1px solid var(--border);
	}
	.player-controls > .button {
		font-size: 12px;
		padding-inline: 16px;
	}
	.step-navigation {
		display: flex;
		gap: 6px;
	}
	.step-navigation > button {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border: 1px solid var(--border-strong);
		border-radius: 7px;
		color: var(--fg);
	}
	.step-navigation > button:hover:not(:disabled) {
		color: var(--accent);
		background: var(--surface-hover);
	}
	@media (max-width: 760px) {
		.scenario-player {
			grid-template-columns: minmax(0, 1fr);
		}
		.scenario-steps {
			padding: 12px;
			border-right: 0;
			border-bottom: 1px solid var(--border);
		}
		.scenario-steps > button {
			min-height: 52px;
			padding: 10px 12px;
		}
		.scenario-steps > button + button {
			margin-top: 4px;
		}
		.output-top {
			padding: 16px 20px;
		}
		.output-body {
			padding: 22px 20px;
			min-height: 320px;
		}
		.player-controls {
			padding: 16px;
			gap: 8px;
			flex-wrap: wrap;
		}
		.player-controls > .button {
			padding-inline: 12px;
		}
	}
</style>
