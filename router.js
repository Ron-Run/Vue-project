import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './src/components/home.vue';
import communicate from './src/components/communicate.vue';
import message from './src/components/message.vue';
import setting from './src/components/setting.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: "/", redirect: '/home' },
        { path: '/home', component: home },
        { path: '/setting', component: setting },
        { path: '/communicate', component: communicate },
        { path: '/message', component: message }
    ],
    linkActiveClass: "mui-active"
});

export default router