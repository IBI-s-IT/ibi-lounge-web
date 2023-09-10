import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTabStore = defineStore('tabStore', () => {
    const tab = ref(0)
  const select = (n) => {
    tab.value = n -0 // convert to number
  }
  return { tab, select }
})
