<script setup>
import UniversalIcon from "@/components/ui/UniversalIcon.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  to: {
    type: String,
    default: '/home'
  },
  color: {
    type: String,
    default: 'black'
  },
  fill: {
    type: [String, undefined]
  },
  size: {
    type: String,
    default: '1em'
  },
  external: {
    type: Boolean,
    default: false
  },
  button: {
    type: Boolean,
    default: false
  },
})

const to_name = !props.external && !props.button ? props.to.split('/')[1] : undefined


</script>

<template>
  <a href="#!" v-if="button">
    <UniversalIcon :name="props.name" :fill="props.fill" :size="props.size" v-if="props.fill"/>
    <UniversalIcon :name="props.name" :color="props.color" :size="props.size" v-else/>
    <slot />
  </a>
  <a :href="to" target="_blank" v-else-if="external">
    <UniversalIcon :name="props.name" :fill="props.fill" :size="props.size" v-if="props.fill"/>
    <UniversalIcon :name="props.name" :color="props.color" :size="props.size" v-else/>

    <slot />
  </a>
  <RouterLink :to="{name: to_name}" v-else>
    <UniversalIcon :name="props.name" :fill="props.fill" :size="props.size" v-if="props.fill"/>
    <UniversalIcon :name="props.name" :color="props.color" :size="props.size" v-else/>
    <slot />
  </RouterLink>
</template>