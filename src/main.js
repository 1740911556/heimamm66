import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入给html设置字体大小vue add  style-resources-loader
import 'amfe-flexible'
// 到如icon图标
import '@/style/iconfont/iconfont.css'
// 页面适配css
import 'normalize.css'

// 使用 vant
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
