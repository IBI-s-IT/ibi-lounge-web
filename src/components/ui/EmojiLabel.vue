<script setup>
import {useLabels} from "@/stores/labels";

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  section: {
    type: String,
    default: 'schedule'
  }
})

const label = useLabels().label

const emoji = (e) => {
  const emoji = {
    'online': '🌎',
    'lecture': '📖',
    'practice': '🔨',
    'library_day': '📚',
    'project_work': '👥',
    'exam': '🚨',
    'subject_report': '⚠️',
    'consultation': 'ℹ️',
    'subject_report_with_grade': '⚠️',
    'else': '🗺️'
  }

  return emoji[e] || emoji['else']
}

</script>

<template>
  <span>
    {{ label([props.section, props.name]) + '  ' + emoji(props.name) }}
  </span>
</template>

<style scoped lang="scss">

</style>