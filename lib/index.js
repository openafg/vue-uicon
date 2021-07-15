import UIIcon from "./components/UIIcon.vue"

export default {
  install(Vue, options) {
    Vue.component("ui-icon", {
      extends: UIIcon,
      props: {
        _options: {
          type: Object,
          default: () => ({...options})
        }
      }
    })
  }
}
