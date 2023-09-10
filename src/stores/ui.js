import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUIStore = defineStore('uiStore', {
    state: () => {
        const languages = [
            { name: 'Русский', id: 'ru' },
            { name: 'English', id: 'en' },
            { name: "عربيُ", id: 'ar' }
        ]
        const themes = [
            { name: 'Светлая', id: 'light-theme' },
            { name: 'Темная', id: 'dark-theme' }
        ]

        const language = ref('ru')
        const theme = ref('light-theme')

        const setLanguage = (lang) => {
            language.value = lang
        }

        const setTheme = ({newTheme}) => {
            themes.forEach(theme => {
                if (document.body.classList.contains(theme.id)) {
                    // console.log(theme.id + ' removed')
                    document.body.classList.remove(theme.id)
                }
            })
            if (newTheme !== undefined) {
                theme.value = newTheme
            }
            document.body.classList.add(theme.value)
        }

        return { language, theme, languages, themes, setLanguage, setTheme }
    },
    persist: true
})
