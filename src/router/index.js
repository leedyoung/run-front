import Vue from 'vue'
import VueRouter from 'vue-router'
import {dynamic} from './dynamic.js';
Vue.use(VueRouter)

var router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name: 'login',
            component:()=>import('@/view/login.vue')
        },
        {
            path:'/login',
            name: 'login',
            component:()=>import('@/view/login.vue')
        },
        ...dynamic
    ]
})
export default router