<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import MorphingHeader from '$lib/components/MorphingHeader.svelte';
  import ScrollProgress from '$lib/components/ScrollProgress.svelte';
  import '../app.css';
</script>

<ScrollProgress/>
<MorphingHeader />

<main class="container mx-auto px-4 py-8 flex-1">
  <slot />
</main>
<Footer />