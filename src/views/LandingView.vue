<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Navigation Bar -->
    <nav class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold bg-gradient-to-r from-lavender-600 to-purple-600 bg-clip-text text-transparent">
              💰 ExpenseTracker
            </span>
          </div>
          <div class="flex items-center gap-6">
            <a href="#features" class="hover:text-lavender-600 transition">Features</a>
            <a href="#videos" class="hover:text-lavender-600 transition">Videos</a>
            <a href="#contact" class="hover:text-lavender-600 transition">Contact</a>
            <router-link to="/login" class="bg-lavender-600 text-white px-6 py-2 rounded-lg hover:bg-lavender-700 transition">
              Login
            </router-link>
            <router-link to="/signup" class="border-2 border-lavender-600 text-lavender-600 px-6 py-2 rounded-lg hover:bg-lavender-50 dark:hover:bg-gray-800 transition">
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-20 pb-32 px-4">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"></div>
      
      <div class="relative max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-8">
            <div class="space-y-4">
              <h1 class="text-5xl md:text-6xl font-bold leading-tight">
                Take Control of Your <span class="bg-gradient-to-r from-lavender-600 to-purple-600 bg-clip-text text-transparent">Finances</span>
              </h1>
              <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Smart expense tracking, real-time insights, and financial freedom. Manage your money effortlessly with our intuitive platform.
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex gap-4 pt-6">
              <router-link to="/signup" class="bg-gradient-to-r from-lavender-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition transform">
                Get Started Free
              </router-link>
              <a href="#features" class="border-2 border-lavender-600 text-lavender-600 px-8 py-4 rounded-lg font-semibold hover:bg-lavender-50 dark:hover:bg-gray-800 transition">
                Learn More
              </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 pt-12">
              <div>
                <p class="text-3xl font-bold text-lavender-600">100+</p>
                <p class="text-gray-600 dark:text-gray-400">Active Users</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-lavender-600">$100K+</p>
                <p class="text-gray-600 dark:text-gray-400">Tracked</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-lavender-600">99.9%</p>
                <p class="text-gray-600 dark:text-gray-400">Uptime</p>
              </div>
            </div>
          </div>

          <!-- Right Visual - Carousel with Page Flip -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-lavender-400 to-purple-400 rounded-2xl blur-3xl opacity-30"></div>
            <div class="relative bg-gradient-to-br from-lavender-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
              <!-- Carousel Container - Auto-rotating with Page Flip -->
              <div class="relative w-full h-full flex flex-col items-center justify-center p-8">
                <transition name="page-flip" mode="out-in">
                  <div :key="currentImageIndex" class="flex items-center justify-center w-full">
                    <div class="relative bg-lavender-100/80 dark:bg-gray-700/80 rounded-3xl p-4 shadow-lg">
                      <img :src="carouselImages[currentImageIndex]" :alt="`Carousel image ${currentImageIndex + 1}`" class="mx-auto w-72 h-auto rounded-2xl" />
                    </div>
                  </div>
                </transition>
                <div class="mt-6 text-center">
                  <p class="text-gray-600 dark:text-gray-300 font-semibold">Smart Expense Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Powerful Features</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Everything you need to manage your finances</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-lg transition">
            <div class="w-12 h-12 bg-lavender-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Smart Categorization</h3>
            <p class="text-gray-600 dark:text-gray-400">Automatically categorize expenses or create custom categories for better organization.</p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-lg transition">
            <div class="w-12 h-12 bg-lavender-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Real-time Analytics</h3>
            <p class="text-gray-600 dark:text-gray-400">Get instant insights with beautiful charts and detailed reports of your spending patterns.</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-lg transition">
            <div class="w-12 h-12 bg-lavender-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Budget Tracking</h3>
            <p class="text-gray-600 dark:text-gray-400">Set budget limits and track your spending against your goals in real-time.</p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-lg transition">
            <div class="w-12 h-12 bg-lavender-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Easy Import</h3>
            <p class="text-gray-600 dark:text-gray-400">Import transactions from CSV files or connect your bank account directly.</p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-lg transition">
            <div class="w-12 h-12 bg-lavender-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Quick Transfers</h3>
            <p class="text-gray-600 dark:text-gray-400">Transfer money between accounts easily and keep track of all movements.</p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-lg transition">
            <div class="w-12 h-12 bg-lavender-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Secure & Private</h3>
            <p class="text-gray-600 dark:text-gray-400">Your data is encrypted and secured with bank-level security standards.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Videos Section -->
    <section id="videos" class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Watch How It Works</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">See our features in action</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Video 1 - Login and Configure Settings and Profile -->
          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div class="relative w-full h-64 bg-black">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/tOXFxtl0P7I"
                title="Login and Configure Settings and Profile in app"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold">Login and Configure Settings and Profile</h3>
              <p class="text-gray-600 dark:text-gray-400 mt-2">Learn how to log in, configure your settings, and set up your profile in the app.</p>
            </div>
          </div>

          <!-- Video 2 - How to add Income, Expenses and Transfer transactions -->
          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div class="relative w-full h-64 bg-black">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/l7KipkaRHz8"
                title="How to add Income, Expenses and Transfer transactions"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold">How to add Income, Expenses and Transfer transactions</h3>
              <p class="text-gray-600 dark:text-gray-400 mt-2">Step-by-step guide on adding income, tracking expenses, and managing transfer transactions.</p>
            </div>
          </div>

          <!-- Video 3 - Budget Feature -->
          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div class="relative w-full h-64 bg-black">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/QL9-t6V_GbM"
                title="Budget Feature"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold">Budget Feature</h3>
              <p class="text-gray-600 dark:text-gray-400 mt-2">Overview of setting and managing budgets within the app.</p>
            </div>
          </div>

          <!-- Video 4 - Reports and Analytics (placeholder) -->
          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div class="relative w-full h-64 bg-black">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/9bZkp7q19f0"
                title="Reports and Analytics"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold">Reports and Analytics</h3>
              <p class="text-gray-600 dark:text-gray-400 mt-2">Explore reports and analytics — placeholder video until you upload the final one.</p>
            </div>
          </div>
        </div>

        <!-- Documentation Section (moved here) -->
        <div class="mt-20">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold mb-4">Documentation & Resources</h3>
            <p class="text-gray-600 dark:text-gray-400">Download guides and learn at your own pace</p>
          </div>

          <div class="grid md:grid-cols-4 gap-6">
            <!-- User Guide -->
            <a href="/docs/user-guide.pdf" download class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div class="text-4xl mb-3">📖</div>
              <h4 class="font-bold mb-2">User Guide</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Complete guide to using ExpenseTracker</p>
              <span class="text-lavender-600 font-semibold">Download PDF</span>
            </a>

            <!-- Features Overview -->
            <a href="/docs/features.pdf" download class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div class="text-4xl mb-3">✨</div>
              <h4 class="font-bold mb-2">Features</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Explore all available features</p>
              <span class="text-lavender-600 font-semibold">Download PDF</span>
            </a>

            <!-- FAQ -->
            <a href="/docs/faq.pdf" download class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div class="text-4xl mb-3">❓</div>
              <h4 class="font-bold mb-2">FAQ</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Frequently asked questions</p>
              <span class="text-lavender-600 font-semibold">Download PDF</span>
            </a>

            <!-- API Docs -->
            <a href="/docs/api.pdf" download class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div class="text-4xl mb-3">⚙️</div>
              <h4 class="font-bold mb-2">API Docs</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">For developers integrating with our API</p>
              <span class="text-lavender-600 font-semibold">Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 bg-gradient-to-r from-lavender-600 to-purple-600">
      <div class="max-w-4xl mx-auto">
        <div class="text-center text-white mb-12">
          <h2 class="text-4xl font-bold mb-4">Get in Touch</h2>
          <p class="text-xl opacity-90">Have questions? We'd love to hear from you.</p>
        </div>

        <form class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Full Name</label>
              <input type="text" placeholder="Your name" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-600 dark:bg-gray-700 dark:text-white">
            </div>
            <div>
              <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
              <input type="email" placeholder="your@email.com" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-600 dark:bg-gray-700 dark:text-white">
            </div>
          </div>

          <div>
            <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Subject</label>
            <input type="text" placeholder="How can we help?" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-600 dark:bg-gray-700 dark:text-white">
          </div>

          <div>
            <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
            <textarea placeholder="Your message here..." rows="5" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-600 dark:bg-gray-700 dark:text-white resize-none"></textarea>
          </div>

          <button type="submit" class="w-full bg-gradient-to-r from-lavender-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition">
            Send Message
          </button>
        </form>

        <!-- Contact Info -->
        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <div class="text-center text-white">
            <svg class="w-8 h-8 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <p class="font-semibold">Email</p>
            <p class="opacity-90">expensetrack1@gmail.com</p>
          </div>

          <div class="text-center text-white">
            <svg class="w-8 h-8 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <p class="font-semibold">Phone</p>
            <p class="opacity-90">+91 9834690475</p>
          </div>

          <div class="text-center text-white">
            <svg class="w-8 h-8 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <p class="font-semibold">Address</p>
            <p class="opacity-90">Maharashtra, India</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Support & FAQ</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Find answers to common questions</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- FAQ Item 1 -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3">How secure is my data?</h3>
            <p class="text-gray-600 dark:text-gray-300">We use bank-level encryption (AES-256) to protect all your financial data. All communications are over HTTPS, and we comply with international security standards.</p>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3">Can I import my existing data?</h3>
            <p class="text-gray-600 dark:text-gray-300">Yes! You can import transactions from CSV files directly. We also support integration with popular banking apps and platforms.</p>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3">What's the pricing?</h3>
            <p class="text-gray-600 dark:text-gray-300">We offer a free basic plan for personal use, with premium features starting at just $9.99/month. No credit card required to get started.</p>
          </div>

          <!-- FAQ Item 4 -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3">Is there mobile support?</h3>
            <p class="text-gray-600 dark:text-gray-300">Our web app is fully responsive and works great on mobile devices. Native iOS and Android apps are coming soon!</p>
          </div>

          <!-- FAQ Item 5 -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3">How can I export my data?</h3>
            <p class="text-gray-600 dark:text-gray-300">You can export all your data in CSV, PDF, or Excel format anytime. Your data is always yours to keep and download.</p>
          </div>

          <!-- FAQ Item 6 -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3">Do you offer customer support?</h3>
            <p class="text-gray-600 dark:text-gray-300">Yes! We offer 24/7 email support and live chat. Premium users also get priority support and phone assistance.</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-600 dark:text-gray-400 mb-6">Still have questions?</p>
          <a href="mailto:expensetrack1@gmail.com" class="inline-block bg-lavender-600 text-white px-8 py-3 rounded-lg hover:bg-lavender-700 transition font-semibold">
            Contact Support
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 class="text-lg font-bold mb-4">ExpenseTracker</h4>
            <p class="text-gray-400">Smart expense tracking for a better financial future.</p>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">Product</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#features" class="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" class="hover:text-white transition">Pricing</a></li>
              <li><a href="#" class="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">Company</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">About Us</a></li>
              <li><a href="#" class="hover:text-white transition">Career</a></li>
              <li><a href="#contact" class="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">Legal</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" class="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400">&copy; 2024 ExpenseTracker. All rights reserved.</p>
            <div class="flex gap-6 mt-4 md:mt-0">
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.05-8.824 0-9.736h3.554v1.375c.429-.661 1.196-1.6 2.905-1.6 2.122 0 3.716 1.386 3.716 4.365v5.596zM5.337 9.433c-1.144 0-1.915-.755-1.915-1.699 0-.944.77-1.7 1.916-1.7 1.14 0 1.913.756 1.913 1.7 0 .944-.773 1.699-1.913 1.699zm1.581 11.019H3.757V9.716h3.161v10.736zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import chatgpt1 from '../assets/images/chatgpt-1.png'
import chatgpt2 from '../assets/images/chatgpt-2.png'
import chatgpt3 from '../assets/images/chatgpt-3.png'
import chatgpt4 from '../assets/images/chatgpt-4.png'
import chatgpt5 from '../assets/images/chatgpt-5.png'

const carouselImages = [
  chatgpt1,
  chatgpt2,
  chatgpt3,
  chatgpt4,
  chatgpt5,
]

const currentImageIndex = ref(0)
let autoRotateInterval

const startAutoRotate = () => {
  autoRotateInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % carouselImages.length
  }, 3000)
}

onMounted(() => {
  startAutoRotate()
})

onUnmounted(() => {
  clearInterval(autoRotateInterval)
})

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.page-flip-enter-active {
  animation: pageFlipEnter 0.6s ease-in-out both;
}

.page-flip-leave-active {
  animation: pageFlipExit 0.6s ease-in-out both;
}

@keyframes pageFlipEnter {
  0% {
    opacity: 0;
    transform: rotateY(-90deg) perspective(1200px);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) perspective(1200px);
  }
}

@keyframes pageFlipExit {
  0% {
    opacity: 1;
    transform: rotateY(0deg) perspective(1200px);
  }
  100% {
    opacity: 0;
    transform: rotateY(90deg) perspective(1200px);
  }
}
</style>
