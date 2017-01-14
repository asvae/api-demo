import api from './instances/api_demo_3'
import apiCors from './instances/cors-api'

export default function (Vue) {
    Vue.prototype.$api_demo_3 = api
    // Vue.prototype.$api_cors_1 = apiCors(Vue)
}
