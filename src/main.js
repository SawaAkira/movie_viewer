import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './assets/animate/css/animate.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import lottie from 'vue-lottie'

Vue.config.productionTip = false
Vue.component('lottie', lottie)

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
