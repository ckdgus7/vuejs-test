import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueRangedatePicker from 'vue-rangedate-picker'
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

Vue.use(VueRangedatePicker)

Vue.config.productionTip = false
Vue.component('DateRangePicker', DateRangePicker)
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
