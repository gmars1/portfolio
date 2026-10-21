<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import Arrow from './Arrow.svelte';
	let Scenario = $state<Component>();
	let ready = $state(false);
	let loading = $state(false);
	let failed = $state(false);
	onMount(() => {
		ready = true;
	});
	async function load() {
		loading = true;
		failed = false;
		try {
			Scenario = (await import('./ChangeScenario.svelte')).default;
		} catch {
			failed = true;
		} finally {
			loading = false;
		}
	}
</script>

<section class="scenario-section" aria-labelledby="scenario-title">
	<div class="section-heading">
		<div>
			<span class="eyebrow">Попробуйте сами</span>
			<h2 id="scenario-title">Заметить изменение<span>.</span></h2>
		</div>
		<span class="example-label">Демонстрация идеи</span>
	</div>
	<p class="scenario-description">
		Небольшой пример того, как можно отслеживать изменения контента. Демонстрационные данные
		обрабатываются в браузере.
	</p>
	{#if Scenario}<Scenario />{:else}<div class="scenario-preview">
			<ol>
				<li>
					<span>01 / Исходная версия</span>
					<p>Начало встречи: <strong>18:00</strong></p>
				</li>
				<li>
					<span>02 / Новая версия</span>
					<p>Начало встречи: <strong>19:00</strong></p>
				</li>
				<li>
					<span>03 / Результат</span>
					<p>Изменилось время начала встречи.</p>
				</li>
			</ol>
			<div class="preview-action">
				{#if ready}<button
						class="button button-primary"
						type="button"
						disabled={loading}
						onclick={load}
						>{loading ? 'Открываем пример…' : 'Исследовать пример'}<Arrow
							direction="right"
						/></button
					>{/if}<span>Пример сценария, а не интерфейс работающего сервиса.</span>
			</div>
			{#if failed}<p class="load-error" role="status">
					Не удалось открыть интерактив. Объяснение остаётся доступным; можно попробовать ещё раз.
				</p>{/if}
		</div>{/if}
</section>

<style>
	.scenario-section {
		margin-top: 64px;
		padding-top: 40px;
		border-top: 1px solid var(--border);
	}
	.section-heading h2 {
		margin-top: 16px;
	}
	.section-heading h2 span {
		color: var(--accent);
	}
	.example-label {
		border: 1px solid #5f7680;
		padding: 7px 12px;
		border-radius: 6px;
		color: var(--accent);
		font:
			11px/1.5 ui-monospace,
			monospace;
	}
	.scenario-description {
		max-width: 64ch;
		margin-block: -8px 28px;
		color: var(--fg-muted);
		font-size: 15px;
		line-height: 1.75;
	}
	.scenario-preview {
		padding: 28px;
		border: 1px solid var(--border);
		border-radius: 14px;
		background: var(--surface);
	}
	ol {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
		padding: 0;
		list-style: none;
	}
	li > span {
		color: var(--fg-muted);
		font:
			11px/1.5 ui-monospace,
			monospace;
	}
	li p {
		margin-top: 14px;
		font-size: 15px;
		line-height: 1.7;
	}
	li strong {
		color: var(--accent);
		font-weight: 500;
	}
	.preview-action {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 24px;
		margin-top: 28px;
		padding-top: 24px;
		border-top: 1px solid var(--border);
	}
	.preview-action > span {
		max-width: 40ch;
		color: var(--fg-muted);
		font-size: 11px;
		line-height: 1.6;
	}
	.load-error {
		margin-top: 16px;
		color: var(--fg);
		font-size: 13px;
		line-height: 1.7;
	}
	@media (max-width: 760px) {
		.scenario-section {
			margin-top: 40px;
			padding-top: 32px;
		}
		ol {
			grid-template-columns: minmax(0, 1fr);
			gap: 20px;
		}
		.scenario-preview {
			padding: 22px;
		}
		li + li {
			padding-top: 20px;
			border-top: 1px solid var(--border);
		}
		li p {
			margin-top: 8px;
		}
	}
</style>
