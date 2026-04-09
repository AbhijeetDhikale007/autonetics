<script lang="ts">
	import Ico from '$components/Ico.svelte';
	import Heading from '$components/Heading.svelte';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		alert('Enquiry submitted successfully!');
		name = '';
		email = '';
		phone = '';
		message = '';
	}
</script>

<svelte:head>
	<title>Contact Us | Autonetics Automation</title>
</svelte:head>

<!-- Header Banner -->
<section class="w-full bg-slate-900 dark:bg-slate-950 py-24 relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 dark:from-blue-900/10 to-transparent"></div>
	<div class="container mx-auto px-6 relative z-10 text-center">
		<Heading HeadingTitle='Contact Us' />
		<p class="text-lg text-blue-100 max-w-2xl mx-auto opacity-90 leading-relaxed">
			Looking for automation solutions, SCADA training, or college level programs? Our team is ready to assist you.
		</p>
	</div>
</section>

<section class="py-20 bg-slate-50 dark:bg-[#060813] transition-colors duration-300 relative z-10">
	<div class="container mx-auto px-6">
		<div class="grid lg:grid-cols-2 gap-16 xl:gap-24">
			
			<!-- Left Column: Contact & Location Info -->
			<div class="space-y-12">
				<div>
					<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8">Get in Touch</h2>
					<div class="grid sm:grid-cols-2 gap-8">
						<!-- Phone Details -->
						<div class="group flex gap-4">
							<div class="shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-transform group-hover:scale-110">
								<Ico name="Call" class="w-6 h-6" />
							</div>
							<div>
								<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
								<div class="text-slate-600 dark:text-slate-400 space-y-1 text-sm font-medium">
									<p>+91 9403040430 (Admin)</p>
									<p>+91 7721988882</p>
									<p>+91 7721988881</p>
								</div>
							</div>
						</div>
						
						<!-- Email Details -->
						<div class="group flex gap-4">
							<div class="shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-transform group-hover:scale-110">
								<Ico name="Mail" class="w-6 h-6" />
							</div>
							<div>
								<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Email ID</h3>
								<a href="mailto:enquiry@autoneticstraining.com" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium block break-all">
									enquiry@autoneticstraining.com
								</a>
							</div>
						</div>
					</div>
				</div>

				<hr class="border-slate-200 dark:border-slate-800" />

				<!-- Address Locations -->
				<div>
					<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8">Our Locations</h2>
					<div class="space-y-8">
						<!-- Address 1 -->
						<div class="flex gap-4 group">
							<div class="shrink-0 w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110">
								<Ico name="Address" class="w-6 h-6" />
							</div>
							<div>
								<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Autonetics Automation, Nashik</h3>
								<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
									Office no T4, 3rd floor, SK open Mall, Kulkarni circle, College Road, Nashik, Maharashtra, India 422005
								</p>
							</div>
						</div>
						
						<!-- Address 2 (Incubation) -->
						<div class="flex gap-4 group">
							<div class="shrink-0 w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center transition-transform group-hover:scale-110">
								<Ico name="Address" class="w-6 h-6" />
							</div>
							<div>
								<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
									Autonetics Automation and Incubation Center
									<span class="px-2.5 py-0.5 rounded-md text-xs font-bold leading-tight bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">Temp Closed</span>
								</h3>
								<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
									Pune Vidyarthi Griha's College of Engineering, Lab No.105, Behind Reliance Petrol Pump, Dindori Road, Mhasrul, Nashik, Maharashtra 422004
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column: Enquiry Form -->
			<div class="lg:pl-6">
				<div class="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 relative z-20">
					<h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8">Enquire Here</h2>
					
					<form onsubmit={handleSubmit} class="space-y-6">
						<div>
							<label for="name" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name <span class="text-red-500 dark:text-red-400">*</span></label>
							<input 
								type="text" 
								id="name" 
								required 
								bind:value={name}
								class="w-[92%] px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
								placeholder="Your Name"
							/>
						</div>
						
						<div class="grid sm:grid-cols-2 gap-6">
							<div>
								<label for="email" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Id <span class="text-red-500 dark:text-red-400">*</span></label>
								<input 
									type="email" 
									id="email" 
									required 
									bind:value={email}
									class="w-[83%] px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
									placeholder="your@email.com"
								/>
							</div>
							<div>
								<label for="phone" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Contact No <span class="text-red-500 dark:text-red-400">*</span></label>
								<input 
									type="tel" 
									id="phone" 
									required 
									bind:value={phone}
									class="w-[83%] px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
									placeholder="+91 0000000000"
								/>
							</div>
						</div>

						<div>
							<label for="message" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
							<textarea 
								id="message" 
								rows="5" 
								bind:value={message}
								class="w-[92%] px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none placeholder:text-slate-400"
								placeholder="Enter your message here..."
							></textarea>
						</div>

						<button 
							type="submit" 
							class="w-full py-4 mt-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900 flex justify-center items-center gap-2"
						>
							Submit Enquiry
							<span class="i-ph-paper-plane-right-fill"></span>
						</button>
					</form>
				</div>
			</div>
			
		</div>
	</div>
</section>

<!-- Google Map Embed -->
<section class="w-full h-[500px] bg-slate-200 dark:bg-slate-800 relative grayscale hover:grayscale-0 transition-all duration-700 z-10">
	<iframe 
		title="Autonetics Training Center Nashik Location"
		class="w-full h-full border-0" 
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.1309281279555!2d73.7634748!3d20.0056414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb9b9727f47d%3A0x89cc70d26854f63!2sAutonetics%20Automation!5e1!3m2!1sen!2sin!4v1775641293323!5m2!1sen!2sin" 
		allowfullscreen={false} 
		loading="lazy" 
		referrerpolicy="no-referrer-when-downgrade">
	</iframe>
</section>
