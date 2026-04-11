<script lang="ts">
	import Heading from "$components/Heading.svelte";
	import { resolve } from "$app/paths";

	const mainLinks = [
		{ name: "Home", href: resolve("/") },
		{ name: "About Us", href: resolve("/about") },
		{ name: "Our Services", href: resolve("/services") },
		{ name: "Training Programs", href: resolve("/training") },
		{ name: "Gallery", href: resolve("/gallery") },
		{ name: "Careers & Placements", href: resolve("/careers") },
		{ name: "Contact Us", href: resolve("/contact") },
	];

	const industrialCourses = [
		{
			name: "PG Diploma in Industrial Automation",
			href: resolve(
				"/training/autonetics-certified-pg-diploma-in-industrial-automation",
			),
		},
		{
			name: "Automation Engineering",
			href: resolve(
				"/training/autonetics-certified-automation-engineering",
			),
		},
		{
			name: "PLC Programmer",
			href: resolve("/training/autonetics-certified-plc-programmer"),
		},
		{
			name: "Electrical System",
			href: resolve("/training/autonetics-certified-electrical-system"),
		},
		{
			name: "Mechatronics System",
			href: resolve("/training/autonetics-certified-mechatronics-system"),
		},
		{
			name: "SCADA Developer",
			href: resolve("/training/autonetics-certified-scada-developer"),
		},
		{
			name: "Embedded System Designer",
			href: resolve(
				"/training/autonetics-certified-embedded-system-designer",
			),
		},
	];

	const embeddedCourses = [
		{
			name: "Advanced Microcontroller",
			href: resolve("/training/advanced-microcontroller"),
		},
		{
			name: "Embedded Professional",
			href: resolve("/training/embedded-professional"),
		},
		{ name: "Languages", href: resolve("/training/languages") },
		{
			name: "Microcontroller",
			href: resolve("/training/microcontroller"),
		},
		{ name: "PCB Designing", href: resolve("/training/pcb-designing") },
	];

	const legalLinks = [
		{ name: "Copyright & Terms", href: resolve("/terms") },
		{ name: "Privacy Policy", href: resolve("/privacy") },
	];
</script>

<svelte:head>
	<title>Sitemap | Autonetics Automation</title>
</svelte:head>

<Heading
	HeadingTitle="Sitemap"
	HeadingDescription="A comprehensive directory of all pages and training programs available at Autonetics Automation."
/>

<section
	class="py-20 bg-slate-50 dark:bg-[#060813] transition-colors duration-300 relative z-10 -mt-8"
>
	<div class="container mx-auto px-6 max-w-6xl">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
			<!-- Main Navigation -->
			<div class="flex flex-col gap-1">
				<h2
					class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"
				>
					<span class="i-ph-navigation-arrow-fill text-blue-600"
					></span>
					Main Pages
				</h2>
				<ul
					class="border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-6"
				>
					{#each mainLinks as link}
						<li>
							<a
								href={link.href}
								class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Industrial Training -->
			<div class="flex flex-col gap-2">
				<h2
					class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"
				>
					<span class="i-ph-factory-fill text-blue-600"></span>
					Industrial Automation
				</h2>
				<ul
					class="border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-6"
				>
					{#each industrialCourses as link}
						<li>
							<a
								href={link.href}
								class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Embedded & Legal -->
			<div class="flex flex-col gap-2">
				<!-- Embedded -->
				<div class="flex flex-col gap-1">
					<h2
						class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"
					>
						<span class="i-ph-cpu-fill text-blue-600"></span>
						Embedded Systems
					</h2>
					<ul
						class="border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-6"
					>
						{#each embeddedCourses as link}
							<li>
								<a
									href={link.href}
									class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Legal -->
				<div class="flex flex-col gap-1">
					<h2
						class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"
					>
						<span class="i-ph-shield-check-fill text-blue-600"
						></span>
						Legal & Information
					</h2>
					<ul
						class="border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-6"
					>
						{#each legalLinks as link}
							<li>
								<a
									href={link.href}
									class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
