require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import Swal from 'sweetalert2'
window.Swal = Swal


//----------TOASTER-------------------//
import Toaster from 'v-toaster'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 5000})
// this.$toaster.success('Your toaster success message.', {timeout: 8000})
// this.$toaster.info('Your toaster info message.')
// this.$toaster.error('Your toaster error message.')
// this.$toaster.warning('Your toaster warning message.')
//----------TOASTER-------------------//




Vue.use(VueRouter);

Vue.component('std-app', require('./App_Student.vue').default);
Vue.component('landlord-app', require('./App_Landlord.vue').default);
Vue.component('staff-app', require('./App_Staff.vue').default);

Vue.component('nav-staff', require('./components/Layouts/Nav_Staff.vue').default);
Vue.component('foot-staff', require('./components/Layouts/Footer_Staff.vue').default);

//Vue.component('tab-user-staff', require('./components/Layouts/Tab_Staff_Users.vue').default);

//Vue.component('pagination', require('laravel-vue-pagination'));


Vue.component('landlord-register',require('./components/ManageRegistrationUsers/Register_Landlord.vue').default);
Vue.component('std-register', require('./components/ManageRegistrationUsers/Register_Student.vue').default);

//Vue.component('manage-std', require('./components/ManageRegistrationUsers/Manage_Student.vue').default);





const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});

