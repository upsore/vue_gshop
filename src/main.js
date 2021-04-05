import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Button} from 'mint-ui'

import './mock/mockServer'

// import VueLazyload from 'vue-lazyload'
// import loading from './common/imgs/loading.gif'
// Vue.use(VueLazyload)

// Vue.use(VueLazyload, {  //内部自定义指令lazy
//   loading

// })
 

Vue.component(Button.name, Button)

import '../static/css/reset.css'
import 'mint-ui/lib/style.css'

import './filters/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store //使用vuex
}).$mount('#app')
