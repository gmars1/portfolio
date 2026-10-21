<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Arrow from './Arrow.svelte';

	let scrolled = $state(false);
	const projectsActive = $derived(page.route.id?.startsWith('/projects') ?? false);
	const aboutActive = $derived(page.route.id === '/about');
	onMount(() => {
		const update = () => {
			scrolled = window.scrollY > 20;
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		return () => window.removeEventListener('scroll', update);
	});
</script>

<header class:scrolled>
	<div class="shell nav-layout">
		<a class="brand" href={resolve('/')} aria-label="Marsel — на главную">Marsel<span>.</span></a>
		<nav aria-label="Главная">
			<a href={resolve('/projects/')} aria-current={projectsActive ? 'page' : undefined}>Проекты</a
			><a href={resolve('/about/')} aria-current={aboutActive ? 'page' : undefined}>Обо мне</a><a
				class="nav-contact"
				href="mailto:hello@marsel.dev">Связаться <Arrow /></a
			>
		</nav>
	</div>
</header>

<style>
	header {
		position: fixed;
		z-index: 50;
		inset: 0 0 auto;
		background: #101214e8;
		border-bottom: 1px solid transparent;
		transition:
			border-color 0.2s,
			background 0.2s;
	}
	header.scrolled {
		border-bottom-color: var(--border);
		background: #101214f5;
		backdrop-filter: blur(16px);
	}
	.nav-layout {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
		min-height: 88px;
	}
	.brand {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-size: 25px;
		font-weight: 600;
		letter-spacing: -0.06em;
	}
	.brand span {
		color: var(--accent);
	}
	nav {
		display: flex;
		align-items: center;
		gap: 36px;
	}
	nav > a {
		display: flex;
		align-items: center;
		min-height: 44px;
		color: var(--fg-muted);
		font-size: 13px;
		transition: color 0.18s;
	}
	nav > a:is(:hover, [aria-current='page']) {
		color: var(--fg);
	}
	nav > a[aria-current='page'] {
		text-decoration: underline;
		text-underline-offset: 8px;
		text-decoration-color: var(--accent);
		text-decoration-thickness: 2px;
	}
	nav > .nav-contact {
		gap: 16px;
		padding: 0 16px;
		border: 1px solid var(--border-strong);
		border-radius: 8px;
		color: var(--fg);
	}
	.nav-contact:hover {
		background: var(--surface-hover);
	}
	.nav-contact :global(svg) {
		width: 16px;
		height: 16px;
		color: var(--accent);
	}
	@media (max-width: 600px) {
		.nav-layout {
			flex-wrap: wrap;
			gap: 0;
			padding-top: 10px;
			padding-bottom: 10px;
			min-height: 112px;
		}
		.brand {
			font-size: 24px;
		}
		nav {
			width: 100%;
			justify-content: space-between;
			gap: 12px;
		}
		nav > a {
			font-size: 12px;
		}
		nav > .nav-contact {
			gap: 10px;
			padding-inline: 12px;
			min-height: 40px;
		}
	}
</style>
