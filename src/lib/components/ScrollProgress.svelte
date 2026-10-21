<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let progressBar: HTMLDivElement | undefined = $state();
	let frame = 0;

	function update() {
		frame = 0;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const progress = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
		if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
	}

	function scheduleUpdate() {
		if (!frame) frame = requestAnimationFrame(update);
	}

	afterNavigate(scheduleUpdate);

	onMount(() => {
		scheduleUpdate();
		window.addEventListener('scroll', scheduleUpdate, { passive: true });
		window.addEventListener('resize', scheduleUpdate, { passive: true });
		const observer = new ResizeObserver(scheduleUpdate);
		observer.observe(document.body);

		return () => {
			if (frame) cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener('scroll', scheduleUpdate);
			window.removeEventListener('resize', scheduleUpdate);
		};
	});
</script>

<div
	class="fixed top-0 left-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
	bind:this={progressBar}
	style="transform: scaleX(0)"
	aria-hidden="true"
></div>
