<script lang="ts">
	import "virtual:uno.css";
	import "../app.css";
	import favicon from "$lib/assets/favicon.ico";
	import { onMount } from "svelte";
	import Lenis from "lenis";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";

	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true,
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main class="min-h-screen max-w-screen">
	{@render children()}
</main>

<Footer />
