import { defineStore } from 'pinia'

const useModalsStore = defineStore({
  id: 'modals',
  state: () => ({
    active: '',
    iframeUrl: null
  }),
  getters: {
  },
  actions: {
    open(modalId, defaultScrollbarGutter = false) {
      document.body.classList.add('modal-opened')
      if (defaultScrollbarGutter) {
        document.documentElement.classList.add('scrollbar-gutter-auto')
      }
      this.active = modalId
    },
    close() {
      document.body.classList.remove('modal-opened')
      document.documentElement.classList.remove('scrollbar-gutter-auto')
      this.active = ''
      this.iframeUrl = null
    },
    openIframeModal(url) {
      this.iframeUrl = url
      this.open('iframe')
    }
  }
})

export default useModalsStore