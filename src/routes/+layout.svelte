<script lang="ts">
	import SiteNav from '$lib/components/SiteNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<a class="skip-link" href="#main-content">Перейти к содержимому</a>

<ScrollProgress />
<SiteNav />

<main id="main-content" class="container mx-auto flex-1 px-4 pt-28 pb-16">
	{@render children?.()}
</main>

<Footer />
