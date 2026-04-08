<script lang="ts">
	let clientsInfo = [
		{ name: "Flair Writing Ltd", src: "Clients/Flair.png" },
		{ name: "Avdhoot Heat Treatment", src: "Clients/Avdhoot.png" },
		{ name: "CEAT", src: "Clients/Ceat.png" },
		{ name: "Essem", src: "Clients/essem.png" },
		{ name: "Hind Rectifiers Ltd", src: "Clients/Hind-rectifiers.png" },
		{ name: "KOSO India", src: "Clients/Koso.png" },
		{ name: "Ruby Mica", src: "Clients/Ruby.png" },
		{ name: "Sanjeev Auto", src: "Clients/Sanjeev.png" },
		{ name: "Suzlon", src: "Clients/Suzlon-Energy-Limited.png" },
		{ name: "Western Drugs", src: "Clients/Western-drugs.png" }
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
						class="w-full h-full object-contain"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
