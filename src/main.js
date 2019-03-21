import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jquery from 'jquery'
window.$ = window.jquery = jquery
import 'popper.js'
import 'bootstrap'
import './assets/scss/app.scss'

Vue.component('Navbar', require('./components/Navbar.vue').default)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
