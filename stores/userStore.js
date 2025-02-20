import {defineStore} from 'pinia'
import {useApiUser} from '~/api/user.js'

export const useUserStore = defineStore('user', () => {
  const {getUserInfo} = useApiUser()

  const userData = ref({
    access: {},
    department: [],
    role: '',
    user_info: {}
  })
  const errorUserData = ref(null)
  const loading = ref(false)

  const fetchUserData = async () => {

    try {
      // if (import.meta.server) return // Запобігаємо запитам під час SSR

      const account = await getUserInfo()
      if (!account?.data?.data) throw new Error('Invalid API response format')

      const {access, department, role, user_info} = account.data.data
      userData.value = {access, department, role, user_info}
      errorUserData.value = null
    } catch (error) {
      console.error('Помилка при отриманні інформації про акаунт:', error)
      errorUserData.value = error.message
      userData.value = {
        access: {},
        department: [],
        role: '',
        user_info: {}
      }
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    userData,
    errorUserData,
    fetchUserData,
    loading,
  }
})
