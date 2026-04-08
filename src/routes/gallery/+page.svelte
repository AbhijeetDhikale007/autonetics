<script lang="ts">
	let { data } = $props();
	
	let activeTab = $state('college');
	let currentImages = $derived(activeTab === 'college' ? data.gallery.college : data.gallery.inhouse);
</script>

<svelte:head>
	<title>Gallery | Autonetics Automation</title>
</svelte:head>

<!-- Hero Section -->
<section class="w-full bg-slate-900 dark:bg-slate-950 py-24 relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 dark:from-blue-900/10 to-transparent"></div>
	<div class="container mx-auto px-6 relative z-10 text-center">
		<h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Gallery</h1>
		<p class="text-lg text-blue-100 max-w-2xl mx-auto opacity-90 leading-relaxed">
			Explore our moments of success, hands-on training sessions, and leading automation deployments.
		</p>
	</div>
</section>

<!-- Gallery Content -->
<section class="py-20 bg-slate-50 dark:bg-[#060813] transition-colors duration-300 min-h-[50vh]">
	<div class="container mx-auto px-6">
		
		<!-- Tabs -->
		<div class="flex justify-center mb-12">
			<div class="inline-flex bg-white dark:bg-slate-900 rounded-full p-1.5 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
				<!-- Active Indicator (css hack for smooth tab) -->
				<button 
					onclick={() => activeTab = 'college'}
					class="px-8 py-3 rounded-full text-sm font-bold transition-all relative z-10 {activeTab === 'college' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
				>
					College Training
				</button>
				<button 
					onclick={() => activeTab = 'inhouse'}
					class="px-8 py-3 rounded-full text-sm font-bold transition-all relative z-10 {activeTab === 'inhouse' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
				>
					Inhouse Training
				</button>
			</div>
		</div>

		<!-- Grid -->
		{#if currentImages.length > 0}
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{#each currentImages as imgPath, i}
					<div class="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
						<img 
							src={imgPath} 
							alt="Gallery upload {i + 1}"
							loading="lazy" 
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<!-- Hover overlay -->
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="text-center py-24">
				<div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
					<span class="i-ph-image-broken text-2xl"></span>
				</div>
				<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">No Images Found</h3>
				<p class="text-slate-500 dark:text-slate-400">Add images to the <code class="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">static/Gallery/{activeTab === 'college' ? 'College' : 'Inhouse'}</code> directory to see them here.</p>
			</div>
		{/if}

	</div>
</section>
