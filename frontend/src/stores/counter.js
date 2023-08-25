import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore({
  state: () => ({
    user: useStorage('user', {}),
  })
})
