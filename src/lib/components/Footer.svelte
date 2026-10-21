<script lang="ts">
	import { resolve } from '$app/paths';
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="shell footer-layout">
		<p>&copy; {year} Marsel. Все права защищены.</p>
		<div class="footer-links">
			<a
				href="https://github.com/marsel"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub профиль">GitHub</a
			><a href="https://t.me/marsel" target="_blank" rel="noopener noreferrer">Telegram</a><a
				href={resolve('/privacy/')}>Конфиденциальность</a
			>
		</div>
		<a class="back-top" href="#main-content" aria-label="К началу страницы">↑</a>
	</div>
</footer>

<style>
	footer {
		margin-top: 64px;
		border-top: 1px solid var(--border);
	}
	.footer-layout {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 24px;
		padding-block: 24px;
		color: var(--fg-muted);
		font-size: 11px;
	}
	.footer-layout > p {
		margin-right: auto;
	}
	.footer-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 24px;
	}
	.footer-links a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
	}
	a:hover {
		color: var(--fg);
	}
	.back-top {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border: 1px solid var(--border);
		border-radius: 50%;
		color: var(--fg);
		font-size: 18px;
	}
	@media (max-width: 760px) {
		footer {
			margin-top: 40px;
		}
		.footer-layout {
			gap: 4px 16px;
		}
		.footer-layout > p {
			width: calc(100% - 60px);
			order: 0;
		}
		.back-top {
			order: 1;
		}
		.footer-links {
			order: 2;
			width: 100%;
			gap: 12px 20px;
		}
	}
</style>
