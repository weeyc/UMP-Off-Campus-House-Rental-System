
//import NotFound from './components/NotFound';

import Register_Landlord from './components/ManageRegistrationUsers/Register_Landlord';
import Register_Student from './components/ManageRegistrationUsers/Register_Student';
import Tab_Staff_Users from './components/Layouts/Tab_Staff_Users';
import Manage_Student from './components/ManageRegistrationUsers/Manage_Student';
import Manage_Landlord from './components/ManageRegistrationUsers/Manage_Landlord';
import Manage_Staff from './components/ManageRegistrationUsers/Manage_Staff';
import Landing_Staff from './components/ManageRegistrationUsers/Landing_Staff';
import NotFound from './components/NotFound';




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
            path: '/staff',
            name: 'landing_staff',
            component: Landing_Staff,
        },
        {
            path: '/staff/manage-user',
            name: 'manage_user',
            component: Tab_Staff_Users,
            children: [
                {
                    default: Manage_Student,
                    path: '/staff/manage-user/student',
                    name: 'manage_student',
                    component: Manage_Student,
                },
                {
                    path: '/staff/manage-user/landlord',
                    name: 'manage_landlord',
                    component: Manage_Landlord,
                },
                {
                    path: '/staff/manage-user/staff',
                    name: 'manage_staff',
                    component: Manage_Staff,
                },


            ]
        },



    ]
}
