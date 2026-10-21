<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let scrolled = $state(false);
	const projectsActive = $derived(page.route.id?.startsWith('/projects') ?? false);
	const aboutActive = $derived(page.route.id === '/about');

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 24;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<header
	class="fixed top-0 left-0 z-50 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 transition-all duration-300 sm:px-6 sm:py-4"
	class:bg-[var(--bg-elevated)]={scrolled}
	class:backdrop-blur-md={scrolled}
	class:scrolled
>
	<a
		href={resolve('/')}
		class="text-2xl font-bold tracking-tighter text-white transition-colors hover:text-purple-400"
		aria-label="Marsel — на главную"
	>
		Marsel<span class="text-purple-500">.</span>
	</a>

	<nav
		class="flex w-full items-center justify-between gap-2 text-sm font-medium text-gray-400 sm:w-auto sm:gap-6"
		aria-label="Главная"
	>
		<a
			href={resolve('/projects/')}
			class="px-2 py-1 transition-colors hover:text-white"
			aria-current={projectsActive ? 'page' : undefined}
		>
			Проекты
		</a>
		<a
			href={resolve('/about/')}
			class="px-2 py-1 transition-colors hover:text-white"
			aria-current={aboutActive ? 'page' : undefined}
		>
			Обо мне
		</a>
		<a
			href="mailto:hello@marsel.dev"
			class="rounded-full border border-white/20 px-4 py-2 text-white transition-all hover:border-purple-400/50 hover:bg-white/10"
		>
			Связаться
		</a>
	</nav>
</header>

<style>
	.scrolled {
		border-bottom: 1px solid var(--border);
	}
</style>
