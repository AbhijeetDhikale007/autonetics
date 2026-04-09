<script lang="ts">
	import { onMount } from "svelte";
	import Ico from "./Ico.svelte";

	let isDark = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		isDark = document.documentElement.classList.contains("dark");

		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	}

	const links = [
		{ name: "About us", href: "/about" },
		{ name: "Our Services", href: "/services" },
		{ name: "Training", href: "/training" },
		{ name: "Gallery", href: "/gallery" },
		{ name: "Careers", href: "/careers" },
		{ name: "Contact Us", href: "/contact" },
	];
</script>

<header
	class="sticky top-0 z-50 w-full transition-all duration-500
		{scrolled
			? 'backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
			: 'bg-transparent border-b border-transparent'}"
>
	<div class="container mx-auto px-6 h-20 flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 group">
			<img src="/logo.png" alt="Autonetics Automation" class="h-10" />
		</a>

		<!-- Navigation Nav -->
		<nav class="hidden lg:flex items-center gap-6 xl:gap-8">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-medium text-slate-900 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
				>
					{link.name}
				</a>
			{/each}
		</nav>

		<!-- Right Side / Social / Theme Toggle -->
		<div class="flex items-center gap-4">
			<!-- Socials -->
			<div
				class="hidden md:flex items-center gap-3 pr-4 border-r border-slate-300 dark:border-slate-700"
			>
				<a
					href="https://www.linkedin.com/in/autonetics-training-center-887268141/"
					target="_blank"
					aria-label="LinkedIn"
					class="grid place-items-center w-8 h-8 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all"
				>
					<Ico name="LinkedIn" />
				</a>
				<a
					href="https://x.com/Autonetics123"
					target="_blank"
					aria-label="X"
					class="grid place-items-center w-8 h-8 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all"
				>
					<Ico name="X" />
				</a>
				<a
					href="https://www.youtube.com/channel/UCOfwRpXaZ1-o6E3qVZjQqLA?view_as=subscriber"
					target="_blank"
					aria-label="YouTube"
					class="grid place-items-center w-8 h-8 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all"
				>
					<Ico name="YouTube" />
				</a>
				<a
					href="https://www.facebook.com/autoneticstrainingcenter/"
					target="_blank"
					aria-label="Facebook"
					class="grid place-items-center w-8 h-8 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all"
				>
					<Ico name="Facebook" />
				</a>
			</div>

			<!-- Theme Toggle -->
			<button
				onclick={toggleTheme}
				class="relative w-10 h-10 rounded-full flex justify-center items-center bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
				aria-label="Toggle Theme"
			>
				{#if isDark}
					<span
						class="i-solar-sun-bold text-xl text-amber-400 absolute transition-all rotate-0 scale-100"
					></span>
				{:else}
					<span
						class="i-solar-moon-bold text-xl text-slate-700 absolute transition-all rotate-0 scale-100"
					></span>
				{/if}
			</button>

			<!-- Mobile Menu Button -->
			<button class="lg:hidden p-2" aria-label="Menu">
				<span
					class="i-ph-list text-2xl text-slate-800 dark:text-slate-200"
				></span>
			</button>
		</div>
	</div>
</header>
