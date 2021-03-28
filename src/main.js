import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Button} from 'mint-ui'


Vue.component(Button.name, Button)

import '../static/css/reset.css'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store //使用vuex
}).$mount('#app')
