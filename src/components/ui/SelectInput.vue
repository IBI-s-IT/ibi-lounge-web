<script setup>

import {computed, ref} from "vue";
import { vOnClickOutside } from '@vueuse/components'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, null],
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const currentValueName = computed(
    () => props.options.find(option => option.id === props.modelValue)?.name
)

const isOpen = ref(false)

const open = () => isOpen.value = true
const close = () => isOpen.value = false
const select = (option) => {
  close()
  emit('update:modelValue', option.id)
}

</script>

<template>
  <div class="select" v-on-click-outside="close">
    <span class="select__value" @click="isOpen ? close() : open()">{{ currentValueName }}</span>
    <div class="select__options" :class="{'hidden': !isOpen}">
      <span class="select__option" v-for="option in options"
            :key="option"
            @click="select(option)"
      >
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/scss/components/select";

</style>