<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';

	type Props = {
		variant?: 'home' | 'page';
	};

	let { variant = 'home' }: Props = $props();

	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 24;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between"
	class:bg-[var(--bg-elevated)]={scrolled}
	class:backdrop-blur-md={scrolled}
	class:border-b={scrolled}
	class:border-white={scrolled}
	class:border-opacity-10={scrolled}
>
	<a
		href={resolve('/')}
		class="font-bold text-2xl tracking-tighter text-white hover:text-purple-400 transition-colors"
		aria-label="Marsel — на главную"
	>
		Marsel<span class="text-purple-500">.</span>
	</a>

	<nav class="flex items-center gap-4 sm:gap-8 text-sm font-medium text-gray-400">
		<a
			href={resolve('/projects/')}
			class="hidden sm:inline hover:text-white transition-colors"
			aria-current={variant === 'page' ? undefined : undefined}>Проекты</a
		>
		<a href={resolve('/about/')} class="hidden sm:inline hover:text-white transition-colors"
			>Обо мне</a
		>
		<a
			href="mailto:hello@marsel.dev"
			class="px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 text-white transition-all"
		>
			Связаться
		</a>
	</nav>
</header>