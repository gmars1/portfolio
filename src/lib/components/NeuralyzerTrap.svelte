<script lang="ts">
	import { onMount } from 'svelte';

	let active = $state(false);
	let reducedMotion = $state(false);

	onMount(() => {
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		function updateMotion() {
			reducedMotion = motion.matches;
			if (reducedMotion) active = false;
		}
		updateMotion();
		motion.addEventListener('change', updateMotion);
		return () => motion.removeEventListener('change', updateMotion);
	});
</script>

{#if !reducedMotion}
	<div class="mb-4 flex justify-end">
		<button
			type="button"
			class="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-purple-400 hover:text-white"
			aria-pressed={active}
			onclick={() => (active = !active)}
		>
			{active ? 'Остановить эффект' : 'Показать эффект'}
		</button>
	</div>
{/if}

{#if active}
	<div
		class="scanner pointer-events-none fixed top-1/2 right-0 z-[40] -translate-y-1/2 rounded-l-xl border-l-4 border-purple-500 bg-gray-900 p-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
		aria-hidden="true"
		onanimationend={() => (active = false)}
	>
		<span class="text-sm font-bold tracking-widest text-purple-300 uppercase">Scanning…</span>
	</div>
{/if}

<style>
	.scanner {
		animation: scan 2s ease-in-out;
	}

	@keyframes scan {
		0%,
		100% {
			transform: translateX(110%);
		}
		25%,
		75% {
			transform: translateX(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.scanner {
			display: none;
		}
	}
</style>
