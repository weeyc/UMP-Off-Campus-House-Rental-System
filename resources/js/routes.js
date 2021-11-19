
//import NotFound from './components/NotFound';

import Register_Landlord from './components/ManageRegistrationUsers/Register_Landlord';
import Register_Student from './components/ManageRegistrationUsers/Register_Student';
import Tab_Staff_Users from './components/Layouts/Tab_Staff_Users';
import Manage_Student from './components/ManageRegistrationUsers/Manage_Student';
import NotFound from './components/NotFound';



import Home_Student from './Home_Student';
import Home_Staff from './Home_Staff';
import Home_landlord from './Home_landlord';




export default{
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
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
        {
            path: '/home-staff/manage-user',
            name: 'manage_user',
            component: Tab_Staff_Users,
            children: [
                {
                    path: 'student',
                    name: 'manage_student',
                    component: Manage_Student,
                }


            ]
        },



    ]
}
