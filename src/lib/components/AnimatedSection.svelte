<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';

	type Props = {
		delay?: number;
		duration?: number;
		children?: import('svelte').Snippet;
	};

	let { delay = 0, duration = 800, children }: Props = $props();

	let visible = $state(false);

	function handleChange(event: CustomEvent<ObserverEventDetails>) {
		if (event.detail.inView) {
			visible = true;
		}
	}
</script>

<div
	use:inview={{ unobserveOnEnter: true }}
	oninview_change={handleChange}
	class="transition-all ease-out"
	class:opacity-100={visible}
	class:translate-y-0={visible}
	class:opacity-0={!visible}
	class:translate-y-10={!visible}
	style="transition-duration: {duration}ms; transition-delay: {delay}ms;"
>
	{@render children?.()}
</div>
