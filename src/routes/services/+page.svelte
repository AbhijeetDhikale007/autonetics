<script lang="ts">
	let services = [
		{
			title: "Plant Automation",
			icon: "i-ph-factory-fill",
			image: "/images/plant_automation.png",
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
			image: "/images/tyre_industry.png",
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
			image: "/images/pharma_industry.png",
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
			image: "/images/power_industry.png",
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
			image: "/images/forging_industry.png",
			description: "Heavy-duty press automation, lubrication systems, and comprehensive robotics.",
			points: [
				"Refurbishment of 2000T press, Rolling Mill & Calibration Press.",
				"PLC, VFD, Servo, HMI programming including SCADA Server Database logging.",
				"Lubrication systems for 2000T press with Fully Automatic Arm System.",
				"52 press development screening in centralized SCADA Systems."
			]
		}
	];

	let clients = [
		"Flair Writing Ltd, Daman",
		"Manda Houseware, Vapi",
		"CEAT, Badoda",
		"Western Drugs, Udaipur",
		"Sanjeev Auto, Sambhaji Nagar",
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
				<div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300 flex flex-col overflow-hidden group">
					<div class="w-full h-48 relative overflow-hidden bg-slate-950">
						<img src={service.image} alt={service.title} class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
							<div class="w-12 h-12 rounded-xl bg-blue-600/90 backdrop-blur border border-white/10 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/50">
								<span class="{service.icon} text-2xl"></span>
						</div>
					</div>
					<div class="pt-2 pl-8 pr-8 flex flex-col flex-grow">
						<h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
						<p class="text-slate-600 dark:text-slate-400 mb-6 font-medium text-sm leading-relaxed">
							{service.description}
						</p>
						<div>
							<ul class="space-y-3">
								{#each service.points as point}
									<li class="flex text-sm text-slate-700 dark:text-slate-300">
										<span class="i-ph-check-circle-fill text-blue-600 dark:text-blue-500 mt-0.5 shrink-0 text-[18px]"></span>
										<span class="leading-relaxed">{point}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Current Services Section -->
<section class="w-full relative py-32 bg-slate-950 overflow-hidden">
	<div class="absolute inset-0 bg-[url('/images/services_bg.png')] bg-cover bg-center opacity-60"></div>
	<div class="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20"></div>
	<div class="container mx-auto px-8 relative z-10">
		<h2 class="text-3xl md:text-[32px] font-semibold text-white mb-16 tracking-wide uppercase">Our Current Services:</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-7 max-w-5xl pl-4">
			{#each clients as client}
				<div class="flex items-center gap-4 group">
					<span class="w-[6px] h-[6px] rounded-full border-[1.5px] border-white/80 group-hover:bg-white transition-colors shrink-0 shadow-sm"></span>
					<span class="text-xl md:text-[22px] text-white/95 font-medium tracking-wide drop-shadow-md">
						{client}
					</span>
				</div>
			{/each}
		</div>
		
		<div class="mt-24 pl-4">
			<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition-all">
				Start a Project with Us
				<span class="i-ph-arrow-right-bold text-lg"></span>
			</a>
		</div>
	</div>
</section>
