<script setup>

import ModalWindow from "@/components/ui/ModalWindow.vue";
import useModalsStore from "@/stores/modals";
import {useLabels} from "@/stores/labels";
import SettingsContent from "@/components/settings/SettingsContent.vue";

const modalStore = useModalsStore()
const label = useLabels().label



</script>

<template>
  <ModalWindow name="settings" :no-cancel-button="true">
    <template #header>
      <h2>{{ label(['sidenav', 'settings']) }}</h2>
    </template>
    <template #body>
      <SettingsContent />
    </template>
    <template #actions>
      <button class="button" type="button" @click="modalStore.close()">{{ label(['settings', 'close']) }}</button>
    </template>
  </ModalWindow>
</template>

<style scoped lang="scss">

@use "@/assets/scss/components/modal";
@use "@/assets/scss/settings";

</style>