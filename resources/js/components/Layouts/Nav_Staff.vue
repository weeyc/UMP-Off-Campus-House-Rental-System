<template>
    <nav class="shadow"  style="background-image: url(/images/Background/Sunrise.jpg);" v-cloak>


    <!-- style="background-color: #131c21" -->
        <div class="mx-auto container px-6 py-2 xl:py-0">
            <div class="flex items-center justify-between">
                <div class="inset-y-0 left-0 flex items-center xl:hidden">
                    <div class="relative flex items-center justify-between p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                        <!-- responsive hide dropdown -->
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
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"> hello</button>
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
                                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#df2d8a"><path d="M86,14.33333c-1.91435,0.00025 -3.74903,0.76638 -5.09506,2.1276l-72.28255,63.07226c-0.9155,0.67554 -1.45577,1.74571 -1.45573,2.88347c0,1.97902 1.60431,3.58333 3.58333,3.58333h17.91667v57.33333c0,3.956 3.21067,7.16667 7.16667,7.16667h21.5c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-43h43v43c0,3.956 3.21067,7.16667 7.16667,7.16667h21.5c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-57.33333h17.91667c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0.00004,-1.13776 -0.54023,-2.20792 -1.45573,-2.88347l-27.21094,-23.73958v-19.96029c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v7.44661l-30.69629,-26.77702c-0.01394,-0.01406 -0.02794,-0.02805 -0.04199,-0.04199c-1.34603,-1.36123 -3.18071,-2.12736 -5.09506,-2.1276z"></path></g></g>
                            </svg>
                        </div>
                        <span  class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text   ml-2 font-poppins text-xl font-bold tracking-wide " >UMP Off-Campus Housing</span>
               </router-link>
                </div>
                <div class="flex ">
                    <div class="hidden xl:flex md:mr-6 xl:mr-16 ">
                          <router-link  :to="{name: 'ManageProperties_Staff'}"   active-class="active" class="flex px-5 items-center py-6 leading-5 text-base  text-pink-200  hover:text-pink-500  transition duration-150 ease-in-out hover:border-gray-700 border-transparent border-b-4 hover:border-current">
                            <span class="mr-2">
                                <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                                </svg>
                            </span>
                                <span>Manage Property List</span>
                        </router-link>
                        <router-link  :to="{ path: '/staff/manage-user'}" active-class="active" class="flex px-5 text-base  text-pink-200 items-center py-6 leading-5  hover:text-pink-500 transition duration-150 ease-in-out hover:border-gray-700 border-transparent border-b-4 hover:border-current">
                           <!-- class=" duration-650 hover:border-core hover:bg-montana  transition ease-in-out transform border-t-2 border-transparent" -->
                            <span class="mr-2">
                                <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </span>

                              <span>Manage Users</span>
                        </router-link>
                     <router-link  :to="{name: 'Manage_Tenant'}" active-class="active" class="flex px-5 items-center py-6 leading-5 text-base text-pink-200  hover:text-pink-500 transition duration-150 ease-in-out hover:border-gray-700 border-transparent border-b-4 hover:border-current">
                            <span class="mr-2">
                                <svg class="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                            </span>
                              <span>Manage Tenants</span>
                        </router-link>


                    </div>




                    <div class="hidden xl:flex items-center ">
                        <button  @click="toggleNoti =! toggleNoti; notificationHandler(true); markAsRead() " class="focus:outline-none flex jusitfy-start  py-3 items-center">
                            <svg class="h-8 w-8 text-pink-200 hover:text-pink-500 transition duration-150 ease-in-out"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                            <span v-if="unreadNotifications[0]!=undefined" class="badge bg-pink-500 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm">{{ unreadNotifications.length }}</span>
                      </button>
                        <router-link  :to="{name: 'chat_staff'}" active-class="active"  class="ml-2 focus:outline-none flex jusitfy-start  py-3 items-center">
                            <svg class="h-8 w-8 text-pink-200 hover:text-pink-500 transition duration-150 ease-in-out"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                            </svg>
                            <span  v-if="totalNotifications!=0" class="badge bg-pink-500 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm">{{totalNotifications}}</span>
                        </router-link>
                        <div class="relative md:mr-6 ml-10 my-2">
                            <router-link  :to="{name: 'profile'}" class="focus:outline-none bg-pink-100 border-gray-300 border
                                 transition duration-150 ease-in-out hover:text-pink-500 rounded text-gray-600 px-5 py-2 text-xs">
                                 I'm a Staff
                            </router-link>
                        </div>

                        <!-- Dropdown menu -->
                        <div class="ml-6 relative shadow-xl">
                            <div class="flex items-center relative" @click="dropdownHandler($event)"  >
                                <ul class="w-52 p-2 border-r bg-pink-100 absolute rounded right-0 top-0 shadow mt-16 hidden overflow-hidden z-10 ">

                                <div v-for= "user in userProfile" :key="user.id" class="cursor-pointer flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <img class="flex-shrink-0 object-cover mx-1 rounded-full w-7 h-7" :src="'/images/Profile/'+user.pic" alt="logo">
                                    <div class="mx-1">
                                        <h1 class="text-xs font-semibold text-gray-700">{{ user.name }}</h1>
                                        <p class="text-xs text-gray-500">{{ user.email }}</p>
                                    </div>
                                </div>

                                <hr class="border-gray-200 dark:border-gray-700 ">

                                 <hr class="border-gray-200 dark:border-gray-700 ">
                                    <li class="cursor-pointer text-pink-500 text-sm leading-3 tracking-normal py-2">
                                         <router-link  :to="{name: 'profile'}" class="flex items-center px-3 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-pink-500 dark:hover:bg-pink-500">
                                            <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="currentColor"></path>
                                                <path d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z" fill="currentColor"></path>
                                            </svg>
                                            <span class="ml-2 ">My Profile</span>

                                        </router-link>
                                    </li>
                                     <hr class="border-gray-200 dark:border-gray-700 ">
                                    <li class="cursor-pointer text-pink-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <a  href="/logout" class="flex items-center px-3 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-pink-500 dark:hover:bg-pink-500">
                                            <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                                            </svg>
                                            <span class="ml-2">Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                                <div  v-for= "user in userProfile" :key="user.id" class="cursor-pointer flex text-sm border-2 border-transparent rounded-full ">
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
             <!-- notification -->
<div class="flex justify-items-end justify-end z-50">
     <div class="w-full h-full bg-gray-800 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 hidden z-50" id="chec-div" ref="chec">
      <div class="w-full absolute z-50 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="notification" ref="notification">
        <div class=" 2xl:w-4/12 bg-gray-200 h-screen overflow-y-auto p-8 absolute right-0 " >
          <div class="flex items-center justify-between">
            <p tabindex="0" class=" focus:outline-none text-2xl font-semibold leading-6 text-gray-800 " > Notifications </p>
            <button role="button" aria-label="close modal" class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md cursor-pointer " @click="notificationHandler(false)" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M18 6L6 18" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" /> <path d="M6 6L18 18" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" /> </svg>
            </button>
          </div>
 <!-- no notification -->
           <div v-if="notifications.length==0" class="bg-blue-200 border-yellow-600 text-gray-600  p-10 mt-7 " role="alert">
                   <center><p class="font-bold text-base"> You don't have any notifications yet.</p></center>
            </div>
        <div v-else class="longsheet">
            <div v-for="(noti,index) in notifications" :key="index">
                <h2 tabindex="0" class=" focus:outline-none text-sm leading-normal pt-8 border-b pb-2 border-gray-500 text-gray-600 " >
                    {{  dateToFromNowDaily(noti[0].created_at) }}
                 </h2>
                    <div v-for="(n,index) in noti" :key="index+1">

              <div id="PropertyRegistration" v-if='n.type==="App\\Notifications\\PropertyStatusNotification"'  class="w-full p-4 mt-4 bg-red-200 rounded flex items-center shadow">
                <div  class="flex">
                    <div><img @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_std.landlord_id,2)" class="cursor-pointer rounded-full h-10 w-10 object-cover" :src="'/images/Profile/'+n.data.Sender_std.landlord_pic" alt="Avatar" /></div>
                    <div class="pl-3">
                    <div tabindex="0" class="focus:outline-none text-sm leading-snug">
                        <div class="leading-snug" ><span @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_std.landlord_id,2)" class="text-indigo-700 cursor-pointer hover:underline font-medium">{{ n.data.Sender_std.landlord_name }} </span> is applied for </div>
                        <span class="text-indigo-700 hover:text-indigo-800 underline cursor-pointer font-medium" @click="notificationHandler(false); redirectFromNoti(1)">Property ID: {{ n.data.Content.property_id }} </span> registration
                    </div>
                    <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500 mt-2" > {{ moment( n.created_at ).fromNow() }} </p>
                    </div>
                </div>
            </div>
         </div>

   </div>

        <div class="flex items-center justify-between">
        <hr class="w-full" />
        <p tabindex="0" class=" focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-16 text-gray-500 " >
            Thats it for now :)
        </p>
        <hr class="w-full" />
        </div>
</div>
      </div>
      <!-- top 2 -->
         </div>
     </div>
      <!-- top 2 -->
  </div>

    </nav>
</template>

<script>
import moment from "moment";
export default {

          props: {
            user_id: Number,
            role: Number
        },


    data() {
        return {
            userProfile: [],
            roling: '',
            notifications: [],
            notificationsCounts: [],
            moment: moment,
            toggleNoti: false,
            conversations: [],
            totalNotifications: '',
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
           notificationHandler(flag) {
            let notification = this.$refs.notification;
            let checdiv = this.$refs.chec;

            if (!flag) {
                notification.classList.add("translate-x-full");
                notification.classList.remove("translate-x-0");
                setTimeout(function () {
                checdiv.classList.add("hidden");
                }, 500);
                flag = true;

            } else {
                setTimeout(function () {
                notification.classList.remove("translate-x-full");
                notification.classList.add("translate-x-0");
                }, 50);
                checdiv.classList.remove("hidden");
                flag = false;

            }


            },
                  getNotifications(){
            axios.get('/api/get_notifications/'+this.user_id+'/'+this.role).then((response)=>{
               this.notifications=response.data.noti
                console.warn(this.notifications.data);
                }).catch((errors)=> {console.log(errors)})
        },
        getNotificationsCount(){
            axios.get('/api/get_notifications_counts/'+this.user_id+'/'+this.role).then((response)=>{
               this.notificationsCounts=response.data
                console.warn(this.notificationsCounts.data);
                }).catch((errors)=> {console.log(errors)})
        },
        markAsRead(){
            axios.get('/api/mark_as_read/'+this.user_id+'/'+this.role).then((response)=>{
                this.getNotifications()
                this.getNotificationsCount()
                }).catch((errors)=> {console.log(errors)})
        },
         dateToFromNowDaily( myDate ) {
            // get from-now for this date
            var fromNow = moment( myDate ).fromNow();

            // ensure the date is displayed with today and yesterday
            return moment( myDate ).calendar( null, {
                // when the date is closer, specify custom values
                lastWeek: '[Last] dddd',
                lastDay:  '[Yesterday]',
                sameDay:  '[Today]',
                nextDay:  '[Tomorrow]',
                nextWeek: 'dddd',
                // when the date is further away, use from-now functionality
                sameElse: function () {
                    return "[" + fromNow + "]";
                }
            });
        },
           redirectFromNoti(go, param_id, role){
            if(go==1){
                this.$router.push({ name: 'ManageProperties_Staff' })
            }else if (go==2){
                this.$router.push({ name: 'std_bills' })
            }else if(go==3)
            {
                this.$router.push({ name: 'view_room_list', params: { id: param_id } })
            }else if(go==4){
                 this.$router.push({ name: 'payment_land' })
            }else if(go==5){
                    this.$router.push({ name: 'profile_view', params: { role: role, id:param_id } })

            }
        },
             playNotificationSound(){
            var mytrack = new Audio('/audio/notification.mp3')
            mytrack.play();
        },
            getConverstations(){
            axios.get('/api/getConverstations/'+this.user_id+'/'+this.role).then((response)=>{
                this.conversations=response.data
                  setTimeout(() =>   this.counttotalNotifications(), 1000);
                console.warn(this.conversations.data);
                })

        },
        counttotalNotifications(){
            let sum = 0;

                for (let i = 0; i < this.conversations.length; i++) {
                    sum += this.conversations[i].get_msg_relation_count;
                }
                this.totalNotifications = sum;

          },  playChatSound(){
            var mytrackz = new Audio('/audio/Messenger.mp3')
            mytrackz.play();
        },

        getProfile(){
            axios.get('/api/get_profile/'+this.user_id+'/'+this.role).then((response)=>{
                this.userProfile=response.data.data;
                console.warn(this.userProfile.data);
                }).catch((errors)=> {console.log(errors)})
            },
            getRole(){
            axios.get('/api/get_role').then((response)=>{
                this.roling=response.data
                console.warn(this.roling.data);
                }).catch((errors)=> {console.log(errors)})
        },

    },
    mounted: function(){
            this.getProfile();
            this.getRole();
            this.$root.$on('refreshData', data => {
            this.getProfile();
          });
                this.getNotifications();
        this.getNotificationsCount();

        Echo.private('App.Models.Staff.' + this.user_id)
            .notification((notification) => {
                console.log(notification);
                this.getNotifications();
                this.getNotificationsCount();
                this.playNotificationSound();
            });

        Echo.private(`messages_to_staff.${this.user_id}`)
            .listen('NewMessageToStaff', (e) =>{
                this.getConverstations();
                this.playChatSound();
            })

            this.$root.$on('getCount', data => {
            this.getConverstations();
            });
            this.getConverstations();
    },
        computed:{
        unreadNotifications(){
            return this.notificationsCounts.filter(notification=>{
                return notification.read_at==null;
            })
        }
    },

};

</script>

<style scoped>
.active{
--tw-text-opacity: 1;
color: rgba(236, 72, 153, var(--tw-text-opacity));
border-bottom-width: 4px;
--tw-border-opacity: 1;
border-color: rgba(236, 72, 153, var(--tw-border-opacity));
}
</style>
