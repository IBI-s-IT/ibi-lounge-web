<script setup>

import UniversalIcon from "@/components/ui/UniversalIcon.vue";
import {useGroupStore} from "@/stores/group";
import {useLabels} from "@/stores/labels";
import EmojiLabel from "@/components/ui/EmojiLabel.vue";

defineProps({
  lessons: {
    type: Array,
    default: () => []
  }
})

const groupStore = useGroupStore()
const label = useLabels().label

const formTime = (start, end) => {
  start = new Date(Date.parse(start)).toLocaleTimeString('ru').slice(0,5)
  end = new Date(Date.parse(end)).toLocaleTimeString('ru').slice(0,5)
  return `${start}-${end}`
}


</script>

<template>
  <div>
    <template v-if="lessons.length !== 0">
      <div v-for="lesson in lessons" :key="lesson">
        <component :is="lesson['additional']['url'] ? 'a' : 'div'"
                   :href="lesson['additional']['url'] || null"
                   :target="lesson['additional']['url'] ? '__blank' : null"
                   class="lesson">
          <span class="lesson__left">
            <span class="lesson__time">{{ formTime(lesson['time_start'], lesson['time_end']) }}</span>
            <span class="lesson__name">{{ lesson['text'] }}</span>
            <span class="lesson__teacher">{{ lesson['additional']['teacher_name'] }}</span>
          </span>
          <span class="lesson__right">
            <emoji-label :name="lesson['additional']['type']" class="lesson__type" />
            <emoji-label name="online"  class="lesson__room" v-if="lesson['additional']['url']" />
            <emoji-label :name="lesson['additional']['location']" class="lesson__room" v-else />
            <UniversalIcon
                name="angle-right"
                size="32px"
                v-if="lesson['additional']['url']"
                class="icon" fill="--clr-secondary-dark"
            />
          </span>
        </component>
  <!--      <button v-else @click="groupStore.setSubgroup([lesson['text'], lesson['additional']['subgroup']])">-->
  <!--        add {{lesson['text']}} subgroup {{lesson['additional']['subgroup']}}-->
  <!--      </button>-->
      </div>
    </template>
    <template v-else>
      <div class="lesson">
        <span v-if="groupStore.subgroups === null">
          {{ label(['schedule', 'no_subgroup_filter'])}}
        </span>
        <span v-else-if="groupStore.subgroups !== []">
          {{ label(['schedule', 'no_lessons_subgroup'])}}
        </span>
        <span v-else>
          {{ label(['schedule', 'just_error_text']) }}
        </span>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/scss/schedule/lesson";
@use "@/assets/scss/schedule/mobile";

</style>