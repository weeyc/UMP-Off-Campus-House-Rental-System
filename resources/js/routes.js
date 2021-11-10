import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
//import NotFound from './components/NotFound';
import Register_Landlord from './components/ManageRegistrationUsers/Register_Landlord';
import Register_Student from './components/ManageRegistrationUsers/Register_Student';
import Login from './components/ManageRegistrationUsers/Login';
import Home_Student from './components/ManageRegistrationUsers/Home_Student';


export default{
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes: [

        {
            path: '/',
            component: Login,
            name: "Login"
        },
        {
            path: '/about',
            component: About

        },
        {
            path: '/landlord',
            component:Register_Landlord,

        },
        {
            name: 'student',
            path: '/student',
            component: Register_Student,

        },
        {
            path: "/home",
            name: "Home_Student",
            component: Home_Student,
        //    beforeEnter: (to, form, next) =>{
        //        axios.get('/api/athenticated').then(()=>{
        //            next()
        //        }).catch(()=>{
        //            return next({ name: 'Login'})
        //        })
        //    }

          }

    ]
}
