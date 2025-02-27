import {defineStore} from 'pinia'
import {useApiUser} from '~/api/user.js'
import {useCalendar} from "~/api/calendar.js";

export const useCalendarStore = defineStore('calendar', () => {
  const {getListWorkspaces} = useCalendar()
  const filters = {
    manager_uuid: process.server ? '' : localStorage.getItem('crm_uuid')
  }
  const workPlace = ref({
  })

  const fetchCalendarData = async () => {

    try {
      const account = await getListWorkspaces(filters)
      if (!account?.data?.data) throw new Error('Invalid API response format')

      workPlace.value = account.data.data
    } catch (error) {
      console.error('Помилка при отриманні інформації про акаунт:', error)
      throw error
    } finally {
    }
  }

  return {
    workPlace,
    fetchCalendarData
  }
})
