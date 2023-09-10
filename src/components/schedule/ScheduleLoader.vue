<script setup>

import {getDate, getSchedule} from "@/api";
import {useGroupStore} from "@/stores/group";
import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import ScheduleContent from "@/components/schedule/ScheduleContent.vue";
import {useUIStore} from "@/stores/ui";
import {usePeriodStore} from "@/stores/periodswitcher";
import {useLabels} from "@/stores/labels";


const route = useRoute()
const router = useRouter()
const periodStore = usePeriodStore()
const dates = ref([])
const label = useLabels().label

function getDates(type) {
  if (type === 4) {
    if (periodStore.dates === null) {
      router.push('/schedule/this-week')
    } else {
      return [periodStore.dates[0].toLocaleDateString(), periodStore.dates[1].toLocaleDateString()]
    }
  } else {
    periodStore.clearDates()
  }

  const startParams = { periodDate: [0, 1].includes(type) ? 'week-start' : 'month-start' }
  const endParams = { periodDate: [0, 1].includes(type) ? 'week-end' : 'month-end' }
  const additionalParams = {}

  if (type === 1) additionalParams.dd = 7
  if (type === 3) additionalParams.md = 1

  return [
    getDate({ ...startParams, ...additionalParams }),
    getDate({ ...endParams , ...additionalParams}),
  ]
}

const loadContent = () => {
  schedule.value = 'error'
  error.value = 'loading'
  dates.value = getDates(route.meta.mode)

  const promise = getSchedule(
      groupStore.group,
      dates.value[0],
      dates.value[1],
      groupStore.subgroups
  )
  promise.then((res) => {
    try {
      if (res['error'] !== undefined) {
        error.value = label(['schedule', res['error']])
        schedule.value = 'error'
      }
      else {
        schedule.value = res['response']
      }
    } catch (e) {
      // console.log(e)
      schedule.value = 'error'
      error.value = e
    }
  }).catch((err) => {
    schedule.value = 'error'
    error.value = err
  })
}

const groupStore = useGroupStore()
const uiStore = useUIStore()

const schedule = ref('error')
const error = ref('loading')


loadContent()
watch(route, () => {
  loadContent()
})

</script>

<template>
  <div class="container">
    <div class="error" v-if="schedule === 'error' || uiStore.language === 'ar'">
      <span v-if="schedule === 'error' && uiStore.language !== 'ar'
        && error === 'loading'">
        {{ label(['helpers', error]) }}
      </span>
      <span v-else-if="uiStore.language === 'ar'">
        {{ label(['schedule', 'adib']) }}
      </span>
      <span v-else>
        {{ label(['errors', 'error']) + label(['errors', error]) }}
      </span>
    </div>
    <ScheduleContent :schedule="schedule" :dates="dates" v-else />
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/scss/schedule/loader";

</style>