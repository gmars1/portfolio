<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve, base } from '$app/paths';

	let scrolled = $state(false);
	let currentPath = $state('/');

	onMount(() => {
		currentPath = window.location.pathname.replace(base, '').replace(/\/$/, '') || '/';

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
	class="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-300"
	class:bg-[var(--bg-elevated)]={scrolled}
	class:backdrop-blur-md={scrolled}
	class:border-b={scrolled}
	class:border-white={scrolled}
	class:border-opacity-10={scrolled}
>
	<a
		href={resolve('/')}
		class="text-2xl font-bold tracking-tighter text-white transition-colors hover:text-purple-400"
		aria-label="Marsel — на главную"
	>
		Marsel<span class="text-purple-500">.</span>
	</a>

	<nav
		class="flex items-center gap-2 text-sm font-medium text-gray-400 sm:gap-6"
		aria-label="Главная"
	>
		<a
			href={resolve('/projects/')}
			class="hidden px-2 py-1 transition-colors hover:text-white sm:inline-block"
			aria-current={currentPath.startsWith('/projects') ? 'page' : undefined}
		>
			Проекты
		</a>
		<a
			href={resolve('/about/')}
			class="hidden px-2 py-1 transition-colors hover:text-white sm:inline-block"
			aria-current={currentPath === '/about' ? 'page' : undefined}
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
