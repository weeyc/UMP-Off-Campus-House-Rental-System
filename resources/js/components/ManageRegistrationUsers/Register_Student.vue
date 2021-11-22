<template>

   <div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-green-200 to-green-500" >

    <section class="flex items-stretch h-screen w-screen text-white ">
        <!-----------------------------------left Picture ---------------------------->
        <div class="relative items-center hidden w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex" style="background-image: url(/images/People/Students.jpg);">
            <div class="absolute inset-0 z-0 bg-black opacity-25"></div>
                <div class="z-10 w-full px-24 font-black ">
                    <p class="text-6xl font-roboto tracking-wide bg-black bg-opacity-0 italic "> Register as  <br> Student</p>
                    <p class="my-4 text-3xl font-roboto bg-black bg-opacity-5 italic">Search your rental house in more easy and secure way</p>
             </div>
        </div>
        <!-----------------------------------left Picture ---------------------------->


        <!-----------------------------------Right Form ---------------------------->
        <div class="z-0 flex items-center justify-center w-full px-0 text-center lg:w-1/2 md:px-16" style="background-color: #161616;">

          <!-----------------------------------Navigation Student/Landlord ---------------------------->
            <div class="absolute top-0 flex justify-right p-4 space-x-4    ">
                <div class="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-coolGray-800 dark:text-coolGray-100">

                    <router-link  to='/registration-student' exact class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-coolGray-400 dark:text-coolGray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span class="hover:underline hover:text-yellow-400">Student</span>
                    </router-link>

                    <router-link to='/registration-landlord' class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-coolGray-400 dark:text-coolGray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span class="hover:underline hover:text-blue-400" >Landlord</span>
                    </router-link>
                </div>
            </div>
            <!-----------------------------------Navigation Student/Landlord ---------------------------->

            <div class="z-auto w-full">
                     <div class="grid grid-row-2 grid-flow-col gap-x-2.5 ">
                        <div class="  row-span-2 justify-self-end animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="96" height="96"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#d97706"><path d="M86,14.33333c-1.91435,0.00025 -3.74903,0.76638 -5.09506,2.1276l-72.28255,63.07226c-0.9155,0.67554 -1.45577,1.74571 -1.45573,2.88347c0,1.97902 1.60431,3.58333 3.58333,3.58333h17.91667v57.33333c0,3.956 3.21067,7.16667 7.16667,7.16667h28.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-43h28.66667v43c0,3.956 3.21067,7.16667 7.16667,7.16667h28.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-57.33333h17.91667c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0.00004,-1.13776 -0.54023,-2.20792 -1.45573,-2.88347l-72.24056,-63.03027c-0.01394,-0.01406 -0.02794,-0.02805 -0.04199,-0.04199c-1.34603,-1.36123 -3.18071,-2.12736 -5.09506,-2.1276z"></path></g></g></svg>
                        </div>
                        <div class=" row-span-1 "> <h1 class="text-4xl text-ump-green font-oswald font-bold tracking-wide text-left">UMP </h1></div>
                        <div class=" row-span-1 "><h1 class="text-4xl text-ump-green font-oswald font-bold tracking-wide text-left">Off-Campus Housing</h1></div>
                      </div>



             <div  class="w-full px-6 mx-auto sm:w-2/3 lg:px-0">
                    <div class="pt-1 pb-2">
                        <input type="text"  placeholder="Name" name="name" class="block w-full p-4 text-lg bg-black rounded-sm" v-model="form.name"  >
                        <span class="flex text-red-500">{{ errors.get('name')}}</span>
                    </div>
                    <div class="pt-1 pb-2">
                        <input type="email"  placeholder="Email"  name="email" class="block w-full p-4 text-lg bg-black rounded-sm" v-model="form.email" >
                        <span class="flex text-red-500">{{ errors.get('email')}}</span>
                    </div>
                    <div class="pt-1 pb-2">
                        <input class="block w-full p-4 text-lg bg-black rounded-sm" type="password" name="password" placeholder="Password" v-model="form.password" >
                         <span class="flex text-red-500">{{ errors.get('password')}}</span>
                    </div>
                     <div class="pt-1 pb-2">
                        <input class="block w-full p-4 text-lg bg-black rounded-sm" type="text" name="phone_num" placeholder="Phone Number" v-model="form.phone_num" >
                         <span class="flex text-red-500">{{ errors.get('phone_num')}}</span>
                    </div>
                        <div class="pt-1 pb-2">
                        <select class="block w-full p-4 text-lg bg-black rounded-lg" name="gender" v-model="form.gender" required >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div class="px-4 pt-4 pb-2">
                        <button  @click.prevent="saveForm"  type="submit"  class="block w-full p-4 text-lg uppercase rounded-full  bg-yellow-600 hover:bg-yellow-700 focus:outline-none">sign Up</button>
                    </div>

             </div>

                <p class="px-6 font-nunito text-center ">Already have an account?
                    <a href="/"  class="hover:underline hover:text-yellow-400">Sign-in</a>
                </p>
            </div>


<!-- px-5 py-4 border-t footer bg-base-200 text-base-content border-base-300 absolute bottom-0 flex justify-center p-4 space-x-4 text-center -->

                    <div class="  px-5 py-4 border-t footer bg-base-200 text-base-content border-base-300 absolute bottom-0 flex justify-center p-4 space-x-4 text-center">
                        <span>
                             <p>Copyright © 2021 - All right reserved by Weeyc</p>
                        </span>
                     </div>


        </div>
    </section>
 </div>

</template>

<script>

class Errors{
    constructor(){
        this.errors = {};
    }
    get(field){
        if(this.errors[field]){
            return this.errors[field][0];
        }
    }
    record(errors){
        this.errors = errors.errors;
    }
}
export default {

    data(){
        return{
            form:{
                name: '',
                email: '',
                password: '',
                gender: '',
                phone_num: '',
            },
            //name:'',
            errors: new Errors()

        }
    },
    methods:{
        saveForm(){
                axios.post('/api/register_std', this.form).then(() =>{
                  this.$toaster.success('Student account created successfully!')
                  window.location.href = '/'
                }).catch(error =>this.errors.record(error.response.data));



                // .catch(error => {
                //     if (error.response) {
                //     console.log(error.response.data);
                //     }});

                //.catch(error =>this.errors.record(error.response.data));


//                 .catch(function (error) {
//                 if (error.response) {
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx
//                 console.warn(error.response.data.data);
//                 this.errors.record(error.response.data.data)
//     }
//   });




                //




           // console.log('This button is pressed')


            // For checking data at console log//
            //console.warn(this.form);

               //this.$router.push('/')
                //  this.$router.push({ name: "Login"});

        },


    }

}
</script>
