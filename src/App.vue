<script setup>
import {RouterView, useRoute} from 'vue-router'
import UniversalIcon from "@/components/ui/UniversalIcon.vue";
import NavigationIcon from "@/components/ui/NavigationIcon.vue";
import { useTabStore } from '@/stores/tabswitcher'
import SettingsModal from "@/components/settings/SettingsModal.vue";
import useModalsStore from "@/stores/modals";
import {useUIStore} from "@/stores/ui";
import {useLabels} from "@/stores/labels";
import ToolTip from "@/components/ui/ToolTip.vue";
import {computed} from "vue";


const tabStore = useTabStore()
const isMobile = computed(() => window.innerWidth < 768)

const isHome = computed(() => useRoute().path === '/')

const tabs = [
  {
    id: 'schedule',
    icon: 'table'
  },
  {
    id: 'grades',
    icon: 'graduation-cap'
  },
  {
    id: 'materials',
    icon: 'newspaper'
  },
  {
    id: 'settings',
    icon: 'gear'
  }
]

const modalStore = useModalsStore()

const uiStore = useUIStore()
document.body.classList.add(uiStore.theme)

const label = useLabels().label


</script>

<template>
  <div class="sidenav">
    <div class="sidenav__title" v-if="!isMobile">
      <img alt="IBI Lounge logo" class="logo" src="/icons/Icon64.png"/>
      <span>{{ label(['app', 'name']) }}</span>
      <UniversalIcon name="gear" size="24px" fill="--clr-secondary-lighter"
                     @click="modalStore.open('settings')" />
    </div>
    <nav class="sidenav__links" v-if="!isMobile">
      <NavigationIcon to="/schedule" name="calendar" size="20px" color="#0168d3"
                      @click="tabStore.select(0)">
        {{ label(['sidenav', 'schedule']) }}
      </NavigationIcon>
      <NavigationIcon to="/grades" name="graduation-cap" size="20px" color="#0168d3"
                      @click="tabStore.select(1)">
        {{ label(['sidenav', 'grades']) }}
      </NavigationIcon>
      <NavigationIcon to="https://lms.ibispb.ru" name="newspaper" size="20px" color="#0168d3"
                      :external="true">
        {{ label(['sidenav', 'materials']) }}
      </NavigationIcon>
      <tool-tip class="cred">
        {{ label(['app', 'cred_text']) }}
        <template #content>
          {{ label(['app', 'cred_tooltip']) }}
          <a :href="label(['app', 'cred_author_link'])"
             target="_blank">by {{ label(['app', 'cred_author']) }}</a>
        </template>
      </tool-tip>
    </nav>
    <nav class="sidenav__links mobile" v-else>
      <NavigationIcon to="/schedule" name="calendar" size="32px"
                      @click="tabStore.select(0)" />
      <NavigationIcon to="/grades" name="graduation-cap" size="32px"
                      @click="tabStore.select(1)" />
      <NavigationIcon to="https://lms.ibispb.ru" name="newspaper" size="32px"
                      :external="true" />

      <NavigationIcon to="/settings" name="gear" size="32px"
                     @click="tabStore.select(3)"/>
    </nav>
  </div>

  <div class="name-bar">
    <UniversalIcon :name="tabs[tabStore.tab].icon" size="24px" fill="--clr-secondary-lighter" />
    <span class="name">{{ isHome ? label(['app', 'name']) : label(['sidenav', tabs[tabStore.tab].id]) }}</span>
    <span class="theme-switcher">
      <UniversalIcon
          :name="uiStore.theme === 'dark-theme' ? 'sun' : 'moon'"
          size="24px"
          fill="--clr-secondary-lighter"
          @click="uiStore.setTheme({
          newTheme: uiStore.theme === 'dark-theme' ? 'light-theme' : 'dark-theme'
          })"
      />
    </span>
  </div>

  <RouterView class="content"></RouterView>


  <SettingsModal />

</template>

<style scoped lang="scss">

@use "@/assets/scss/components/tooltip";

</style>

<style lang="scss">

@use "@/assets/scss/app";

.cred {
  align-self: center;
  margin-top: auto !important;
  font-size: 14px;
}

</style>
