<script lang="ts">
	import { onMount } from 'svelte';

	let flashOverlay: HTMLDivElement | undefined = $state();
	let stick: HTMLDivElement | undefined = $state();
	let hasTriggered = false;
	let reducedMotion = false;

	function setScrollLock(lock: boolean) {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = lock ? 'hidden' : '';
	}

	function handleScrollAttempt() {
		if (hasTriggered || reducedMotion) return;

		hasTriggered = true;
		window.removeEventListener('wheel', handleScrollAttempt);
		window.removeEventListener('touchstart', handleScrollAttempt);

		triggerSequence();
	}

	function triggerSequence() {
		try {
			sessionStorage.setItem('neuralyzer_seen', '1');
		} catch {
			/* sessionStorage may be unavailable */
		}

		stick?.classList.remove('translate-x-[150%]');
		stick?.classList.add('translate-x-0');

		setTimeout(() => {
			flashOverlay?.classList.remove('opacity-0', 'pointer-events-none');
			flashOverlay?.classList.add('opacity-100');

			setTimeout(() => {
				setScrollLock(false);

				document.getElementById('main-content')?.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});

				stick?.classList.remove('translate-x-0');
				stick?.classList.add('translate-x-[150%]');

				setTimeout(() => {
					flashOverlay?.classList.remove('opacity-100');
					flashOverlay?.classList.add('opacity-0', 'pointer-events-none');
				}, 800);
			}, 400);
		}, 800);
	}

	onMount(() => {
		if (typeof window === 'undefined') return;

		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		let alreadySeen = false;
		try {
			alreadySeen = sessionStorage.getItem('neuralyzer_seen') === '1';
		} catch {
			alreadySeen = false;
		}

		if (alreadySeen || reducedMotion) {
			setScrollLock(false);
			return;
		}

		setScrollLock(true);
		window.addEventListener('wheel', handleScrollAttempt, { passive: true });
		window.addEventListener('touchstart', handleScrollAttempt, { passive: true });

		return () => {
			setScrollLock(false);
			window.removeEventListener('wheel', handleScrollAttempt);
			window.removeEventListener('touchstart', handleScrollAttempt);
		};
	});
</script>

<div
	bind:this={stick}
	class="fixed right-0 top-1/2 -translate-y-1/2 z-[90] translate-x-[150%] transition-transform duration-700 ease-out flex items-center pointer-events-none"
	aria-hidden="true"
>
	<div
		class="bg-gray-900 border-l-4 border-purple-500 p-6 rounded-l-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center gap-4"
	>
		<div class="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
		<span class="text-white font-bold tracking-widest text-sm uppercase">Scanning…</span>
	</div>
</div>

<div
	bind:this={flashOverlay}
	class="fixed inset-0 bg-white z-[100] opacity-0 pointer-events-none transition-opacity duration-500 ease-out"
	aria-hidden="true"
></div>