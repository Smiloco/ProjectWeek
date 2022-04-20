import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../Login.vue'
import LandingPage from '../views/LandingPage.vue'

import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: LandingPage
    },
    { path: '/loginwithtoken', name: 'loginwithtoken', component: Login },
    { path: '/about', name: 'about', component: About },
    { path: '/products', name: 'products', component: Home },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router