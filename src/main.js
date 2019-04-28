import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// 全局CSS样式
import 'common/style/index.less'

// 处理浏览器300ms延时
fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
