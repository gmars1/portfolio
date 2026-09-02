<script lang="ts">
	import { inview } from 'svelte-inview';

	type Props = {
		delay?: number;
		duration?: number;
		children?: import('svelte').Snippet;
	};

	let { delay = 0, duration = 800, children }: Props = $props();

	let visible = $state(false);

	function handleEnter(event: CustomEvent<{ inView: boolean }>) {
		if (event.detail.inView) {
			visible = true;
		}
	}
</script>

<div
	use:inview={{ unobserveOnEnter: true }}
	oninview={handleEnter}
	class="transition-all ease-out"
	class:opacity-100={visible}
	class:translate-y-0={visible}
	class:opacity-0={!visible}
	class:translate-y-10={!visible}
	style="transition-duration: {duration}ms; transition-delay: {delay}ms;"
>
	{@render children?.()}
</div>