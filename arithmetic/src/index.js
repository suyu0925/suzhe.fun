import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
