<script lang="ts">
	let services = [
		{
			title: "Plant Automation",
			icon: "i-ph-factory-fill",
			description: "Comprehensive PLC, HMI, and SCADA programming across all major industrial platforms.",
			points: [
				"PLC Platforms: AB, Siemens, ABB, Mitsubishi, Ge-Fanuc, Delta, Schneider, Wecon.",
				"Designing and developing HMI and SCADA systems.",
				"Refurbishment of MicroLogix, Compact-Logix, S7-1200, S7-1500.",
				"Custom machine-oriented electrical panels & Servo-based applications."
			]
		},
		{
			title: "Tyre Industries",
			icon: "i-ph-circle-notch-fill",
			description: "Leading turnkey automation system providers specialized for tire manufacturing processes.",
			points: [
				"Mixer area electrical panels, VFD, and Servo drive system modifications.",
				"Service on Winder, Extruder, 3-roll and 4-roll calendar systems.",
				"Development for McNeil & NRM press, Harbor press, Uzer Makina.",
				"Design and deployment of SCADA Networking."
			]
		},
		{
			title: "Pharmaceutical Industries",
			icon: "i-ph-pill-fill",
			description: "Precision automation, drive control, and material handling systems for the pharma sector.",
			points: [
				"Electrical VFD and Servo drive panel solutions.",
				"Special Purpose Machines (SPM) built to client specifications.",
				"SCADA system design and critical troubleshooting.",
				"Special conveyor and granular systems for powder industries."
			]
		},
		{
			title: "Power Industries",
			icon: "i-ph-lightning-fill",
			description: "Robust automation solutions for relay-based and drive-based power infrastructure.",
			points: [
				"Automation on relay-based panels and drive-based panels.",
				"Custom SCADA system design and development.",
				"SCADA integration for Suzlon Systems (GE SCADA & Siemens SCADA)."
			]
		},
		{
			title: "Forging Industry",
			icon: "i-ph-hammer-fill",
			description: "Heavy-duty press automation, lubrication systems, and comprehensive robotics.",
			points: [
				"Refurbishment of 2000T press, Rolling Mill & Calibration Press.",
				"PLC, VFD, Servo, HMI programming including SCADA Server Database logging.",
				"Lubrication systems for 2000T press with Fully Automatic Arm System.",
				"52 press development screening in centralized SCADA Systems."
			]
		}
	];

	let comingSoon = [
		{ title: "Home Automation", icon: "i-ph-house-line-fill" },
		{ title: "Robotics Industries", icon: "i-ph-robot-fill" },
		{ title: "Mining Industries", icon: "i-ph-mountains-fill" }
	];

	let clients = [
		"Flair Writing Ltd, Daman",
		"Manda Houseware, Vapi",
		"CEAT, Badoda",
		"Western Drugs, Udaipur",
		"Sanjeev Auto, Aurangabad",
		"Avdhoot Heat Treatment",
		"Hind Rectifier, Nashik",
		"Essem, Nashik",
		"Shreejay Technocrats, Nashik",
		"Undercarriage & Tractor Parts, Kolhapur",
		"CEAT, Umbernath",
		"Ruby Mica, Jharkhand",
		"Suzlon, Ratlam, MP",
		"KOSO India, Nashik"
	];
</script>

<svelte:head>
	<title>Our Services | Autonetics Automation</title>
</svelte:head>

<!-- Hero Section -->
<section class="w-full bg-slate-900 dark:bg-slate-950 py-24 relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 dark:from-blue-900/10 to-transparent"></div>
	<div class="container mx-auto px-6 relative z-10 text-center">
		<h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Services</h1>
		<p class="text-lg text-blue-100 max-w-3xl mx-auto opacity-90 leading-relaxed">
			Delivering world-class SCADA integration, comprehensive Plant Automation, and specialized industrial engineering solutions.
		</p>
	</div>
</section>

<!-- Main Services Section -->
<section class="py-24 bg-slate-50 dark:bg-[#060813] transition-colors duration-300 relative z-10">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Core Competencies</h2>
			<div class="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service}
				<div class="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
					<div class="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 shrink-0">
						<span class="{service.icon} text-3xl"></span>
					</div>
					<h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
					<p class="text-slate-600 dark:text-slate-400 mb-6 font-medium text-sm leading-relaxed">
						{service.description}
					</p>
					<div class="mt-auto">
						<ul class="space-y-3">
							{#each service.points as point}
								<li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
									<span class="i-ph-check-circle-fill text-blue-600 dark:text-blue-500 mt-0.5 shrink-0 text-[18px]"></span>
									<span class="leading-relaxed">{point}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Future Verticals -->
<section class="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
	<div class="container mx-auto px-6 text-center">
		<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-10">Upcoming Sectors</h2>
		<div class="flex flex-wrap justify-center gap-6">
			{#each comingSoon as item}
				<div class="flex items-center gap-4 bg-slate-50 dark:bg-slate-950 px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-800 min-w-[260px] shadow-sm hover:border-blue-500/50 transition-colors">
					<div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
						<span class="{item.icon} text-2xl"></span>
					</div>
					<div class="text-left">
						<h3 class="font-bold text-slate-900 dark:text-white">{item.title}</h3>
						<span class="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Coming Soon</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Clients Section -->
<section class="py-24 bg-slate-50 dark:bg-[#060813] transition-colors duration-300 relative z-10">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Trusted Clients</h2>
			<p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
				We are proud to have delivered custom automation and engineering solutions to these industry-leading organizations.
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
			{#each clients as client}
				<div class="px-5 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-slate-700 dark:text-slate-300 text-sm font-semibold tracking-wide hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
					{client}
				</div>
			{/each}
		</div>
		
		<div class="mt-20 text-center">
			<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition-all">
				Start a Project with Us
				<span class="i-ph-arrow-right-bold text-lg"></span>
			</a>
		</div>
	</div>
</section>
