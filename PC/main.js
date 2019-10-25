import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import uniRequest from './http/http'
import * as filters from './filters' // global filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
Vue.prototype.$store = store
Vue.prototype.$BaseUrl = "https://levy.chidict.com"
Vue.prototype.$ajax = uniRequest
Vue.prototype.$url = (url) => {
    uni.navigateTo({
        url,
    })
}
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()