<script setup>

import {useLabels} from "@/stores/labels";

const label = useLabels().label

</script>

<template>
  <div class="home">
    <h2 class="home__title"> {{ label(['app', 'name']) }} </h2>
    <p class="home__description">
      {{ label(['app', 'description']) }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  &__description {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    max-width: 80%;
  }
}
</style>