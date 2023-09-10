<script setup>
import UniversalIcon from "@/components/ui/UniversalIcon.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'black'
  },
  size: {
    type: String,
    default: '1em'
  },
  external: {
    type: Boolean,
    default: false
  }
})

const to_name = props.to.split('/')[1]

// const toParam = () => {
//   switch (to_name) {
//     case 'schedule':
//       return {name: to_name, params:{type: 'this-week'}}
//     case 'grades':
//       return {name: to_name}
//     case 'materials':
//       return {name: to_name}
//     default:
//       return {name: to_name}
//   }
// }

</script>

<template>
  <a :href="to" target="_blank" v-if="external">
    <UniversalIcon :name="props.name" :color="props.color" :size="props.size"/> <slot />
  </a>
  <RouterLink :to="{name: to_name}" :class="props.aClass" v-else>
    <UniversalIcon :name="props.name" :color="props.color" :size="props.size"/> <slot />
  </RouterLink>
</template>