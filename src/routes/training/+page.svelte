<script lang="ts">
	let industrialCourses = [
		{ name: "Autonetics Certified PG Diploma in Industrial Automation", icon: "i-ph-certificate-fill", link: "/autonetics-certified-pg-diploma-in-industrial-automation.html" },
		{ name: "Autonetics Certified Automation Engineering", icon: "i-ph-factory-fill", link: "/autonetics-certified-automation-engineering.html" },
		{ name: "Autonetics Certified PLC Programmer", icon: "i-ph-desktop-fill", link: "/autonetics-certified-plc-programmer.html" },
		{ name: "Autonetics Certified Electrical System", icon: "i-ph-lightning-fill", link: "/autonetics-certified-electrical-system.html" },
		{ name: "Autonetics Certified Mechatronics System", icon: "i-ph-robot-fill", link: "/autonetics-certified-mechatronics-system.html" },
		{ name: "Autonetics Certified SCADA Developer", icon: "i-ph-chart-line-up-fill", link: "/autonetics-certified-scada-developer.html" },
		{ name: "Autonetics Certified Embedded System Designer", icon: "i-ph-cpu-fill", link: "/autonetics-certified-embedded-system-designer.html" }
	];

	let embeddedCourses = [
		{ name: "Advanced Microcontroller", icon: "i-ph-cpu-fill", link: "/advanced-microcontroller.html" },
		{ name: "Embedded Professional", icon: "i-ph-laptop-fill", link: "/embedded-professional.html" },
		{ name: "Languages", icon: "i-ph-code-fill", link: "/languages.html" },
		{ name: "Microcontroller", icon: "i-ph-cpu-fill", link: "/microcontroller.html" },
		{ name: "PCB Designing", icon: "i-ph-bounding-box-fill", link: "/pcb-designing.html" } 
	];
</script>

<svelte:head>
	<title>Training Programs | Autonetics Automation</title>
</svelte:head>

<!-- Hero Section -->
<section class="w-full bg-slate-900 dark:bg-slate-950 py-24 relative overflow-hidden">
	<div class="absolute inset-0 bg-[url('/hero_background.png')] bg-cover bg-center bg-fixed opacity-30"></div>
	<div class="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-slate-950/95"></div>
	<div class="container mx-auto px-6 relative z-10 text-center">
		<h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Training Programs</h1>
		<p class="text-lg text-blue-100 max-w-2xl mx-auto opacity-90 leading-relaxed">
			Industry-leading courses to bridge the gap between academics and the professional automation world.
		</p>
	</div>
</section>

<!-- Industrial Automation Section -->
<section class="py-24 bg-slate-50 dark:bg-[#060813] transition-colors duration-300 relative z-10 -mt-8">
	<div class="container mx-auto px-6 max-w-7xl">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			
			<div class="relative group order-2 lg:order-1">
				<div class="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-[2.5rem] blur-xl opacity-50 dark:opacity-30 group-hover:bg-blue-500/30 transition-colors duration-500"></div>
				<div class="w-full h-[500px] rounded-3xl overflow-hidden relative z-10 shadow-2xl border border-white/20 dark:border-slate-800 bg-slate-900">
					<img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" alt="Industrial Automation Lab" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" loading="lazy" />
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-8">
						<h3 class="text-3xl font-bold text-white drop-shadow-md">Industrial Automation</h3>
					</div>
				</div>
			</div>

			<div class="order-1 lg:order-2">
				<div class="mb-10">
					<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Industrial Automation Courses</h2>
					<p class="text-slate-600 dark:text-slate-400 text-lg">Comprehensive programs covering PLCs, SCADA, Drives, and more for modern factories.</p>
				</div>
				
				<div class="space-y-4">
					{#each industrialCourses as course}
						<a href={course.link} class="group flex items-center justify-between bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-300">
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
									<span class="{course.icon} text-2xl"></span>
								</div>
								<h3 class="text-[0.95rem] md:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									{course.name}
								</h3>
							</div>
							<span class="i-ph-caret-right-bold text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-hover:translate-x-1 shrink-0 ml-2"></span>
						</a>
					{/each}
				</div>
			</div>
			
		</div>
	</div>
</section>

<!-- Embedded Systems Section -->
<section class="py-24 bg-white dark:bg-[#0a0e1a] border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
	<div class="container mx-auto px-6 max-w-7xl">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			
			<div>
				<div class="mb-10">
					<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Embedded Systems Courses</h2>
					<p class="text-slate-600 dark:text-slate-400 text-lg">Master microcontroller programming, PCB designing, and advanced embedded ecosystems.</p>
				</div>
				
				<div class="space-y-4">
					{#each embeddedCourses as course}
						<a href={course.link} class="group flex items-center justify-between bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-300">
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
									<span class="{course.icon} text-2xl"></span>
								</div>
								<h3 class="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
									{course.name}
								</h3>
							</div>
							<span class="i-ph-caret-right-bold text-slate-400 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-transform group-hover:translate-x-1 shrink-0 ml-2"></span>
						</a>
					{/each}
				</div>
			</div>

			<div class="relative group">
				<div class="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-50 dark:opacity-30 group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
				<div class="w-full h-[500px] rounded-3xl overflow-hidden relative z-10 shadow-2xl border border-white/20 dark:border-slate-800 bg-slate-900">
					<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop" alt="Embedded Systems Circuit" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" loading="lazy" />
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-8">
						<h3 class="text-3xl font-bold text-white drop-shadow-md">Embedded Systems</h3>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
