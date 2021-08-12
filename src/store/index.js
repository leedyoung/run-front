import {dynamic} from '@/router/dynamic.js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        routes:dynamic
    }
})
export default store