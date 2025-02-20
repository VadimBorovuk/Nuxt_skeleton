import { useAuthStore } from '~/stores/authStore.js'
import { useUserStore } from '~/stores/userStore.js'

export default defineNuxtRouteMiddleware(async (to) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore()
  const userStore = useUserStore()

  // Перевірка токена
  if (!authStore.token || new Date().getTime() >= authStore.expiring * 1000) {
    if (process.client) {
      alert('No token or token expired!')
      window.location.href =  config.public.CLIENT_APP_PATH
    }
    return;
  }

  try {
    await userStore.fetchUserData() // Чекаємо завершення завантаження

    if (!userStore.userData || !userStore.userData.access) {
      throw new Error('User data could not be loaded')
    }

    const { access, department, role } = userStore.userData

    if (department.includes('CALLCENTER1') || role === 'admin') {
      const allowedRoutes = access.route.map((r) => `/${r}`)
      if (!allowedRoutes.includes(to.path) && !allowedRoutes.includes(to.matched[1]?.path)) {
        if (role !== 'admin') {
          if (process.client) alert('403 Forbidden')
          return abortNavigation()
        }
      }
    } else {
      if (process.client) alert('No access')
      // return navigateTo('/projects')
    }
  } catch (error) {
    console.error('Middleware error:', error)
    return navigateTo('/error')
  }
})
