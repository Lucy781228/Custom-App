
import { generateFilePath } from '@nextcloud/router'

import Vue from 'vue'
import App from './App.vue'
import TabMenu from './components/TabMenu'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: 'kmaapp',
      // You could also have named views at the top
      component: App,
      children: [{
        path: 'qlnd',
        component: TabMenu
      }]
    }
  ]
})

// router.push('kmaapp/qlnd')

// eslint-disable-next-line
__webpack_public_path__ = generateFilePath(appName, '', 'js/')

// bind to window
Vue.mixin({ methods: { t, n } })
//Vue.prototype.t = t
////Vue.prototype.n = n
// Vue.prototype.OC = OC
// Vue.prototype.OCA = OCA
// eslint-disable-next-line camelcase
// Vue.prototype.oc_userconfig = oc_userconfig

export default new Vue({
	router,
	el: '#content',
	render: h => h(App),
})
