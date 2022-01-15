import Axios from 'axios';
import { roundToNearestMinutes } from 'date-fns';

const Register_Landlord = () => import(/* webpackChunkName: "Register_Landlord" */'./components/ManageRegistrationUsers/Register_Landlord');
const Register_Student = () => import(/* webpackChunkName: "Register_Student" */'./components/ManageRegistrationUsers/Register_Student');
const Tab_Staff_Users = () => import(/* webpackChunkName: "Tab_Staff_Users" */'./components/Layouts/Tab_Staff_Users');
const Manage_Student = () => import(/* webpackChunkName: "Manage_Student" */'./components/ManageRegistrationUsers/Manage_Student');
const Manage_Tenant = () => import(/* webpackChunkName: "Manage_Tenant" */'./components/ManageRentalProperty/Manage_Tenant');
const Manage_Landlord = () => import(/* webpackChunkName: "Manage_Landlord" */'./components/ManageRegistrationUsers/Manage_Landlord');
const Profile_Edit = () => import(/* webpackChunkName: "Profile_Edit" */'./components/ManageRegistrationUsers/Profile_Edit');
const Profile_View = () => import(/* webpackChunkName: "Profile_View" */'./components/ManageRegistrationUsers/Profile_View');
const Manage_Staff = () => import(/* webpackChunkName: "Manage_Staff" */'./components/ManageRegistrationUsers/Manage_Staff');
const Landing_Staff = () => import(/* webpackChunkName: "Landing_Staff" */'./components/ManageRegistrationUsers/Landing_Staff');


const Dashboard_Landlord = () => import(/* webpackChunkName: "Landing_Staff" */'./components/ManageRegistrationUsers/Dashboard_Landlord');
const PropertyList_landlord = () => import(/* webpackChunkName: "PropertyList_landlord" */'./components/ManagePropertyList/PropertyList_landlord');
// const Add_Property = () => import(/* webpackChunkName: "Add_Property" */'./components/ManagePropertyList/Add_Property');
const Property_Landlord = () => import(/* webpackChunkName: "Property_Landlord" */'./components/ManagePropertyList/Property_Landlord');
const Room_Landlord = () => import(/* webpackChunkName: "Room_Landlord" */'./components/ManagePropertyList/Room_Landlord');

const ManageProperties_Staff = () => import(/* webpackChunkName: "ManageProperties_Staff" */'./components/ManagePropertyList/ManageProperties_Staff');



const Dashboard_Student = () => import(/* webpackChunkName: "Landing_Staff" */'./components/ManageRegistrationUsers/Dashboard_Student');
const BrowseRoom_Student = () => import(/* webpackChunkName: "BrowseRoom_Student" */'./components/ManagePropertyList/BrowseRoom_Student');
const View_Room_List = () => import(/* webpackChunkName: "View_Room_List" */'./components/ManagePropertyList/View_Room_List');
const Payment_Student = () => import(/* webpackChunkName: "Payment_Student" */'./components/ManagePayment/Payment_Student');
const Booking_Student = () => import(/* webpackChunkName: "Booking_Student" */'./components/ManagePayment/Booking_Student');
const Bills_Student = () => import(/* webpackChunkName: "Bills_Student" */'./components/ManagePayment/Bills_Student');
const Tab_Student_Payment = () => import(/* webpackChunkName: "Tab_Student_Payment" */'./components/Layouts/Tab_Student_Payment');
const RentalRoom_student = () => import(/* webpackChunkName: "RentalRoom_student" */'./components/ManageRentalProperty/RentalRoom_student');
const HousePlatform_Std = () => import(/* webpackChunkName: "HousePlatform_Std" */'./components/ManageRentalProperty/HousePlatform_Std');

const Tab_Landlord_Payment = () => import(/* webpackChunkName: "Tab_Landlord_Payment" */'./components/Layouts/Tab_Landlord_Payment');
const RentalRoom_Landlord = () => import(/* webpackChunkName: "RentalRoom_Landlord" */'./components/ManageRentalProperty/RentalRoom_Landlord');
const HousePlatform_Landlord = () => import(/* webpackChunkName: "HousePlatform_Landlord" */'./components/ManageRentalProperty/HousePlatform_Landlord');
const Payment_Landlord = () => import(/* webpackChunkName: "Payment_Landlord" */'./components/ManagePayment/Payment_Landlord');
const Booking_Landlord = () => import(/* webpackChunkName: "Booking_Landlord" */'./components/ManagePayment/Booking_Landlord');
const Bills_Landlord = () => import(/* webpackChunkName: "Bills_Landlord" */'./components/ManagePayment/Bills_Landlord');
const Property_Bills = () => import(/* webpackChunkName: "Property_Bills" */'./components/ManagePayment/Property_Bills');


const Chat = () => import(/* webpackChunkName: "Chat" */'./components/ManageMessenger/Chat');




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
            beforeEnter: (to, form, next)=>{
                var roling= '';
                Axios.get('/api/get_role').then((response)=>{
                    roling=response.data.roler
                    if(roling==3){
                        next()
                    }else {
                        window.location.href = '/forbidden'
                    }
                }).catch(()=> {
                    window.location.href = '/'})
            }

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
            path: '/staff/manage_tenants',
            name: 'Manage_Tenant',
            component: Manage_Tenant,
        },
        {
            path: '/staff/manage-user/view-profile/:role/:id',
            name: 'profile_view',
            component: Profile_View,
        },

        {
            path: '/staff/manage_properties',
            name: 'ManageProperties_Staff',
            component: ManageProperties_Staff,
        },
        {
            path: '/staff/manage_properties/property/:property_id',
            name: 'view_property',
            component: Property_Landlord,
        },
        {
            path: '/staff/manage_properties/property_list/:property_id/room/:room_id',
            name: 'room_staff',
            component: Room_Landlord,
        },
        {
            path: '/staff/chat',
            name: 'chat_staff',
            component: Chat,
            props: true,
        },



        // Landlord Routes
        {
            path: '/landlord',
            name: 'landlord_landing',
            component: Dashboard_Landlord,
            beforeEnter: (to, form, next)=>{
                var roling= '';
                Axios.get('/api/get_role').then((response)=>{
                    roling=response.data.roler
                    if(roling==2){
                        next()
                    }else {
                        window.location.href = '/forbidden'
                    }
                }).catch(()=> {
                    window.location.href = '/'})
            }
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
        // {
        //     path: '/landlord/add_property',
        //     name: 'add_property',
        //     component: Add_Property,
        // },
        {
            path: '/landlord/property_list/:property_id',
            name: 'property',
            component: Property_Landlord,
            props: true,
        },
        {
            path: '/landlord/property_list/:property_id/room/:room_id',
            name: 'room_landlord',
            component: Room_Landlord,
        },
        {
            path: '/landlord/rental_properties',
            name: 'RentalRoom_Landlord',
            component: RentalRoom_Landlord,
        },
        {
            path: '/landlord/rental_properties/house_platform/:id',
            name: 'HousePlatform_Landlord',
            component: HousePlatform_Landlord,
            props: true,
        },
        {
            path: '/landlord/property_list/browse-rooms/room_list/:id',
            name: 'view_room_list_land',
            component: View_Room_List,
        },
        {
            path: '/landlord/view-profile/:role/:id',
            name: 'land_profile_view',
            component: Profile_View,
        },
        {
            path: '/landlord/chat',
            name: 'chat_landlord',
            component: Chat,
            props: true,
        },
        {
            path: '/landlord/payment_report',
            name: 'land_payments',
            component: Tab_Landlord_Payment,
            children: [
                {
                    path: '',
                    name: 'payment_land',
                    component: Payment_Landlord,
                },
                {
                    path: 'bookings',
                    name: 'land_booking',
                    component: Booking_Landlord,
                },
                {
                    path: 'bills',
                    name: 'land_bills',
                    component: Bills_Landlord,
                },
                {
                    path: 'bills/property_bills/:id',
                    name: 'property_bills',
                    component: Property_Bills,
                    props: true,

                },
            ]
        },
             {
            path: '/student/chat',
            name: 'chat_std',
            component: Chat,
            props: true,
        },





           // Student Routes
        {
            path: '/student',
            name: 'landing_student',
            component: BrowseRoom_Student,
            beforeEnter: (to, form, next)=>{
                var roling= '';
                Axios.get('/api/get_role').then((response)=>{
                    roling=response.data.roler
                    if(roling==1){
                        next()
                    }else {
                        window.location.href = '/forbidden'
                    }
                }).catch(()=> {
                    window.location.href = '/'})
            }
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
                    path: 'bookings',
                    name: 'std_booking',
                    component: Booking_Student,
                },
                {
                    path: 'bills',
                    name: 'std_bills',
                    component: Bills_Student,
                },
            ]
        },
        {
            path: '/student/rental_room',
            name: 'RentalRoom_student',
            component: RentalRoom_student,
        },
        {
            path: '/student/chat',
            name: 'chat_std',
            component: Chat,
            props: true,
        },
        {
            path: '/student/rental_room/house_platform/:id',
            name: 'HousePlatform_Std',
            component: HousePlatform_Std,
            props: true,
        },




    ],
    // scrollBehavior (to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    //   }

}

