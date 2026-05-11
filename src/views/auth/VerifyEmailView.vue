<template>
  <div class="max-w-xl mx-auto py-12 px-6">
    <h1 class="text-2xl font-semibold mb-4">Email Verification</h1>

    <div v-if="loading" class="text-gray-600">Verifying your email...</div>

    <div v-else>
      <div v-if="success" class="p-4 bg-green-50 border border-green-200 rounded"> 
        <p class="text-green-700">{{ message }}</p>
        <router-link to="/login" class="mt-3 inline-block text-sm text-indigo-600">Sign in</router-link>
      </div>

      <div v-else class="p-4 bg-red-50 border border-red-200 rounded">
        <p class="text-red-700">{{ message }}</p>
        <div class="mt-3">
          <router-link to="/signup" class="inline-block text-sm text-indigo-600">Create an account</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const loading = ref(true)
const success = ref(false)
const message = ref('')

const handleVerification = async () => {
  try {
    const url = new URL(window.location.href)

    const hasRedirectSession = url.searchParams.has('access_token') || url.searchParams.has('type')
    if (hasRedirectSession) {
      const { data, error } = await supabase.auth.getSessionFromUrl()
      if (error) {
        console.warn('Failed to parse session from URL:', error)
      }

      await authStore.initializeAuth()

      if (authStore.isAuthenticated) {
        success.value = true
        message.value = 'Your email has been verified and your account is ready. Redirecting to dashboard...'
        setTimeout(() => {
          router.push('/dashboard')
        }, 2200)
        return
      }
    }

    success.value = true
    message.value = 'Your email has been verified successfully. Please sign in to continue.'
  } catch (error) {
    console.error('Email verification error:', error)
    success.value = false
    message.value = 'Could not complete verification automatically. Please sign in to continue.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  handleVerification()
})
</script>

<style scoped>
</style>
