<script setup>

import {ref} from "vue";
import {getGrades} from "@/api";
import {useGroupStore} from "@/stores/group";
import {useLabels} from "@/stores/labels";

const label = useLabels().label
const gradesList = ref('error')
const error = ref('loading')
const groupStore = useGroupStore()

try {
  getGrades(groupStore.last_name, groupStore.pin).then((r)=> {
    try {
      if (r['response'][0] === undefined || r['error']) {
        gradesList.value = 'error'
        error.value = r['error'] || 'no_grades'
      } else {
        gradesList.value = r['response']
      }
    } catch (e) {
      gradesList.value = 'error'
      error.value = e
    }
  })
} catch (e) {
  gradesList.value = 'error'
  error.value = e
}

</script>

<template>
  <div>
    <div v-if="gradesList !== 'error'" class="grades">
      <div class="grades__item" v-for="grade in gradesList" :key="grade">
        <span class="grades__item__title">{{grade['name']}}</span>
        <span class="grades__item__type">{{label(['grades', grade['type']])}}</span>
        <span class="grades__item__grade">{{label(['grades', grade['grade']])}}</span>
      </div>
    </div>
    <div class="error" v-else>
      <span class="error_text" v-if="error === 'loading'">
        {{ label(['helpers', 'loading'])}}
      </span>
      <span class="error_text" v-else>
        {{ label(['errors', 'error']) + label(['errors', error]) }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/scss/grades";


</style>