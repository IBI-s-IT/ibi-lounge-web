<script setup>

import ScheduleDay from "@/components/schedule/ScheduleDay.vue";
import {useLabels} from "@/stores/labels";

defineProps({
  schedule: {
    type:  [String, Array],
    default: () => ['No schedule']
  },
  dates: {
    type: Array,
    default: () => []
  }
})

const label = useLabels().label

const getDayHeader = (date) => {
  const day = new Date(Date.parse(date)).toLocaleDateString('ru').slice(0,5)
  const dayOfWeek = new Date(Date.parse(date)).getDay()
  const dayOfWeekString = label(['week', [
    'sun',
    'mon',
    'tues',
    'wed',
    'thurs',
    'fri',
    'sat'
  ][dayOfWeek]])
  return `${dayOfWeekString}, ${day}`
}

</script>

<template>
  <div class="day" v-for="day in schedule" :key="day">
    <span class="day__header">
      {{ getDayHeader(day['date']) }}
    </span>
      <ScheduleDay :lessons="day['lessons']" class="day__content" />
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/scss/schedule/day";

</style>