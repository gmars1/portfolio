<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Моё портфолио</title>
</svelte:head>

<Header />
<main class="container mx-auto px-4 py-8 flex-1">
  <slot />
</main>
<Footer />