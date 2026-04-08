<script lang="ts">
	let clientsInfo = [
		{ name: "Flair Writing Ltd", src: "https://www.autoneticstraining.com/images/clients/75-FLAIR.png" },
		{ name: "Avdhoot Heat Treatment", src: "https://www.autoneticstraining.com/images/clients/Avdhoot-uai-258x116.png" },
		{ name: "CEAT", src: "https://www.autoneticstraining.com/images/clients/ceat.png" },
		{ name: "Essem", src: "https://www.autoneticstraining.com/images/clients/essem.png" },
		{ name: "Hind Rectifiers Ltd", src: "https://www.autoneticstraining.com/images/clients/hind-rectifiers-ltd.png" },
		{ name: "KOSO India", src: "https://www.autoneticstraining.com/images/clients/koso.png" },
		{ name: "Ruby Mica", src: "https://www.autoneticstraining.com/images/clients/ruby.png" },
		{ name: "Sanjeev Auto", src: "https://www.autoneticstraining.com/images/clients/Sanjeev-Logo.png" },
		{ name: "Suzlon", src: "https://www.autoneticstraining.com/images/clients/Suzlon-Energy-Limited.png" },
		{ name: "Western Drugs", src: "https://www.autoneticstraining.com/images/clients/westurn-drugs_logo.png" }
	];
</script>

<section class="py-16 bg-[#0f8b78] dark:bg-[#075347] relative z-10 transition-colors duration-300">
	<div class="container mx-auto px-6 max-w-7xl">
		<h2 class="text-[1.7rem] font-semibold text-white mb-10 tracking-wide drop-shadow-sm ml-2">Our Clients</h2>
		
		<!-- Grid of 5 columns matching the user's reference -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
			{#each clientsInfo as client}
				<div class="bg-white hover:bg-slate-50 transition-colors group p-5 shadow-md flex items-center justify-center h-32 cursor-default">
					<img 
						src={client.src} 
						alt={client.name} 
						loading="lazy"
						class="w-full h-full object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
