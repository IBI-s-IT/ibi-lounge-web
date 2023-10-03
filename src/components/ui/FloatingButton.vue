<script setup>

</script>

<template>
  <div class="floating-button">
    <div class="container">

      <slot>
        <span class="floating-button__text">Filters</span>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

.floating-button {
  position: sticky;
  bottom: 20px;
  left: 20px;
  width: calc(100% - 40px);
  height: 160px;
  border-radius: 24px;
  background-color: var(--clr-secondary-dark);
  color: var(--clr-secondary-light);
  display: flex;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 101;
}

.container {
  height: 40px;
  width: 100px;
}

</style>