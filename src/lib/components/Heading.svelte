<script lang="ts">
	let { HeadingTitle, HeadingDescription }: { HeadingTitle: string, HeadingDescription: string } = $props();
</script>

<section class="w-full bg-slate-900 dark:bg-slate-950 py-24 relative overflow-hidden">
	<div class="absolute inset-0 bg-[url('/hero_background.png')] bg-cover bg-center bg-fixed opacity-30"></div>
	<div class="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-slate-950/95"></div>
	<div class="container mx-auto px-6 relative z-10 text-center">
		<h1 class="font-Arsenal text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">{HeadingTitle}</h1>
		<p class="text-lg text-blue-100 max-w-2xl mx-auto opacity-90 leading-relaxed">
			{HeadingDescription}
		</p>
	</div>
</section>