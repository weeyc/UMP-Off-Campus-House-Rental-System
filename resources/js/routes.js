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
const PropertyList_landlord = () => import(/* webpackChunkName: "PropertyList_landlord" */'./components/ManagePropertyList/PropertyList_landlord');
const Add_Property = () => import(/* webpackChunkName: "Add_Property" */'./components/ManagePropertyList/Add_Property');
const Property_Landlord = () => import(/* webpackChunkName: "Property_Landlord" */'./components/ManagePropertyList/Property_Landlord');
const Room_Landlord = () => import(/* webpackChunkName: "Room_Landlord" */'./components/ManagePropertyList/Room_Landlord');

const ManageProperties_Staff = () => import(/* webpackChunkName: "ManageProperties_Staff" */'./components/ManagePropertyList/ManageProperties_Staff');



const Dashboard_Student = () => import(/* webpackChunkName: "Landing_Staff" */'./components/ManageRegistrationUsers/Dashboard_Student');
const BrowseRoom_Student = () => import(/* webpackChunkName: "BrowseRoom_Student" */'./components/ManagePropertyList/BrowseRoom_Student');
const View_Room_List = () => import(/* webpackChunkName: "View_Room_List" */'./components/ManagePropertyList/View_Room_List');
const Payment_Student = () => import(/* webpackChunkName: "Payment_Student" */'./components/ManagePayment/Payment_Student');
const Booking_Student = () => import(/* webpackChunkName: "Booking_Student" */'./components/ManagePayment/Booking_Student');
const Tab_Student_Payment = () => import(/* webpackChunkName: "Tab_Student_Payment" */'./components/Layouts/Tab_Student_Payment');
const RentalRoom_student = () => import(/* webpackChunkName: "RentalRoom_student" */'./components/ManageRentalProperty/RentalRoom_student');
const HousePlatform_Std = () => import(/* webpackChunkName: "HousePlatform_Std" */'./components/ManageRentalProperty/HousePlatform_Std');




const NotFound = () => import(/* webpackChunkName: "NotFound" */'./components/NotFound');


export default{
    props: {
        user_id: Number,
        role: Number
    },
    mode: 'history',
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

        {
            path: '/staff/manage_properties',
            name: 'ManageProperties_Staff',
            component: ManageProperties_Staff,
        },
        {
            path: '/staff/property/:property_id',
            name: 'view_property',
            component: Property_Landlord,
        },



        // Landlord Routes
        {
            path: '/landlord',
            name: 'landlord_landing',
            component: Dashboard_Landlord,
        },
        {
            path: '/landlord/dashboard',
            name: 'dashboard_landlord',
            component: Dashboard_Landlord,
        },
        {
            path: '/landlord/profile',
            name: 'profile_landlord',
            component: Profile_Edit,
        },
        {
            path: '/landlord/property_list',
            name: 'property_list',
            component: PropertyList_landlord,
        },
        {
            path: '/landlord/add_property',
            name: 'add_property',
            component: Add_Property,
        },
        {
            path: '/landlord/property/:property_id',
            name: 'property',
            component: Property_Landlord,
            props: true,
        },
        {
            path: '/landlord/property/:property_id/room/:room_id',
            name: 'room_landlord',
            component: Room_Landlord,
        },






           // Student Routes
           {
            path: '/student',
            name: 'landing_student',
            component: BrowseRoom_Student,
        },
        {
            path: '/student/browse-rooms',
            name: 'BrowseRoom_Student',
            component: BrowseRoom_Student,
        },
        {
            path: '/student/profile',
            name: 'profile_student',
            component: Profile_Edit,
        },
        {
            path: '/student/browse-rooms/room_list/:id',
            name: 'view_room_list',
            component: View_Room_List,
        },
        {
            path: '/student/view-profile/:role/:id',
            name: 'std_profile_view',
            component: Profile_View,
        },
        {
            path: '/student/payments',
            name: 'std_payments',
            component: Tab_Student_Payment,
            children: [
                {
                    path: '',
                    name: 'payment_std',
                    component: Payment_Student,
                },
                {
                    path: 'booking',
                    name: 'std_booking',
                    component: Booking_Student,
                },
            ]
        },
        {
            path: '/student/rental_room',
            name: 'RentalRoom_student',
            component: RentalRoom_student,
        },
        {
            path: '/student/rental_room/house_platform',
            name: 'HousePlatform_Std',
            component: HousePlatform_Std,
            props: true,
        },




    ],


}

