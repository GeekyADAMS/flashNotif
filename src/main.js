import flashNotif from './components/flashNotif.vue'
import store from './store'

export default {
  install (Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.')
    }
    
    options.store.registerModule('flash-notif', store)
 
    Vue.component('flashNotif', flashNotif)
  }
}