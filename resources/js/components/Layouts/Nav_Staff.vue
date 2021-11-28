<template>
    <nav class=" shadow"  style="background-image: url(/images/Background/Sunrise.jpg);" v-cloak>
    <!-- style="background-color: #131c21" -->
        <div class="mx-auto container px-6 py-2 xl:py-0">
            <div class="flex items-center justify-between">
                <div class="inset-y-0 left-0 flex items-center xl:hidden">
                    <div class="relative flex items-center justify-between p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">

                        <div class="visible xl:hidden">
                            <ul class="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden ">
                                <li class="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                            <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                            <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                            <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                        </svg>
                                        <span class="ml-2 font-bold">Manage Property List</span>
                                    </div>
                                </li>
                                <li class="xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" @click="dropdownHandler($event)">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                        </svg>
                                        <span class="ml-2 font-bold">Manage Users</span>
                                    </div>
                                </li>
                                <li class="xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                        <circle cx="12" cy="12" r="9"></circle>
                                    </svg>
                                    <span class="ml-2 font-bold">Manage Rental Properties</span>
                                </li>
                                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <div v-for= "user in userProfile" :key="user.id"  class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                            <img class="rounded h-10 w-10 object-cover" :src="'/images/Profile/'+user.pic" alt="logo" />

                                        </div>
                                        <p class="text-sm ml-2 cursor-pointer">Jane Doe</p>
                                        <div class="sm:ml-2 text-white relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="7" r="4" />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                        <span class="ml-2">Profile</span>
                                    </div>
                                </li>
                            </ul>
                            <svg @click="MenuHandler($event, true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="8" x2="20" y2="8"></line>
                                <line x1="4" y1="16" x2="20" y2="16"></line>
                            </svg>
                            <div class="hidden close-m-menu text-gray-700" @click="MenuHandler($event, false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                 <router-link  :to="{name: 'landing_staff'}"  class="inline-flex items-center" >

                       <div class="  row-span-2 justify-self-end animate-bounce">
                           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="40" height="40"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6366f1"><path d="M86,14.33333c-1.91435,0.00025 -3.74903,0.76638 -5.09506,2.1276l-72.28255,63.07226c-0.9155,0.67554 -1.45577,1.74571 -1.45573,2.88347c0,1.97902 1.60431,3.58333 3.58333,3.58333h17.91667v57.33333c0,3.956 3.21067,7.16667 7.16667,7.16667h21.5c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-43h43v43c0,3.956 3.21067,7.16667 7.16667,7.16667h21.5c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-57.33333h17.91667c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0.00004,-1.13776 -0.54023,-2.20792 -1.45573,-2.88347l-27.21094,-23.73958v-19.96029c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v7.44661l-30.69629,-26.77702c-0.01394,-0.01406 -0.02794,-0.02805 -0.04199,-0.04199c-1.34603,-1.36123 -3.18071,-2.12736 -5.09506,-2.1276z"></path></g></g></svg>
                        </div>
                        <span class="ml-2 font-poppins text-xl font-bold tracking-wide text-ump-green" >UMP Off-Campus Housing</span>
               </router-link>
                </div>
                <div class="flex ">
                    <div class="hidden xl:flex md:mr-6 xl:mr-16 ">
                        <a href="javascript: void(0)"  class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700  hover:bg-indigo-900 focus:bg-indigo-900 focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                                <svg class="h-6 w-6 text-pink-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                                </svg>
                            </span>
                                <span class="font-poppins text-base text-pink-300">Manage Property List</span>
                        </a>
                        <router-link  :to="{ path: '/staff/manage-user'}" active-class="active" class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700  hover:bg-indigo-900 focus:bg-indigo-900 focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                                <svg class="h-6 w-6 text-pink-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </span>
                              <span class="font-poppins text-base  text-pink-300">Manage Users</span>
                        </router-link>
                        <a href="javascript: void(0)" class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-indigo-900 focus:bg-indigo-900 focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                                <svg class="h-6 w-6 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                            </span>
                              <span class="font-poppins text-base text-pink-300">Manage Rental Properties</span>
                        </a>

                    </div>
                    <div class="hidden xl:flex items-center">
                        <div class="relative md:mr-6 my-2">
                   <router-link  :to="{name: 'profile'}" class="focus:outline-none bg-pink-200 border-gray-300 border
                            transition duration-150 ease-in-out active:bg-pink-100 rounded text-gray-600 px-5 py-2 text-xs">I'm a Staff</router-link>
                        </div>
                        <div class="ml-6 relative">
                            <div class="flex items-center relative" @click="dropdownHandler($event)">
                                <ul class="p-2 w-40 border-r bg-red absolute rounded right-0 shadow top-0 mt-16 hidden">
                                    <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                         <router-link  :to="{name: 'profile'}" class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="7" r="4" />
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                            </svg>
                                            <span class="ml-2 ">My Profile</span>

                                        </router-link>
                                    </li>
                                    <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="12" r="9" />
                                            <line x1="12" y1="17" x2="12" y2="17.01" />
                                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                        </svg>
                                        <span class="ml-2">Help Center</span>
                                    </li>
                                    <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <a href="/logout"><span class="ml-2">Log Out</span></a>
                                    </li>
                                </ul>
                                <div  v-for= "user in userProfile" :key="user.id" class="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                    <img class="rounded-full h-10 w-10 object-cover" :src="'/images/Profile/'+user.pic" alt="logo" />
                                </div>

                                <div class="ml-2 text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </nav>
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
        };
    },
    methods: {
        dropdownHandler(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },

        MenuHandler(el, val) {
            let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
            let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
            let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
            if (val) {
                MainList.classList.remove("hidden");
                el.currentTarget.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            } else {
                showIcon.classList.remove("hidden");
                MainList.classList.add("hidden");
                el.currentTarget.classList.add("hidden");
            }
        },

        getProfile(){
            axios.get('/api/get_profile/'+this.user_id+'/'+this.role).then((response)=>{
                this.userProfile=response.data.data;
                console.warn(this.userProfile.data);
                }).catch((errors)=> {console.log(errors)})
            },
    },
    mounted: function(){
            this.getProfile();
            this.$root.$on('refreshData', data => {
             this.getProfile();
          });
    },

};
</script>

<style scoped>
.active{
    --tw-bg-opacity: 1;
background-color: rgba(49, 46, 129, var(--tw-bg-opacity));
}
</style>
