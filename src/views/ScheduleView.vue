<script setup>

import ScheduleContent from "@/components/schedule/ScheduleLoader.vue";

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {usePeriodStore} from "@/stores/periodswitcher";
import {useRoute, useRouter} from "vue-router";
import {useLabels} from "@/stores/labels";
import {computed} from "vue";
import {getCalendar} from "@/api";
import {useGroupStore} from "@/stores/group";

const label = useLabels().label
const periodStore = usePeriodStore()
const route = useRoute()
const router = useRouter()
const groupStore = useGroupStore()

const isMobile = computed(() => window.innerWidth < 768)

const loadSchedule = (value) => {
  if (value !== null) {
    if (route.path !== '/schedule/custom') {
      router.push('/schedule/custom')
    }
  } else {
    router.push('/schedule/this-week')
  }
  closeSidebar()
}

const openSidebar = () => {
  document.querySelector('#schedule-sidebar').classList.add('opened')
}
const closeSidebar = () => {
  document.querySelector('#schedule-sidebar').classList.remove('opened')
}

const exportCalendar = async (e) => {
  const a = e.target
  if (a.download !== '') return

  a.classList.add('loading')

  const [start, end] = periodStore.dates
  const [group, subgroups] = [groupStore.group, groupStore.subgroups]
  const response = await getCalendar(
      group,
      {
        start_date: start.toLocaleDateString(),
        end_date: end.toLocaleDateString(),
        subgroups: subgroups
      })
  a.href = window.URL.createObjectURL(new Blob([response]))
  a.download = 'calendar.ics'
  a.click()
  a.classList.remove('loading')
}


</script>

<template>
  <div class="frame">
    <div class="menu" v-if="isMobile" @click="openSidebar"></div>
    <div id="schedule-sidebar" class="sidebar" :class="{'mobile opened': isMobile}">
      <RouterLink to="/schedule/this-week" @click="closeSidebar">{{ label(['schedule', 'this-week']) }}</RouterLink>
      <RouterLink to="/schedule/next-week" @click="closeSidebar">{{ label(['schedule', 'next-week']) }}</RouterLink>
      <RouterLink to="/schedule/this-month" @click="closeSidebar">{{ label(['schedule', 'this-month']) }}</RouterLink>
      <RouterLink to="/schedule/next-month" @click="closeSidebar">{{ label(['schedule', 'next-month']) }}</RouterLink>
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
      <a href="#export" id="export" @click="exportCalendar" v-if="route.meta.mode === 4">{{ label(['schedule', 'export']) }}</a>
    </div>
    <div class="schedule">
      <ScheduleContent />
    </div>
  </div>

</template>

<style scoped lang="scss">

@use "@/assets/scss/schedule/frame";
@use "@/assets/scss/schedule/mobile";

</style>