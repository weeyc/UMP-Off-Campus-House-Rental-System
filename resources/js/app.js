require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

// Vue.component('std-register',require('./components/Register_Student.vue').default);
// Vue.component('landlord-register',require('./components/Register_Landlord.vue'));

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});

