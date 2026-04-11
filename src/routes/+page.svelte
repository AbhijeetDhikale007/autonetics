<script lang="ts">
	import { resolve } from "$app/paths";
</script>

<svelte:head>
	<title>Autonetics Automation | Precision for a Scalable Future</title>
</svelte:head>

<section
	class="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
>
	<!-- Background Image -->
	<div class="absolute inset-0 z-0">
		<img
			src={resolve("/hero_background.png")}
			alt="Futuristic assembly line with robotic arm"
			class="w-full h-full object-cover opacity-90 dark:opacity-60 transition-opacity duration-500"
		/>
		<!-- Gradient Overlay to ensure text readability -->
		<div
			class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 dark:from-slate-950/95 dark:via-slate-950/80 dark:to-slate-950/10 transition-colors duration-500"
		></div>
	</div>

	<!-- Content -->
	<div
		class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"
	>
		<div class="max-w-2xl">
			<div
				class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-sm font-semibold tracking-wide mb-6"
			>
				<span class="relative flex h-2 w-2">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
					></span>
					<span
						class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"
					></span>
				</span>
				Pioneering Automation
			</div>

			<h1
				class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight transition-colors duration-500"
			>
				Precision Engineering for a <span
					class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"
					>Scalable Future</span
				>
			</h1>

			<p
				class="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed max-w-xl transition-colors duration-500"
			>
				Autonetics Automation delivers cutting-edge robotics and
				advanced system integrations, empowering industries to achieve
				operational excellence.
			</p>

			<div class="flex flex-wrap items-center gap-4">
				<a
					href="/services"
					class="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
				>
					Explore Our Services
					<span class="i-ph-arrow-right-bold text-lg"></span>
				</a>

				<a
					href="/contact"
					class="px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm hover:-translate-y-0.5 transition-all duration-300"
				>
					Speak to an Engineer
				</a>
			</div>
		</div>
	</div>
</section>
