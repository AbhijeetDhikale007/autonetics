<script lang="ts">
	import "virtual:uno.css";
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import { onMount } from "svelte";
	import Lenis from "lenis";
	import Header from "$lib/components/Header.svelte";

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

<main class="min-h-screen">
	{@render children()}
</main>
