<template>
    <body class="flex flex-col h-screen" >

<!-- side bar -->
    <div class="flex flex-1 overflow-hidden">


         <div :class="[transition]" class=" transform  shadow  inset-y-0 left-0 h-auto  ease-in-out transition-none duration-75 bg-gradient-to-br from-cool-gray-900 to-bg-gradient-to-r-gray-600"  style="background-color: #2b2a33;">

             <router-link  :to="{name: 'landing_student'}" class="hidden focus:outline-none hover:text-indigo-200 focus:text-indigo-200 text-white sm:flex justify-start p-6 items-center space-x-3 w-full">
                  <div class="  row-span-2 justify-self-end animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="40" height="40"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#d97706"><path d="M86,14.33333c-1.91435,0.00025 -3.74903,0.76638 -5.09506,2.1276l-72.28255,63.07226c-0.9155,0.67554 -1.45577,1.74571 -1.45573,2.88347c0,1.97902 1.60431,3.58333 3.58333,3.58333h17.91667v57.33333c0,3.956 3.21067,7.16667 7.16667,7.16667h28.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-43h28.66667v43c0,3.956 3.21067,7.16667 7.16667,7.16667h28.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-57.33333h17.91667c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0.00004,-1.13776 -0.54023,-2.20792 -1.45573,-2.88347l-72.24056,-63.03027c-0.01394,-0.01406 -0.02794,-0.02805 -0.04199,-0.04199c-1.34603,-1.36123 -3.18071,-2.12736 -5.09506,-2.1276z"></path></g></g></svg>
                        </div>
                    <span class="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500      text-transparent bg-clip-text  text-2xl font-black tracking-wide ">UOCA</span>
                   <button   @click="$router.go(-1)" class="ml-24 mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 hover:text-yellow-700 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                    </button>
                    <button  @click="$router.go(1)" class="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 hover:text-yellow-700 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                    </button>
                </router-link >

            <router-link  :to="{name: 'profile_student'}" v-for= "user in userProfile" :key="user.id"  class="focus:outline-none focus:text-white  flex justify-between sm:w-auto items-center space-x-10 text-white mx-6 p-3 rounded focus:bg-yellow-800 bg-yellow-700 hover:bg-yellow-800">
                    <div class="flex justify-start sm:w-auto items-center space-x-2">
                        <div>
                            <img class="rounded-full h-10 w-10 object-cover" :src="'/images/Profile/'+user.pic" alt="Avatar" />
                        </div>
                        <div class="flex flex-col justify-items-start text-left space-y-1">
                            <p class="text-base leading-4 text-white">{{ user.name }}</p>
                            <p class="text-xs leading-3 text-indigo-200">{{ user.email }}</p>
                        </div>
                    </div>
            </router-link >

            <div class="mt-4 flex flex-col px-6 justify-start items-center  w-full">
                 <router-link  :to="{name: 'BrowseRoom_Student'}" active-class="active" :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4 ">Browse Rooms</p>
                    </router-link>
                 <button :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4">My Rental Property</p>
                    </button>
                <button :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p class="text-base leading-4">My Payment</p>
                    </button>

                  <button :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 11H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 16H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4">Report</p>
                    </button>
            </div>
            <div class="px-6 my-4 w-full">
                <hr class="border-yellow-500 w-full" />
            </div>
            <div class="mt-4 px-6 flex justify-start w-full items-start">
                <p class="text-base leading-4 text-yellow-500">Shortcuts</p>
            </div>
            <div class="mt-4 flex flex-col px-6 justify-start items-center w-full">
                 <button :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4">Chat</p>
                    </button>
                      <button :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4">Notifications</p>
                    </button>
                  <a href="/logout" :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 12H21M21 12L18 9M21 12L18 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4">Logout</p>
                    </a>

            </div>

        </div>



    <div class="flex flex-1 flex-col">
        <!-- top bar -->
        <div class=" rounded-r shadow  flex justify-between w-full p-6 items-center border-b border-transparent sm:border-gray-200 bg-gradient-to-br from-cool-gray-900 to-bg-gradient-to-r-gray-600" style="background-color: #23252f;">
              <div  class="flex justify-center items-center">
                <button  @click="showNav()" class="">
                        <svg class="text-yellow-400 hover:text-yellow-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
            </div>
             <router-link  :to="{name: 'student_landing'}" class="flex text-yellow-400 text-2xl font-black tracking-wide hover:text-yellow-500 focus:outline-none focus:text-yellow-500 justify-between items-center space-x-3">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                     <span>UMP Off-Campus Accomodation</span>
             </router-link >
            <div  class="flex justify-center items-center">
                 <router-link  :to="{name: 'profile_student'}" class=" bg-yellow-600 hover:bg-yellow-700 text-xs text-white px-3 py-3 rounded-md">
                       I'm Student
                </router-link >
            </div>
        </div>
        <!-- top bar -->



        <!-- Content -->
                <div class="bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400  overflow-y-auto" >
                    <router-view :user_id="user_id" :role="role"  class="min-h-screen"></router-view>
                     <foot-std class="bottom-0 w-full"/>
                </div>






        <!-- Content -->

     </div>

      </div>

    </body>
</template>

<script>
export default {
        props: {
            user_id: Number,
            role: Number
        },

    data() {

        return {
             userProfile: [],

            transition:'',
            indicator: false,
            hover:'text-gray-100 hover:text-yellow-500 focus:text-yellow-500 border-l-4 pl-4',
        }
    },
    methods: {
        showNav() {
            this.indicator = ! this.indicator
            if(this.indicator==true){
                this.transition = 'fixed -translate-x-full'
            }else{
                this.transition = ''
            }
        },
        getProfile(){
            axios.get('/api/get_profile/'+this.user_id+'/'+this.role).then((response)=>{
                this.userProfile=response.data.data;
                console.warn(this.userProfile.data);
                }).catch((errors)=> {console.log(errors)})
        },


    },
    mounted:  function(){
            this.getProfile();
            this.$root.$on('refreshData', data => {
            this.getProfile();
          });
    },
};
</script>

<style scoped>
.active{
--tw-text-opacity: 1;
color: rgba(245, 158, 11, var(--tw-text-opacity));
}
</style>
