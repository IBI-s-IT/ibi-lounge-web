import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGroupStore = defineStore('groupStore', {
    state: () => {

        const group = ref('1482')
        const educationLevel = ref('1')
        const subgroups = ref([{"subject":"Ин.язык","group":"А","subgroup":"1"}]) // [{"subject":"Ин.язык","group":"2А","subgroup":"2"}]

        const subGroupsList = [
            {
                subject: 'Ин.язык',
                groups: ['А', 'В', 'С'],
                subgroups: ['1', '2']
            }
        ]

        const last_name = ref('')
        const pin = ref('')

        const setSubgroup = (subject, group, subgroup) => {
            subgroups.value.push({
                subject: subject,
                group: group,
                subgroup: subgroup
            })
        }
        const setGroup = (newGroup) => {
            group.value = newGroup
        }
        const setEducationLevel = (newEducationLevel) => {
            educationLevel.value = newEducationLevel
        }

        return { group, educationLevel, subgroups, subGroupsList, last_name, pin,
            setGroup, setEducationLevel, setSubgroup }
    },
    persist: true
})
