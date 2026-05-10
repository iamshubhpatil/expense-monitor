<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-8">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-lavender-200 dark:bg-lavender-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

    <div class="w-full max-w-md">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <div class="flex items-center justify-center mb-4">
          <div class="w-12 h-12 bg-gradient-to-br from-lavender-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
            🔐
          </div>
        </div>
        <h1 class="text-4xl font-bold bg-gradient-to-r from-lavender-600 to-purple-600 bg-clip-text text-transparent mb-2">Reset Password</h1>
        <p class="text-gray-600 dark:text-gray-400">Enter your email address and we'll send you a link to reset your password</p>
      </div>

      <!-- Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95 border border-lavender-100 dark:border-lavender-900">
        <!-- Success Message -->
        <div v-if="emailSent" class="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <div>
              <p class="font-semibold text-green-700 dark:text-green-400">Email sent!</p>
              <p class="text-green-600 dark:text-green-300 text-sm mt-1">Check your email for password reset instructions.</p>
            </div>
          </div>
        </div>

        <!-- Error Message Display -->
        <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            <div>
              <p class="font-semibold text-red-700 dark:text-red-400">Reset failed</p>
              <p class="text-red-600 dark:text-red-300 text-sm mt-1">{{ errorMessage }}</p>
            </div>
          </div>
        </div>

        <form v-if="!emailSent" @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Email Field -->
          <div class="group">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
              <svg class="w-4 h-4 text-lavender-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email Address
            </label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 dark:focus:ring-lavender-900 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="you@example.com"
              @input="errorMessage = ''"
            />
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Reset Link will be enabled after 10 minutes in case of failure
            </p>
          </div>

          <!-- Reset Password Button -->
          <button
            type="submit"
            :disabled="loading || isRateLimited"
            class="w-full bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg v-if="!loading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            {{
              loading ? 'Sending...' :
              isRateLimited ? `Wait ${formatCountdown(retryCountdown)}` :
              'Send Reset Link'
            }}
          </button>
        </form>

        <!-- Success Actions -->
        <div v-if="emailSent" class="space-y-4">
          <button
            @click="goToLogin"
            class="w-full bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m14-5V7a2 2 0 00-2-2H9.172a2 2 0 00-1.414.586l-4.172 4.172a2 2 0 00-.586 1.414V17a2 2 0 002 2h10a2 2 0 002-2z"/>
            </svg>
            Back to Login
          </button>
        </div>

        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">Remember your password?</span>
          </div>
        </div>

        <!-- Back to Login Link -->
        <router-link
          to="/login"
          class="w-full block text-center px-4 py-3 border-2 border-lavender-200 dark:border-lavender-800 text-lavender-600 dark:text-lavender-400 font-semibold rounded-xl hover:bg-lavender-50 dark:hover:bg-lavender-900/20 transition-all duration-200"
        >
          Back to Sign In
        </router-link>
      </div>

      <!-- Footer -->
      <div class="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const router = useRouter()

const loading = ref(false)
const errorMessage = ref('')
const emailSent = ref(false)
const email = ref('')
const isRateLimited = ref(false)
const retryCountdown = ref(0)
let countdownInterval = null

const handleSubmit = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    const redirectBase = import.meta.env.VITE_APP_URL || window.location.origin
    const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
      redirectTo: `${redirectBase}/reset-password`,
    })

    if (error) {
      throw error
    }

    emailSent.value = true
    isRateLimited.value = false
    if (countdownInterval) {
      clearInterval(countdownInterval)
      countdownInterval = null
    }
  } catch (error) {
    // Handle specific error types
    if (error.message?.includes('rate limit') || error.message?.includes('429') || error.status === 429) {
      errorMessage.value = 'Please try in 60 min'
      isRateLimited.value = true
      startRetryCountdown()
    } else if (error.message?.includes('Invalid email')) {
      errorMessage.value = 'Please enter a valid email address.'
    } else if (error.message?.includes('User not found')) {
      errorMessage.value = 'No account found with this email address.'
    } else {
      errorMessage.value = error.message || 'Failed to send reset email. Please try again.'
    }
  } finally {
    loading.value = false
  }
}

const startRetryCountdown = () => {
  retryCountdown.value = 3600 // 60 minutes in seconds
  countdownInterval = setInterval(() => {
    retryCountdown.value--
    if (retryCountdown.value <= 0) {
      isRateLimited.value = false
      clearInterval(countdownInterval)
      countdownInterval = null
    }
  }, 1000)
}

const formatCountdown = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const goToLogin = () => {
  router.push('/login')
}

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>