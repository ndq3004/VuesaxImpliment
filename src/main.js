import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './globalComponents'
import i18n from './i18n/i18n'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,

  // component,
  render: h => h(App)
}).$mount('#app')
