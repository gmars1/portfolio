<script lang="ts">
	import { onMount } from 'svelte';
	import Arrow from './Arrow.svelte';

	let ready = $state(false);
	let feedback = $state('');
	let copying = $state(false);
	onMount(() => {
		ready = true;
	});

	async function copyEmail() {
		copying = true;
		try {
			await navigator.clipboard.writeText('hello@marsel.dev');
			feedback = 'Email скопирован';
		} catch {
			feedback = 'Не удалось скопировать. Выделите адрес или нажмите «Написать письмо».';
		} finally {
			copying = false;
		}
	}
</script>

<section id="contact" class="contact-section" aria-labelledby="contact-title">
	<div class="contact-top">
		<span class="eyebrow">Контакты</span><span class="contact-mark" aria-hidden="true">↗</span>
	</div>
	<div class="contact-body">
		<div class="contact-copy">
			<h2 id="contact-title">Есть идея?<br /><span>Давайте обсудим.</span></h2>
			<p>
				Я всегда открыт для обсуждения новых идей, фриланс-проектов или просто интересного общения в
				IT-сфере.
			</p>
		</div>
		<div class="contact-actions">
			<a class="email-address" href="mailto:hello@marsel.dev">hello@marsel.dev</a>
			<div class="action-row">
				<a class="button button-primary" href="mailto:hello@marsel.dev">Написать письмо <Arrow /></a
				>{#if ready}<button
						type="button"
						class="copy-button"
						disabled={copying}
						aria-label="Скопировать email"
						onclick={copyEmail}
						><svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"
							><rect
								x="8"
								y="8"
								width="12"
								height="12"
								rx="2"
								stroke="currentColor"
								stroke-width="1.5"
							/><path
								d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"
								stroke="currentColor"
								stroke-width="1.5"
							/></svg
						></button
					>{/if}
			</div>
			<p class="copy-feedback" role="status" aria-live="polite">{feedback}</p>
			<div class="social-links">
				<a
					class="text-link"
					href="https://github.com/marsel"
					target="_blank"
					rel="noopener noreferrer">GitHub <Arrow /></a
				><a class="text-link" href="https://t.me/marsel" target="_blank" rel="noopener noreferrer"
					>Telegram <Arrow /></a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		margin-block: 96px 24px;
		border: 1px solid #42545f;
		border-radius: var(--radius);
		padding: 36px 40px 40px;
		background: radial-gradient(ellipse at 100% 0%, #76d6f20c, transparent 65%), #191e22;
	}
	.contact-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.contact-mark {
		color: var(--accent);
		font-size: 32px;
		line-height: 1;
	}
	.contact-body {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		align-items: end;
		gap: 40px;
		margin-top: 32px;
	}
	h2 {
		font-size: clamp(32px, 4vw, 52px);
		font-weight: 500;
		line-height: 1.12;
		letter-spacing: -0.04em;
	}
	h2 span {
		color: var(--fg-muted);
	}
	.contact-copy p {
		max-width: 47ch;
		margin-top: 24px;
		color: var(--fg-muted);
		font-size: 14px;
		line-height: 1.75;
	}
	.contact-actions {
		justify-self: end;
		width: min(100%, 350px);
	}
	.email-address {
		display: inline-block;
		min-height: 44px;
		color: var(--fg);
		font-size: clamp(20px, 2.3vw, 28px);
		letter-spacing: -0.04em;
		word-break: break-word;
	}
	.email-address:hover {
		color: var(--accent);
	}
	.action-row {
		display: flex;
		gap: 8px;
		margin-top: 14px;
	}
	.copy-button {
		display: grid;
		place-items: center;
		flex: 0 0 48px;
		min-height: 48px;
		border: 1px solid var(--border-strong);
		border-radius: 9px;
		color: var(--fg-muted);
		transition:
			color 0.18s,
			background 0.18s;
	}
	.copy-button:hover {
		color: var(--fg);
		background: var(--surface-hover);
	}
	.copy-feedback {
		min-height: 24px;
		margin-top: 8px;
		color: var(--accent);
		font-size: 12px;
		line-height: 1.6;
	}
	.social-links {
		display: flex;
		flex-wrap: wrap;
		gap: 26px;
		margin-top: 4px;
	}
	.social-links :global(svg) {
		width: 15px;
		height: 15px;
	}
	@media (max-width: 760px) {
		.contact-section {
			margin-top: 64px;
			padding: 24px;
		}
		.contact-body {
			grid-template-columns: minmax(0, 1fr);
			gap: 32px;
			margin-top: 24px;
		}
		.contact-actions {
			justify-self: start;
			width: 100%;
		}
	}
</style>
