import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'

Vue.config.productionTip = false
Vue.use(axios)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    console.log(this.$axios ? 'axios funcionando': 'axios não funcionando')
  }
}).$mount('#app')
