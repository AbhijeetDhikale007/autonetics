<script lang="ts">
	let { data } = $props();
	const { course } = data;
</script>

<svelte:head>
	<title>{course.title} | Autonetics Training</title>
	<meta name="description" content="Course details and syllabus for {course.title} at Autonetics Training Center, Nashik." />
</svelte:head>

<!-- Hero Section -->
<section class="w-full bg-slate-900 dark:bg-slate-950 py-16 md:py-24 relative overflow-hidden">
	<div class="absolute inset-0 bg-[url('/hero_background.png')] bg-cover bg-center opacity-20"></div>
	<div class="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-slate-950/95"></div>
	<div class="container mx-auto px-6 relative z-10 max-w-6xl">
		<div class="flex flex-col md:flex-row items-center gap-6 md:gap-10">
			<div class="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 shadow-2xl">
				<span class="{course.icon} text-4xl md:text-5xl text-white"></span>
			</div>
			<div>
				<div class="flex flex-wrap items-center gap-3 mb-4">
					<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-widest uppercase">
						<span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
						Autonetics Certified
					</span>
					{#if course.duration}
						<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
							<span class="i-ph-clock-fill text-sm"></span>
							Duration: {course.duration}
						</span>
					{/if}
				</div>
				<h1 class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">{course.title}</h1>
				{#if course.tags && course.tags.length}
					<div class="flex flex-wrap gap-2 mt-5">
						{#each course.tags as tag}
							<span class="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-blue-100 text-xs font-medium">{tag}</span>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- Course Image + Content -->
<section class="py-12 bg-slate-50 dark:bg-[#060813] transition-colors duration-300">
	<div class="container mx-auto px-6 max-w-6xl">

		{#if course.sections}
			<!-- Course Image -->
			{#if course.image}
				<div class="w-full h-72 md:h-[420px] rounded-3xl overflow-hidden mb-14 relative shadow-2xl group">
					<img src={course.image} alt={course.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="eager" />
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
				</div>
			{/if}

			<!-- Syllabus Heading -->
			<div class="mb-10">
				<h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-3">
					<span class="i-ph-list-bullets-fill text-blue-500 text-3xl"></span>
					Syllabus
				</h2>
				<div class="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3"></div>
			</div>

			<!-- Sections List -->
			<div class="flex flex-col gap-3">
				{#each course.sections as section}
					<div class="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
						<!-- Section Title -->
						<div class="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-blue-600/10 to-cyan-500/5 dark:from-blue-900/30 dark:to-cyan-900/10 border-b border-slate-200 dark:border-slate-800">
							<span class="i-ph-book-open-fill text-blue-500 dark:text-blue-400 text-xl shrink-0"></span>
							<h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">{section.title}</h3>
						</div>

						<!-- Simple Items List -->
						{#if section.items}
							<ul class="px-6 py-5">
								{#each section.items as item}
									<li class="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
										<span class="i-ph-caret-right-fill text-blue-400 mt-0.5 shrink-0"></span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						{/if}

						<!-- Subsections -->
						{#if section.subsections}
							<div class="px-6 py-5 space-y-6">
								{#each section.subsections as sub}
									<div>
										<h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-3 flex items-center gap-2">
											<span class="i-ph-diamond-fill text-blue-400 text-xs"></span>
											{sub.subtitle}
										</h4>
										<ul class="space-y-2 pl-4 border-l-2 border-blue-200 dark:border-blue-900">
											{#each sub.items as item}
												<li class="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
													<span class="i-ph-caret-right-fill text-blue-400 mt-0.5 shrink-0"></span>
													<span>{item}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Enroll CTA -->
			<div class="mt-16 text-center">
				<p class="text-slate-500 dark:text-slate-400 mb-6 text-lg">Ready to advance your career?</p>
				<a href="/contact" class="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5">
					Enroll in this Course
					<span class="i-ph-arrow-right-bold"></span>
				</a>
			</div>

		{:else if course.modules}
			<!-- Course Image -->
			{#if course.image}
				<div class="w-full h-72 md:h-[420px] rounded-3xl overflow-hidden mb-14 relative shadow-2xl group">
					<img src={course.image} alt={course.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="eager" />
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
				</div>
			{/if}

			<!-- Syllabus Heading -->
			<div class="mb-10">
				<h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-3">
					<span class="i-ph-list-bullets-fill text-indigo-500 text-3xl"></span>
					Syllabus
				</h2>
				<div class="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full mt-3"></div>
			</div>

			<!-- Modules as Tables -->
			<div class="flex flex-col gap-12">
				{#each course.modules as mod}
					<div class="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
						<!-- Module Header -->
						<div class="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600/10 to-purple-500/5 dark:from-indigo-900/30 dark:to-purple-900/10 border-b border-slate-200 dark:border-slate-800">
							<div class="flex items-center gap-3">
								<span class="i-ph-book-open-fill text-indigo-500 dark:text-indigo-400 text-xl shrink-0"></span>
								<h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white">{mod.title}</h3>
							</div>
							{#if mod.hours}
								<span class="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-200 dark:border-indigo-800">{mod.hours}</span>
							{/if}
						</div>
						<!-- Table -->
						<div class="overflow-x-auto">
							<table class="w-full text-sm">
								<thead>
									<tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
										<th class="px-5 py-3 text-left font-semibold text-slate-500 dark:text-slate-400 w-16">Sr. No.</th>
										<th class="px-5 py-3 text-left font-semibold text-slate-500 dark:text-slate-400">Title</th>
									</tr>
								</thead>
								<tbody>
									{#each mod.rows as row, i}
										<tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors {i % 2 === 0 ? '' : 'bg-slate-50/50 dark:bg-slate-800/20'}">
											<td class="px-5 py-3 text-slate-500 dark:text-slate-500 font-mono text-xs">{i + 1}</td>
											<td class="px-5 py-3 text-slate-700 dark:text-slate-300">{row}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				{/each}
			</div>

			<!-- Enroll CTA -->
			<div class="mt-16 text-center">
				<p class="text-slate-500 dark:text-slate-400 mb-6 text-lg">Ready to advance your career?</p>
				<a href="/contact" class="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5">
					Enroll in this Course
					<span class="i-ph-arrow-right-bold"></span>
				</a>
			</div>

		{:else}
			<!-- Placeholder for courses with no content yet -->
			<div class="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-xl">
				<div class="w-24 h-24 mx-auto rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-8">
					<span class="{course.icon} text-4xl"></span>
				</div>
				<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Curriculum details coming soon</h2>
				<p class="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 text-lg">
					We are updating the syllabus for <strong class="text-slate-800 dark:text-white">{course.title}</strong>. Contact us to get the full curriculum details.
				</p>
				<div class="flex flex-col sm:flex-row justify-center gap-4">
					<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5">
						Request Course Details
						<span class="i-ph-paper-plane-tilt-fill"></span>
					</a>
					<a href="/training" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
						Back to Training
					</a>
				</div>
			</div>
		{/if}

	</div>
</section>
