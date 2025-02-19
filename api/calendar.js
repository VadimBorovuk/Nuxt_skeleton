import {useNuxtApp} from '#app';

export function useCalendar() {
  const {$serviceCalendar} = useNuxtApp();

  const getListWorkspaces = (filters) => {

    let url = `/api/v1/workspaces/list?`

    for (let name in filters) {
      url += `${name}=${filters[name]}&`
    }

    return $serviceCalendar({
      url: url,
      method: 'get'
    })
  };

  const getRecallsOccupiedDates = (date) => {
    let url = `api/v1/calendar/recalls/occupied-dates/${localStorage.getItem('crm_uuid')}`

    if (date) {
      url += `?date=${date}`
    }

    return $serviceCalendar({
      url: url,
      method: 'get'
    })
  }

  return {
    getListWorkspaces, getRecallsOccupiedDates
  }
}



