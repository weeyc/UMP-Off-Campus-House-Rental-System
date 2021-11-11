
//import NotFound from './components/NotFound';

import Register_Landlord from './components/ManageRegistrationUsers/Register_Landlord';
import Register_Student from './components/ManageRegistrationUsers/Register_Student';
//import Login from './components/ManageRegistrationUsers/Login';
import Home_Student from './components/ManageRegistrationUsers/Home_Student';



export default{
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes: [

        // {
        //     path: '/',
        //     component: Login,
        //     name: "Login"
        // },

        {
            path: '/registration-landlord',
            name: 'landlord_register',
            component:Register_Landlord,

        },
        {

            path: '/registration-student',
            name: 'registration',
            component: Register_Student,

        },
        {
            path: '/home',
            name: 'home_student',
            component: Home_Student,

        },


    ]
}
