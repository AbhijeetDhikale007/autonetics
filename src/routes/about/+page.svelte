<script lang="ts">
	let capabilities = [
		{ text: "Design, Selection, Sizing and Detailed Engineering of Instrumentation & Control", icon: "i-ph-pencil-ruler-fill" },
		{ text: "Designing Special Purpose Machines (SPM)", icon: "i-ph-cpu-fill" },
		{ text: "Automation & Electrical Systems for Process Industries", icon: "i-ph-factory-fill" },
		{ text: "Advanced PLC/SCADA & DCS Systems", icon: "i-ph-desktop-fill" },
		{ text: "Embedded and Robotics Solutions", icon: "i-ph-robot-fill" },
		{ text: "Powerpack Hydraulic and Pneumatic Systems", icon: "i-ph-gear-six-fill" },
		{ text: "Sensors, Transmitters, On-Off & Control Valves", icon: "i-ph-sliders-horizontal-fill" },
		{ text: "Installation and Calibration of Instruments", icon: "i-ph-wrench-fill" },
		{ text: "VFD, Servo drives and Soft-starter panels", icon: "i-ph-lightning-fill" },
		{ text: "Custom SCADA System Development", icon: "i-ph-chart-line-up-fill" },
		{ text: "Secure Power Solutions", icon: "i-ph-shield-check-fill" },
		{ text: "Telemetry & Remote SCADA Solutions", icon: "i-ph-broadcast-fill" }
	];
</script>

<svelte:head>
	<title>About Us | Autonetics Automation</title>
</svelte:head>

<!-- Hero Section -->
<section class="w-full bg-slate-900 dark:bg-slate-950 py-24 relative overflow-hidden">
	<div class="absolute inset-0 bg-[url('/hero_background.png')] bg-cover bg-center bg-fixed opacity-30"></div>
	<div class="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-slate-950/95"></div>
	<div class="container mx-auto px-6 relative z-10 text-center">
		<h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">About Autonetics</h1>
		<p class="text-lg text-blue-100 max-w-2xl mx-auto opacity-90 leading-relaxed">
			Driving innovation, technology, and education to make life easier and industries smarter.
		</p>
	</div>
</section>

<!-- Vision & Mission -->
<section class="py-20 bg-slate-50 dark:bg-[#060813] transition-colors duration-300 relative z-10 -mt-8">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			
			<!-- Vision Card -->
			<div class="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-blue-900/5 dark:shadow-none border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:-translate-y-1 transition-transform">
				<div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
				<div class="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 shrink-0 relative z-10 border border-blue-200 dark:border-blue-800/50">
					<span class="i-ph-eye-fill text-3xl"></span>
				</div>
				<h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Vision</h2>
				<p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
					Globally make ‘Life-Easier’ by innovation, technology and education in multi-disciplinary fields by maintaining high standards of quality and providing good services to every man kind.
				</p>
			</div>

			<!-- Mission Card -->
			<div class="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-blue-900/5 dark:shadow-none border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:-translate-y-1 transition-transform">
				<div class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
				<div class="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 shrink-0 relative z-10 border border-indigo-200 dark:border-indigo-800/50">
					<span class="i-ph-target-fill text-3xl"></span>
				</div>
				<h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Mission</h2>
				<p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
					Drive Technology by Innovation to invent and manufacture easily accessible and affordable devices to make life easier for the masses. Create a platform to constantly drive technology education, leading to a technology aware country.
				</p>
			</div>

		</div>
	</div>
</section>

<!-- Story Section -->
<section class="py-20 bg-white dark:bg-slate-900/90 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Who We Are</h2>
			<div class="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6">
				<p>
					<strong class="text-slate-900 dark:text-slate-200">Automation engineering</strong> is all about selecting, integrating, configuring and troubleshooting of various readymade products in different engineering branches which makes the machine run automatically.
				</p>
				<p>
					At <strong class="text-blue-600 dark:text-blue-400">Autonetics Automation</strong>, we provide automation solutions for every budget and for all kinds of automation requirements. We cater to our clients with the best of services along with End-to-End solutions. We undertake Automation Projects all over India and abroad in a wide range of Process Industries—Tyre & Pharmaceutical industries, Power & Electrical, Home automation, Robotics, Forging, and Mining industries to name a few.
				</p>
				<p>
					Autonetics also helps to <strong class="text-slate-900 dark:text-slate-200">reduce the gap between industry and you</strong>. We guide you according to current market trends and industry needs. We provide a portal to meet your professional characteristics and make you an industry-ready professional. We offer certification courses in PLC & SCADA Training programs for B.E. and Diploma graduating students and working professionals for their better careers.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Capabilities Array -->
<section class="py-24 bg-slate-50 dark:bg-[#060813] transition-colors duration-300">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Core Capabilities</h2>
			<p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
				We deliver comprehensive end-to-end industrial solutions equipped with modern technology.
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
			{#each capabilities as item}
				<div class="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group cursor-default">
					<div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-1 group-hover:bg-blue-600 group-hover:text-white transition-colors">
						<span class="{item.icon} text-xl"></span>
					</div>
					<p class="text-slate-700 dark:text-slate-300 font-medium leading-snug pt-1">
						{item.text}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
