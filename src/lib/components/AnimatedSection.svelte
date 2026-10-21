<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		delay?: number;
		duration?: number;
		children?: Snippet;
	};

	let { delay = 0, duration = 450, children }: Props = $props();

	// The HTML stays visible; animation only enhances a working page.
	function reveal(node: HTMLDivElement, options: { delay: number; duration: number }) {
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (motion.matches || !('IntersectionObserver' in window) || !node.animate) return;

		let animation: Animation | undefined;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			observer.disconnect();
			animation = node.animate(
				[
					{ opacity: 0, transform: 'translateY(16px)' },
					{ opacity: 1, transform: 'none' }
				],
				{ ...options, easing: 'ease-out', fill: 'backwards' }
			);
		});

		function stop() {
			observer.disconnect();
			animation?.cancel();
		}

		function onMotionChange() {
			if (motion.matches) stop();
		}

		observer.observe(node);
		motion.addEventListener('change', onMotionChange);

		return {
			destroy() {
				stop();
				motion.removeEventListener('change', onMotionChange);
			}
		};
	}
</script>

<div use:reveal={{ delay, duration }}>
	{@render children?.()}
</div>
