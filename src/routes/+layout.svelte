<script lang="ts">
	import SiteNav from '$lib/components/SiteNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import '../app.css';
	import onestLatin from '$lib/assets/fonts/onest-6.woff2?url';
	import onestCyrillic from '$lib/assets/fonts/onest-1.woff2?url';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preload" href={onestLatin} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={onestCyrillic} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a class="skip-link" href="#main-content">Перейти к содержимому</a>

<ScrollProgress />
<SiteNav />

<main tabindex="-1" id="main-content" class="shell site-main">
	{@render children?.()}
</main>

<Footer />

<style>
	.site-main {
		padding-top: 100px;
		min-height: 65vh;
	}
	@media (max-width: 600px) {
		.site-main {
			padding-top: 124px;
		}
	}
</style>
