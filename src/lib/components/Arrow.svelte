<script lang="ts">
	let { direction = 'up-right' }: { direction?: 'up-right' | 'right' | 'down' | 'left' } = $props();
	const rotation = $derived({ 'up-right': 0, right: 45, down: 135, left: 225 }[direction]);
</script>

<svg
	width="20"
	height="20"
	viewBox="0 0 24 24"
	fill="none"
	aria-hidden="true"
	style:rotate="{rotation}deg"
>
	<path
		d="M5 19 19 5M5 5h14v14"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
