<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative z-20">
  <div class="container mx-auto px-6 pt-16 pb-8">
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-12 mb-16">
      
      <!-- Brand & Description -->
      <div class="space-y-6">
        <a href="/" class="flex items-center gap-2 group">
          <img src="/logo.png" alt="Autonetics Automation" class="h-10" />
        </a>
        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
          Autonetics Training Center provides PLC training, SCADA training, Automation training, and Electrical design courses in Nashik. We specialize in cutting-edge robotics and advanced system integrations.
        </p>
        
        <!-- Social Icons -->
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="https://www.linkedin.com/in/autonetics-training-center-887268141/" target="_blank" aria-label="LinkedIn" class="grid place-items-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all">
            <span class="i-ph-linkedin-logo-fill text-xl"></span>
          </a>
          <a href="https://x.com/Autonetics123" target="_blank" aria-label="X" class="grid place-items-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all">
            <span class="i-simple-icons-x text-[15px]"></span>
          </a>
          <a href="https://www.youtube.com/channel/UCOfwRpXaZ1-o6E3qVZjQqLA?view_as=subscriber" target="_blank" aria-label="YouTube" class="grid place-items-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all">
            <span class="i-ph-youtube-logo-fill text-xl"></span>
          </a>
          <a href="https://www.facebook.com/autoneticstrainingcenter/" target="_blank" aria-label="Facebook" class="grid place-items-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all">
            <span class="i-ph-facebook-logo-fill text-xl"></span>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-slate-900 dark:text-white font-semibold mb-6 text-lg tracking-tight">Quick Links</h3>
        <ul class="space-y-4">
          <li><a href="/about" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">About Us</a></li>
          <li><a href="/services" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">Our Services</a></li>
          <li><a href="/training" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">Training Programs</a></li>
          <li><a href="/gallery" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">Gallery</a></li>
          <li><a href="/contact" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">Contact Us</a></li>
        </ul>
      </div>

      <!-- Legal & Policies -->
      <div>
        <h3 class="text-slate-900 dark:text-white font-semibold mb-6 text-lg tracking-tight">Legal & Terms</h3>
        <ul class="space-y-4">
          <li><a href="/terms" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">Copyright & Terms</a></li>
          <li><a href="/privacy" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">Privacy Policy</a></li>
          <li><a href="/sitemap.html" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">Sitemap</a></li>
        </ul>
      </div>
      
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-sm text-slate-500 dark:text-slate-400">
        © 2017-{currentYear} AUTONETICS. All rights reserved.
      </p>
      <p class="text-sm text-slate-500 dark:text-slate-400">
        Designed by <span class="text-blue-600 dark:text-blue-400 font-medium">Autonetics, Nashik</span>.
      </p>
    </div>
  </div>
</footer>
