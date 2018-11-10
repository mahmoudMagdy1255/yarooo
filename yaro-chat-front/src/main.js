// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import veeValidate from 'vee-validate'
import noty from 'vuejs-noty'

Vue.use(veeValidate)

Vue.use(noty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topRight',
  theme:'sunset'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
