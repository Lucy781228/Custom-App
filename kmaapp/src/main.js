import { generateFilePath } from '@nextcloud/router'

import Vue from 'vue'
import VTooltip from 'v-tooltip'

import NavBar from './components/NavBar'
// import router from './router'

Vue.use(VTooltip, { defaultHtml: false })


// eslint-disable-next-line
__webpack_public_path__ = generateFilePath(appName, '', 'js/')

// bind to window
Vue.prototype.t = t
Vue.prototype.n = n
Vue.prototype.OC = OC
Vue.prototype.OCA = OCA
// eslint-disable-next-line camelcase
Vue.prototype.oc_userconfig = oc_userconfig

export default new Vue({
	el: '#content',
	render: h => h(NavBar),
})

