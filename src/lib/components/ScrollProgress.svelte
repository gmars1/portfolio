<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let progressBar: HTMLDivElement | undefined = $state();
	let frame = 0;

	function update() {
		frame = 0;
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
		if (progressBar) progressBar.style.width = scrolled + '%';
	}

	function onScroll() {
		if (frame) return;
		frame = requestAnimationFrame(update);
	}

	onMount(() => {
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });
	});

	onDestroy(() => {
		if (frame) cancelAnimationFrame(frame);
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		}
	});
</script>

<div
	class="fixed top-0 left-0 z-[60] h-[3px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
	bind:this={progressBar}
	style="width: 0%"
	role="progressbar"
	aria-label="Прогресс прокрутки"
></div>
