<script lang="ts">
	import { inview } from 'svelte-inview';

	type Props = {
		delay?: number;
		duration?: number;
		children?: import('svelte').Snippet;
	};

	let { delay = 0, duration = 800, children }: Props = $props();

	function handleEnter(event: CustomEvent<{ isIntersecting: boolean }>) {
		if (event.detail.isIntersecting) {
			visible = true;
		}
	}

	let visible = $state(false);
</script>

<div
	use:inview={{ once: true, unobserveOnEnter: true }}
	on:inview={handleEnter}
	class="transition-all ease-out"
	class:opacity-100={visible}
	class:translate-y-0={visible}
	class:opacity-0={!visible}
	class:translate-y-10={!visible}
	style="transition-duration: {duration}ms; transition-delay: {delay}ms;"
>
	{@render children?.()}
</div>