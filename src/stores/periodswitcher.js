import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePeriodStore = defineStore('periodStore', () => {
    const dates = ref(null)
    const clearDates = () => {
        dates.value = null
    }

    return { dates, clearDates }
})
