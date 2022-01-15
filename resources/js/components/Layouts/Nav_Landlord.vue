<template>
    <body class="flex flex-col h-screen" >

<!-- side bar -->
    <div class="flex flex-1 overflow-hidden">
         <div :class="[transition]" class=" transform  shadow  inset-y-0 left-0 h-auto  ease-in-out transition-none duration-75     bg-gradient-to-br from-cool-gray-900 to-bg-gradient-to-r-gray-600"  style="background-color: #2b2a33;">

             <router-link @click.native="scrollToTop" :to="{name: 'landlord_landing'}" class="hidden focus:outline-none hover:text-indigo-200 focus:text-indigo-200 text-white sm:flex justify-start p-6 items-center space-x-3 w-full">
                   <div class="  row-span-2 justify-self-end animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="40" height="40"
                        viewBox="0 0 172 172"
                        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2563eb"><path d="M86,14.33333c-1.91435,0.00025 -3.74903,0.76638 -5.09506,2.1276l-72.28255,63.07226c-0.9155,0.67554 -1.45577,1.74571 -1.45573,2.88347c0,1.97902 1.60431,3.58333 3.58333,3.58333h17.91667v57.33333c0,3.956 3.21067,7.16667 7.16667,7.16667h28.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-43h28.66667v43c0,3.956 3.21067,7.16667 7.16667,7.16667h28.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-57.33333h17.91667c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0.00004,-1.13776 -0.54023,-2.20792 -1.45573,-2.88347l-72.24056,-63.03027c-0.01394,-0.01406 -0.02794,-0.02805 -0.04199,-0.04199c-1.34603,-1.36123 -3.18071,-2.12736 -5.09506,-2.1276z"></path></g></g></svg>
                    </div>
                    <span class="bg-gradient-to-r from-sky-400 to-cyan-300      text-transparent bg-clip-text text-3xl font-black  ">UOCA</span>
                     <button   @click="$router.go(-1)" class="ml-24 mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-400 hover:text-blue-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                    </button>
                    <button  @click="$router.go(1)" class="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-400 hover:text-blue-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                    </button>
                </router-link >


            <router-link @click.native="scrollToTop" :to="{name: 'profile_landlord'}" v-for= "user in userProfile" :key="user.id"  class="focus:outline-none focus:text-white  flex justify-between sm:w-auto items-center space-x-10 text-white mx-6 p-3 rounded focus:bg-blue-800 bg-blue-700 hover:bg-blue-800">
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
                 <router-link  @click.native="scrollToTop" :to="{name: 'dashboard_landlord'}" active-class="active" :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                      <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4 ">Dashboard</p>
                    </router-link>

                  <router-link @click.native="scrollToTop" :to="{name: 'property_list'}" active-class="active" :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
                         <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                        </svg>
                        <p class="text-base leading-4">Property Lists</p>
                    </router-link >
                 <router-link @click.native="scrollToTop" :to="{name: 'RentalRoom_Landlord'}" active-class="active" :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                        </svg>
                        <p class="text-base leading-4">Rental Property</p>
                    </router-link>
                    <router-link  @click.native="scrollToTop" :to="{name: 'payment_land'}" active-class="active" :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                        </svg>
                        <p class="text-base leading-4">Payment Reports</p>
                    </router-link>
            </div>
            <div class="px-6 my-4 w-full">
                <hr class="border-blue-400 w-full" />
            </div>
            <div class="mt-4 px-6 flex justify-start w-full items-start">
                <p class="text-base leading-4 text-blue-500">Shortcuts</p>
            </div>
            <div class="mt-4 flex flex-col px-6 justify-start items-center w-full">
                  <router-link @click.native="scrollToTop" :to="{name: 'chat_landlord'}" active-class="active" :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                          <p class="text-base leading-4">Chat <span v-if="totalNotifications!=0" class="ml-2 badge mb-3 bg-red-800 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm mr-1">{{totalNotifications }}</span></p>
                    </router-link >
                      <button  @click="toggleNoti =! toggleNoti; notificationHandler(true); markAsRead() " :class="[hover]" class="focus:outline-none flex jusitfy-start  py-3 items-center space-x-6 w-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                         <p class="text-base leading-4">Notifications <span v-if="unreadNotifications[0]!=undefined" class="badge mb-3 bg-red-800 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm mr-1">{{ unreadNotifications.length }}</span></p>
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
        <div class="shadow-lg  flex justify-between w-full p-6 items-center border-b border-transparent sm:border-gray-200      bg-gradient-to-br from-cool-gray-900 to-bg-gradient-to-r-gray-600" style="background-color: #23252f;">
              <div  class="flex justify-start items-center">
                <button  @click="showNav()" class="">
                        <svg class="text-blue-400 hover:text-blue-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

            </div>

             <router-link @click.native="scrollToTop" :to="{name: 'dashboard_landlord'}" class="flex text-blue-400 text-2xl font-black tracking-wide hover:text-blue-500 focus:outline-none focus:text-blue-500 justify-between items-center space-x-3">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                     <span>UMP Off-Campus Accomodation</span>
             </router-link >
            <div  class="flex justify-end items-center">
                 <router-link @click.native="scrollToTop" :to="{name: 'profile_landlord'}" class=" focus:text-white hover:text-white bg-blue-600 hover:bg-blue-700 text-xs text-white px-3 py-3 rounded-md">
                       I'm Landlord
                </router-link >
            </div>
        </div>
        <!-- top bar -->
        <!-- notification -->
<div class="flex justify-items-end justify-end z-10">
     <div class="w-full h-full bg-gray-800 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 hidden" id="chec-div" ref="chec">
      <div class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="notification" ref="notification">
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

             <div id="Bulletin" v-if='n.type==="App\\Notifications\\BulletinNotification"' class="w-full p-4 mt-4 bg-blue-100 rounded flex shadow">
                 <div id="landlord" v-if=" n.data.Sender_land !=null" class="flex">
                    <div><img @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_land.landlord_id,2)" class="cursor-pointer rounded-full h-10 w-10 object-cover" :src="'/images/Profile/'+n.data.Sender_land.landlord_pic" alt="Avatar" /></div>
                    <div class="pl-3">
                        <div tabindex="0" class="focus:outline-none text-sm leading-snug">
                            <div  class="leading-snug" ><span  @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_land.landlord_id,2)" class="text-indigo-700 cursor-pointer hover:underline font-medium">{{ n.data.Sender_land.landlord_name }}</span> posted a bulletin at</div>
                            <span class="text-indigo-700 hover:text-indigo-800 underline cursor-pointer font-medium" @click="notificationHandler(false); redirectFromNoti(1)">house rental ID: {{ n.data.Content.property_id }}</span>
                        </div>
                         <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500 mt-2" > {{ moment( n.created_at ).fromNow() }} </p>
                    </div>

                </div>
                 <div id="student" v-else class="flex">
                        <div><img @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_std.std_id,1)" class="cursor-pointer rounded-full h-10 w-10 object-cover" :src="'/images/Profile/'+n.data.Sender_std.std_pic" alt="Avatar" /></div>
                        <div class="pl-3">
                        <div tabindex="0" class="focus:outline-none text-sm leading-snug">
                            <div class="leading-snug" ><span @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_std.std_id,1)" class="text-indigo-700 cursor-pointer hover:underline font-medium">{{ n.data.Sender_std.std_name }}</span> posted a bulletin at</div>
                            <span class="text-indigo-700 hover:text-indigo-800 underline cursor-pointer font-medium" @click="notificationHandler(false); redirectFromNoti(1)">house rental ID: {{ n.data.Content.property_id }}</span>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500 mt-2" > {{ moment( n.created_at ).fromNow() }} </p>
                        </div>

                </div>
            </div>
            <div id="Payment" v-if='n.type==="App\\Notifications\\PaymentNotification"'  class="w-full p-4 mt-4 bg-green-100 rounded flex items-center shadow">
                <div  class="flex">
                    <div><img @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_std.std_id,1)" class="cursor-pointer rounded-full h-10 w-10 object-cover" :src="'/images/Profile/'+n.data.Sender_std.std_pic" alt="Avatar" /></div>
                    <div class="pl-3">
                    <div tabindex="0" class="focus:outline-none text-sm leading-snug">
                        <div class="leading-snug" ><span @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_std.std_id,1)" class="text-indigo-700 cursor-pointer hover:underline font-medium">{{ n.data.Sender_std.std_name }}</span> made a payment to you for</div>
                        <span class="text-indigo-700 hover:text-indigo-800 underline cursor-pointer font-medium" @click="notificationHandler(false); redirectFromNoti(4)">{{ n.data.Content.payment_details }}</span>
                    </div>
                    <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500 mt-2" > {{ moment( n.created_at ).fromNow() }} </p>
                    </div>
                </div>
            </div>
              <div id="PropertyStatus" v-if='n.type==="App\\Notifications\\PropertyStatusNotification"'  class="w-full p-4 mt-4 bg-red-100 rounded flex items-center shadow">
                <div  class="flex">
                    <div><img @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_std.std_id,1)" class="cursor-pointer rounded-full h-10 w-10 object-cover" :src="'/images/Profile/'+n.data.Sender_std.staff_pic" alt="Avatar" /></div>
                    <div class="pl-3">
                    <div tabindex="0" class="focus:outline-none text-sm leading-snug">
                        <div class="leading-snug" ><span @click="notificationHandler(false); redirectFromNoti(5,n.data.Sender_std.std_id,1)" class="text-indigo-700 cursor-pointer hover:underline font-medium">{{ n.data.Sender_std.staff_name }} </span> (Staff) have updated your </div>
                        <span class="text-indigo-700 hover:text-indigo-800 underline cursor-pointer font-medium" @click="notificationHandler(false); redirectFromNoti(1)">Property ID: {{ n.data.Content.property_id }} </span>registration to <span class="text-green-700 hover:text-green-800 cursor-pointer font-medium"> {{n.data.Content.verify_status}} </span>
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


        <!-- Content -->
                <div :class="[screen]" ref="section"  class="bg-gradient-to-r from-sky-400 to-cyan-300  overflow-y-auto" >
                     <div v-if="isReady==true">
                         <router-view :user_id="user_id" :role="role" class="min-h-screen"/>
                      <!-- loading -->
                    </div>
                    <div v-else>
                           <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
                    </div>
                <!-- loading -->
                    <div v-if="footer">
                        <foot-land class="bottom-0 w-full"/>
                     </div>
                </div>







        <!-- Content -->

     </div>

      </div>


    </body>
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
            screen: 'min-h-screen',
            footer: false,
            userProfile: [],
            transition:'',
            isReady: false,
            indicator: false,
            roling: '',
            hover:'text-blue-200 hover:text-blue-500 focus:text-blue-500 border-l-4 pl-4',

            notifications: [],
            notificationsCounts: [],
            moment: moment,
            toggleNoti: false,

            conversations: [],
            totalNotifications: '',
        }
    },
    methods: {
          routeLoaded() {
           //Execute this when router-view is loaded
            this.screen = '';
            this.footer = true;
            this.isReady=true;
        },
        scrollToTop() {
              this.$refs.section.scrollTo(0, 0);
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
                this.isReady=true;
                console.warn(this.userProfile.data);
                }).catch((errors)=> {console.log(errors)})
        },
               getRole(){
            axios.get('/api/get_role').then((response)=>{
                this.roling=response.data
                console.warn(this.roling.data);
                }).catch((errors)=> {console.log(errors)})
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
                this.$router.push({ name: 'RentalRoom_Landlord' })
            }else if (go==2){
                this.$router.push({ name: 'std_bills' })
            }else if(go==3)
            {
                this.$router.push({ name: 'view_room_list', params: { id: param_id } })
            }else if(go==4){
                 this.$router.push({ name: 'payment_land' })
            }else if(go==5){
                    this.$router.push({ name: 'land_profile_view', params: { role: role, id:param_id } })
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


    },
    mounted:  function(){
            this.getProfile();
            this.getRole();
            this.$root.$on('refreshData', data => {
            this.getProfile();
          });
            this.getNotifications();
        this.getNotificationsCount();

        Echo.private('App.Models.Landlord.' + this.user_id)
            .notification((notification) => {
                console.log(notification);
                this.getNotifications();
                this.getNotificationsCount();
                this.playNotificationSound();
            });

        Echo.private(`messages_to_landlord.${this.user_id}`)
            .listen('NewMessageToLandlord', (e) =>{
                this.getConverstations();
                this.playChatSound();
            })

            this.$root.$on('getCount', data => {
            this.getConverstations();
            });
            this.getConverstations();

            this.$router.onReady(() => this.routeLoaded());

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
color: rgba(59, 130, 246, var(--tw-text-opacity));
}
</style>
