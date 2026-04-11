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
	<meta
		name="description"
		content="PLC training, SCADA training, Automation Training, Automation Courses, Electrical design courses any inquiry about the above courses you can contact us. Our counselor will guide you about the courses."
	/>
	<meta
		name="keywords"
		content="PLC training, SCADA training, Automation Training, Automation Courses, Electrical design courses any inquiry about the above courses you can contact us. Our counselor will guide you about the courses."
	/>
	<meta
		property="og:title"
		content="Autonetics Training Institute | Automation Training in Nashik"
	/>
	<meta
		property="og:description"
		content="PLC training, SCADA training, Automation Training, Automation Courses, Electrical design courses any inquiry about the above courses you can contact us. Our counselor will guide you about the courses."
	/>
	<meta property="og:type" content="business.business" />
	<meta property="og:url" content="https://autonetics.in/" />
	<meta property="og:image" content="https://autonetics.in/logo.png" />
	<meta
		property="og:description"
		content="Autonetics Training Center provides PLC training, SCADA training, Automation training, Electrical design courses in Nashik"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Autonetics Training Institute | Automation Training in Nashik"
	/>
	<meta
		name="twitter:description"
		content="Autonetics Training Center provides PLC training, SCADA training, Automation training, Electrical design courses in Nashik"
	/>
	<meta name="twitter:image" content="https://autonetics.in/logo.png" />
</svelte:head>

<Header />

<main class="min-h-screen max-w-screen">
	{@render children()}
</main>

<Footer />
