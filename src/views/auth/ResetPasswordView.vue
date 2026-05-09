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
            🔑
          </div>
        </div>
        <h1 class="text-4xl font-bold bg-gradient-to-r from-lavender-600 to-purple-600 bg-clip-text text-transparent mb-2">Set New Password</h1>
        <p class="text-gray-600 dark:text-gray-400">Enter your new password below</p>
      </div>

      <!-- Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95 border border-lavender-100 dark:border-lavender-900">
        <!-- Success Message -->
        <div v-if="passwordReset" class="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <div>
              <p class="font-semibold text-green-700 dark:text-green-400">Password updated!</p>
              <p class="text-green-600 dark:text-green-300 text-sm mt-1">Your password has been successfully reset.</p>
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

        <form v-if="!passwordReset" @submit.prevent="handleSubmit" class="space-y-5">
          <!-- New Password Field -->
          <div class="group">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
              <svg class="w-4 h-4 text-lavender-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              New Password
            </label>
            <div class="relative">
              <input
                v-model="formData.password"
                :type="showPassword ? 'text' : 'password'"
                required
                minlength="6"
                class="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 dark:focus:ring-lavender-900 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="••••••••"
                @input="errorMessage = ''"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                tabindex="-1"
              >
                <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m7.19-2.897A10.05 10.05 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.064 10.064 0 01-5.677 4.118"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="group">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
              <svg class="w-4 h-4 text-lavender-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Confirm Password
            </label>
            <div class="relative">
              <input
                v-model="formData.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                required
                minlength="6"
                class="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 dark:focus:ring-lavender-900 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="••••••••"
                @input="errorMessage = ''"
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                tabindex="-1"
              >
                <svg v-if="!showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m7.19-2.897A10.05 10.05 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.064 10.064 0 01-5.677 4.118"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Reset Password Button -->
          <button
            type="submit"
            :disabled="loading || formData.password !== formData.confirmPassword"
            class="w-full bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg v-if="!loading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            {{ loading ? 'Updating...' : 'Update Password' }}
          </button>

          <!-- Password Match Warning -->
          <div v-if="formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword" class="text-sm text-red-600 dark:text-red-400 text-center">
            Passwords do not match
          </div>
        </form>

        <!-- Success Actions -->
        <div v-if="passwordReset" class="space-y-4">
          <button
            @click="goToLogin"
            class="w-full bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m14-5V7a2 2 0 00-2-2H9.172a2 2 0 00-1.414.586l-4.172 4.172a2 2 0 00-.586 1.414V17a2 2 0 002 2h10a2 2 0 002-2z"/>
            </svg>
            Go to Login
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const router = useRouter()

const loading = ref(false)
const errorMessage = ref('')
const passwordReset = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const formData = ref({
  password: '',
  confirmPassword: '',
})

const handleSubmit = async () => {
  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = 'Passwords do not match'
    return
  }

  loading.value = true
  errorMessage.value = ''

  try {
    const { error } = await supabase.auth.updateUser({
      password: formData.value.password
    })

    if (error) {
      throw error
    }

    passwordReset.value = true
  } catch (error) {
    errorMessage.value = error.message || 'Failed to update password. Please try again.'
  } finally {
    loading.value = false
  }
}

const goToLogin = () => {
  router.push('/login')
}

onMounted(() => {
  // Check if we have a valid session from the reset link
  const checkSession = async () => {
    try {
      // Wait a bit for Supabase to process the hash fragment
      await new Promise(resolve => setTimeout(resolve, 1000))

      const { data: { session }, error } = await supabase.auth.getSession()

      if (error) {
        console.error('Session error:', error)
        errorMessage.value = 'Invalid or expired reset link. Please request a new one.'
        return
      }

      if (!session) {
        // If no session, redirect to forgot password
        router.push('/forgot-password')
      }
    } catch (err) {
      console.error('Error checking session:', err)
      errorMessage.value = 'Error processing reset link. Please try again.'
    }
  }

  checkSession()
})
</script>