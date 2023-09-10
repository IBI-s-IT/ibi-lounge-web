<script setup>

import ModalWindow from "@/components/ui/ModalWindow.vue";
import SelectInput from "@/components/ui/SelectInput.vue";
import {ref} from "vue";
import useModalsStore from "@/stores/modals";
import {useGroupStore} from "@/stores/group";
import {getEducationLevels, getGroups} from "@/api";
import {useUIStore} from "@/stores/ui";
import {useLabels} from "@/stores/labels";

const modalStore = useModalsStore()
const groupStore = useGroupStore()
const uiStore = useUIStore()
const label = useLabels().label

const levelSelectData = ref([{id: '1', name: 'Не выбрано'}])
const groupSelectData = ref([{id: '1', name: 'Не выбрано'}])

getEducationLevels().then((r)=> {
  // console.log(r)
  levelSelectData.value = r.response
})

const updateGroups = () => {
  getGroups(groupStore.educationLevel).then((r)=> {
    // console.log(r)
    groupSelectData.value = r.response
  })
}

const getSubgroups = () => {
  const subGroupSubjects = []
  const subGroupSubjectsGroups = []
  const subGroupSubjectsSubGroups = []
  groupStore.subGroupsList.forEach((item) => {
    if (item.subject !== null) {
      subGroupSubjects.push({id: item.subject, name: item.subject})
      subGroupSubjectsGroups[item.subject] = {
        value: ref(groupStore.subgroups === null ? null :
            groupStore.subgroups.find(subGroup => subGroup.subject === item.subject).group),
        select: []
      }
      subGroupSubjectsSubGroups[item.subject] = {
        value: ref(groupStore.subgroups === null ? null :
            groupStore.subgroups.find(subGroup => subGroup.subject === item.subject).subgroup),
        select: []
      }
      item.groups.forEach((group) => {
        subGroupSubjectsGroups[item.subject].select.push({id: group, name: group})
      })
      item.subgroups.forEach((subGroup) => {
        subGroupSubjectsSubGroups[item.subject].select.push({id: subGroup, name: subGroup})
      })
    }
  })



  return [subGroupSubjects, subGroupSubjectsGroups, subGroupSubjectsSubGroups]
}

const [subGroupSubjects, subGroupSubjectsGroups, subGroupSubjectsSubGroups] = getSubgroups()

const updateGroupSubjectGroups = (subjectId) => {
  try {
    groupStore.subgroups = [{
      subject: subjectId,
      group: subGroupSubjectsGroups[subjectId].value.value,
      subgroup: groupStore.subgroups.find(subGroup => subGroup.subject === subjectId).subgroup
    }]
  } catch (e) {
    // console.log(e)
    groupStore.subgroups = [{
      subject: subjectId,
      group: subGroupSubjectsGroups[subjectId].value.value,
      subgroup: ''
    }]
  }

}
const updateGroupSubjectSubGroups = (subjectId) => {
  try {
    groupStore.subgroups = [{
      subject: subjectId,
      group: groupStore.subgroups.find(subGroup => subGroup.subject === subjectId).group,
      subgroup: subGroupSubjectsSubGroups[subjectId].value.value
    }]
  } catch (e) {
    // console.log(e)
    groupStore.subgroups = [{
      subject: subjectId,
      group: '',
      subgroup: subGroupSubjectsSubGroups[subjectId].value.value
    }]
  }
}

updateGroups()

</script>

<template>
  <ModalWindow name="settings" :no-cancel-button="true">
    <template #header>
      <h2>{{ label(['sidenav', 'settings']) }}</h2>
    </template>
    <template #body>
      <div class="settings">
        <span class="settings__wrapper__title">{{ label(['settings', 'group_selection']) }}</span>
        <div class="settings__item__wrapper">
          <div class="settings__item">
            <span class="settings__name">{{ label(['settings', 'level']) }}</span>
            <SelectInput
                class="settings__select"
                v-model="groupStore.educationLevel"
                :options="levelSelectData"
                @update:modelValue="updateGroups"
            />
          </div>
          <div class="settings__item">
            <span>{{ label(['settings', 'group']) }}</span>
            <SelectInput
                class="settings__select"
                v-model="groupStore.group"
                :options="groupSelectData"
            />
          </div>
        </div>
        <span class="settings__wrapper__title">{{ label(['settings', 'subgroup_filter']) }}</span>
        <div class="settings__item__wrapper">
          <div class="settings__item" v-for="subject in subGroupSubjects" :key="subject">
            <span class="title">{{ subject.name }}</span>
            <SelectInput
                class="settings__select"
                v-model="subGroupSubjectsGroups[subject.id].value.value"
                :options="subGroupSubjectsGroups[subject.id].select"
                @update:modelValue="updateGroupSubjectGroups(subject.id)"
            />
            <SelectInput
                class="settings__select"
                v-model="subGroupSubjectsSubGroups[subject.id].value.value"
                :options="subGroupSubjectsSubGroups[subject.id].select"
                @update:modelValue="updateGroupSubjectSubGroups(subject.id)"
            />
          </div>
        </div>
        <span class="settings__wrapper__title">{{ label(['settings', 'grades_data']) }}</span>
        <div class="settings__item__wrapper">
          <div class="settings__item">
            <span class="settings__name">{{ label(['settings', 'last_name']) }}</span>
            <input
                class="settings__select"
                v-model="groupStore.last_name"
            />
          </div>
          <div class="settings__item">
            <span>{{ label(['settings', 'pin']) }}</span>
            <input
                class="settings__select"
                v-model="groupStore.pin"
            />
          </div>
        </div>
        <span class="settings__wrapper__title">{{ label(['settings', 'ui']) }}</span>
        <div class="settings__item__wrapper">
          <div class="settings__item">
            <span>{{ label(['settings', 'theme']) }}</span>
            <SelectInput
                class="settings__select"
                v-model="uiStore.theme"
                :options="uiStore.themes"
                @update:modelValue="uiStore.setTheme"
            />
          </div>
          <div class="settings__item">
            <span>{{ label(['settings', 'language']) }}</span>
            <SelectInput
                class="settings__select"
                v-model="uiStore.language"
                :options="uiStore.languages"
            />
          </div>
        </div>
      </div>
    </template>
    <template #actions>
      <button class="button" type="button" @click="modalStore.close()">{{ label(['settings', 'close']) }}</button>
    </template>
  </ModalWindow>
</template>

<style scoped lang="scss">

@use "@/assets/scss/components/modal";

</style>