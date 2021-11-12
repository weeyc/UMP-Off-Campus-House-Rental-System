
//import NotFound from './components/NotFound';

import Register_Landlord from './components/ManageRegistrationUsers/Register_Landlord';
import Register_Student from './components/ManageRegistrationUsers/Register_Student';
import Home_Student from './components/ManageRegistrationUsers/Home_Student';
import Home_Staff from './components/ManageRegistrationUsers/Home_Staff';
import Home_landlord from './components/ManageRegistrationUsers/Home_landlord';



export default{
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes: [
        {
            path: '/registration-landlord',
            name: 'landlord_register',
            component:Register_Landlord,
        },

        {
            path: '/registration-student',
            name: 'registration_student',
            component: Register_Student,

        },
        {
            path: '/home-student',
            name: 'home_student',
            component: Home_Student,
        },
        {
            path: '/home-landlord',
            name: 'home_landlord',
            component: Home_landlord,
        },
        {
            path: '/home-staff',
            name: 'home_staff',
            component: Home_Staff,
        },


    ]
}
