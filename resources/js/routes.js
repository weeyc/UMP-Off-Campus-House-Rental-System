const Register_Landlord = () => import(/* webpackChunkName: "Register_Landlord" */'./components/ManageRegistrationUsers/Register_Landlord');
const Register_Student = () => import(/* webpackChunkName: "Register_Student" */'./components/ManageRegistrationUsers/Register_Student');
const Tab_Staff_Users = () => import(/* webpackChunkName: "Tab_Staff_Users" */'./components/Layouts/Tab_Staff_Users');
const Manage_Student = () => import(/* webpackChunkName: "Manage_Student" */'./components/ManageRegistrationUsers/Manage_Student');
const Manage_Landlord = () => import(/* webpackChunkName: "Manage_Landlord" */'./components/ManageRegistrationUsers/Manage_Landlord');
const Profile_Edit = () => import(/* webpackChunkName: "Profile_Edit" */'./components/ManageRegistrationUsers/Profile_Edit');
const Profile_View = () => import(/* webpackChunkName: "Profile_View" */'./components/ManageRegistrationUsers/Profile_View');
const Manage_Staff = () => import(/* webpackChunkName: "Manage_Staff" */'./components/ManageRegistrationUsers/Manage_Staff');
const Landing_Staff = () => import(/* webpackChunkName: "Landing_Staff" */'./components/ManageRegistrationUsers/Landing_Staff');


const Dashboard_Landlord = () => import(/* webpackChunkName: "Landing_Staff" */'./components/ManageRegistrationUsers/Dashboard_Landlord');
const Dashboard_Student = () => import(/* webpackChunkName: "Landing_Staff" */'./components/ManageRegistrationUsers/Dashboard_Student');


const NotFound = () => import(/* webpackChunkName: "NotFound" */'./components/NotFound');


export default{
    mode: 'history',

//    linkActiveClass: 'active', // active class for non-exact links.
//    linkExactActiveClass: 'active', // active class for *exact* links.
    routes: [
        {
            path: '*',
            component: NotFound
        },

         // Staff Routes
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
                    path: '',
                    name: 'manage_student',
                    component: Manage_Student,
                },
                {
                    path: 'landlord',
                    name: 'manage_landlord',
                    component: Manage_Landlord,
                },
                {
                    path: 'staff',
                    name: 'manage_staff',
                    component: Manage_Staff,
                },
            ]
        },
        {
            path: '/staff/profile',
            name: 'profile',
            component: Profile_Edit,
        },
        {
            path: '/staff/view-profile/:role/:id',
            name: 'profile_view',
            component: Profile_View,
        },



        // Landlord Routes
        {
            path: '/landlord',
            name: 'dashboard_landlord',
            component: Dashboard_Landlord,
        },

           // Landlord Routes
           {
            path: '/student',
            name: 'dashboard_student',
            component: Dashboard_Student,
        },



    ]
}
