<script setup>

</script>

<template>
  <div class="tooltip">
    <slot />
    <div class="tooltip__content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/scss/components/tooltip";

</style>