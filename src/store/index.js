const store = {
    state: {
        message: {
          title: 'Hey there 👋',
          text: ''
        },
        types: [{ name: 'warning', active: false }, { name: 'neutral', active: true }, { name: 'success', active: false }, { name: 'error', active: false }],
        notifStatus: false,
        top: true,
        duration: 7000
    },
    getters: {
        notifMessage: state => {
          return state.message
        },
        notifTypes: state => {
          return state.types
        },
        notifStatus: state => {
          return state.notifStatus
        },
        notifPos: state => {
          return state.top
        }
    },
    mutations: {
        flashNotif: (state, payload) => {
          if (payload.message.title !== '') {
            state.message.title = payload.message.title
          } else {
            state.message.title = 'Hey there 👋'
          }

          state.message.text = payload.message.text
          if (payload.pos === 'bottom') {
            state.top = false
          } else {
            state.top = true
          }

          if (payload.duration !== null || payload.duration !== '') {
            state.duration = parseInt(payload.duration)
          } else {
            state.duration = 7000
          }

          let typesSize = state.types.length
          for (let i = 0; i < typesSize; i++) {
            if (state.types[i].name === payload.type) {
              state.types[i].active = true
            } else {
              state.types[i].active = false
            }
          }
          state.notifStatus = true
          setTimeout(() => {
            state.notifStatus = false
          }, state.duration)
        },
        closeNotif: state => {
          setTimeout(() => {
            state.notifStatus = false
          }, 200)
        }
    },
    actions: {
        flashNotif: (context, arg) => {
          context.commit('flashNotif', arg)
        },
        closeNotif: context => {
          context.commit('closeNotif')
        }
    }
}
export default store
