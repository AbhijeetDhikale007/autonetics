<script lang="ts">
	let { data } = $props();
	import Heading from "$components/Heading.svelte";
	import { resolve } from "$app/paths";
</script>

<svelte:head>
	<title>Careers & Placements | Autonetics Automation</title>
</svelte:head>

<!-- Hero Section -->
<Heading
	HeadingTitle="Careers & Placements"
	HeadingDescription="Jumpstart your career with 100% placement assistance and rigorous training programs."
/>

<!-- Overview -->
<section
	class="py-20 bg-slate-50 dark:bg-[#060813] transition-colors duration-300 relative z-10 -mt-8"
>
	<div class="container mx-auto px-6 max-w-6xl">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div
				class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg prose prose-lg dark:prose-invert"
			>
				<p>
					<strong class="text-slate-900 dark:text-slate-200"
						>Automation is a growing field</strong
					>
					in today’s world. Many MNCs and mid-level companies are rapidly
					expanding their operations in industrial automation. Our placement
					team aims to place every student who enrolls for our job-oriented
					courses. We stay in regular contact with our alumni and provide
					<strong class="text-blue-600 dark:text-blue-400"
						>100% placement assistance</strong
					> while guiding every candidate through their interviews.
				</p>
				<p>
					We provide placement assistance for <strong
						class="text-slate-900 dark:text-slate-200"
						>Industrial Automation Engineers, Electrical Design
						Engineers, Instrumentation Design Engineers, SCADA
						System Development Engineers, PLC Programming Engineers,
						Embedded/Robotics Design Engineers, and PCB Designers</strong
					>.
				</p>
				<p>
					Autonetics is one of the best Automation training &
					placement institutes in Nashik. Our training and placement
					program attracts multiple automation domain companies. We
					train candidates on technical skills, soft skills, interview
					preparation, communication, and ethical values—drastically
					improving their selection rate and growing them into
					successful professionals.
				</p>
			</div>

			<div class="w-full relative group">
				<div
					class="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-50 dark:opacity-30 group-hover:bg-blue-500/30 transition-colors duration-500"
				></div>
				<img
					src={resolve("/Careers/Career.png")}
					alt="Career Growth"
					class="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10 border border-white/20 dark:border-slate-800"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Placed Candidates Array -->
<section
	class="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300"
>
	<div class="container mx-auto px-6 max-w-6xl">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">
				Our Placed Candidates
			</h2>
			<p class="text-lg text-slate-600 dark:text-slate-400">
				Some of the brilliant engineers successfully placed into top
				automation companies.
			</p>
		</div>

		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
		>
			{#each data.students as student}
				<div
					class="group relative bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
				>
					<div
						class="w-36 h-39 lg:w-42 lg:h-46 rounded-2 overflow-hidden border-[3px] border-white dark:border-slate-700 shadow-md mb-4 bg-slate-200 dark:bg-slate-700 relative z-10 shrink-0"
					>
						<img
							src={student.src}
							alt="Placed Candidate {student.name}"
							class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
							loading="lazy"
						/>
					</div>
					<h3
						class="text-[1.1rem] font-bold text-slate-900 dark:text-white mb-1 relative z-10"
					>
						{student.name}
					</h3>
					<span
						class="text-[10px] font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest relative z-10"
						>Placed</span
					>

					<!-- Hover gradient -->
					<div
						class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-500/5 dark:from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>
