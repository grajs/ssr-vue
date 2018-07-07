import Vue from 'vue'
import App from './App'
import {createRouter} from './router/index'
import {createStore} from './store/index'
import {sync} from 'vuex-router-sync'
import routerControl from './router/router-control'
import axios from './unitils/axios/index'
import {Message} from 'element-ui'

Vue.use(axios)
Vue.prototype.$message = Message

export function createApp() {
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  routerControl(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return {app, router, store}
}