<script setup>

import ScheduleContent from "@/components/schedule/ScheduleLoader.vue";

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {usePeriodStore} from "@/stores/periodswitcher";
import {useRoute, useRouter} from "vue-router";
import {useLabels} from "@/stores/labels";

const label = useLabels().label
const periodStore = usePeriodStore()
const route = useRoute()
const router = useRouter()


const loadSchedule = (value) => {
  if (value !== null) {
    if (route.path !== '/schedule/custom') {
      router.push('/schedule/custom')
    }
  } else {
    router.push('/schedule/this-week')
  }
}


</script>

<template>
  <div class="frame">
    <div class="sidebar">
      <RouterLink to="/schedule/this-week">{{ label(['schedule', 'this-week']) }}</RouterLink>
      <RouterLink to="/schedule/next-week">{{ label(['schedule', 'next-week']) }}</RouterLink>
      <RouterLink to="/schedule/this-month">{{ label(['schedule', 'this-month']) }}</RouterLink>
      <RouterLink to="/schedule/next-month">{{ label(['schedule', 'next-month']) }}</RouterLink>
      <span
          class="disabled"
          :class="{'router-link-active': periodStore.dates !== null}"
      >{{ label(['schedule', 'custom']) }}
        <VueDatePicker
            v-model="periodStore.dates"
            :enable-time-picker="false"
            :placeholder=" label(['picker', 'placeholder']) "
            :select-text=" label(['picker', 'select']) "
            :cancel-text=" label(['picker', 'cancel']) "
            :hide-navigation="['year']"
            :locale="label(['picker', 'locale'])"
            :action-row="{ showPreview: false }"
            format="dd.MM.yyyy"
            month-name-format="long"
            :year-range="[new Date().getFullYear()-3, new Date().getFullYear()+2]"
            @update:model-value="loadSchedule"
            range

        />
      </span>
    </div>
    <div class="schedule">
      <ScheduleContent />
    </div>
  </div>

</template>

<style scoped lang="scss">

@use "@/assets/scss/schedule/frame";

</style>