<script setup>
import { computed } from 'vue'
import useModalsStore from '@/stores/modals.js'
const emit = defineEmits(['cancel'])
const modalsStore = useModalsStore()
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  noCancelButton: {
    type: Boolean,
    default: () => false
  },
  cancelText: {
    type: String,
    default: 'Close'
  },
  isForm: {
    type: Boolean,
    default: () => false
  },
  fullscreen: {
    type: Boolean,
    default: () => false
  },
  noCloseSelf: {
    type: Boolean,
    default: () => false
  }
})
const active = computed(() => modalsStore.active === props.name)
function close() {
  if (!props.noCloseSelf) {
    modalsStore.close()
    emit('cancel')
  }
}
</script>

<template>
  <transition name="fade" mode="in-out" appear>
    <component
      :is="isForm ? 'form' : 'div'"
      v-if="active"
      :key="props.name"
      :data-modal="name"
      class="modal"
      :class="{
        'modal--fullscreen': fullscreen,
      }"
      @click.self="close"
    >
      <div
        class="modal__content"
      >
        <div v-if="$slots.header" class="modal__header">
          <slot name="header"></slot>
        </div>
        <div class="modal__body">
          <slot></slot>
          <slot v-if="!$slots.default" name="body">No modal body provided...</slot>
        </div>
        <div v-if="!fullscreen" class="modal__actions">
          <button v-if="!noCancelButton" class="btn btn--outline" type="button" @click.prevent="close">{{ props.cancelText }}</button>
          <slot name="actions"></slot>
        </div>
      </div>
    </component>
  </transition>
</template>

<style scoped lang="scss">
@use '@/assets/scss/components/modal';
</style>