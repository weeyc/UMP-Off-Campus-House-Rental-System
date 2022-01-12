<template>
<div>
  <div class="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 shadow-lg mt-5">
        <div class="grid grid-cols-12 gap-6">

            <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                <div class="col-span-12 mt-8">
                    <div class="flex items-center h-10 intro-y">
                       <center><h2 class="text-2xl font-bold truncate">Dashboard</h2></center>
                    </div>

                    <div class="grid grid-cols-12 gap-6 mt-5">
                        <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                            @click="playAnimation1">
                            <div class="p-5">
                                <div class="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-house-fill text-green-400" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                        </svg>
                                    <div
                                        class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Registered Properties</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                            <div v-if="isReady==true && ready1==true && ready2==true && ready3==true && ready4==true">
                                                <number
                                                ref="number1"
                                                :from="0"
                                                :to="properties"
                                                :duration="1"
                                                easing="Power1.easeOut"/>
                                            </div>
                                            </div>

                                        <div class="mt-1 text-base text-gray-600">units</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                             @click="playAnimation2">
                            <div class="p-5">
                                <div class="flex justify-between">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-people-fill text-yellow-400" viewBox="0 0 16 16">
                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                        </svg>
                                    <div
                                        class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Total Tenants</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>

                                        <div class="mt-3 text-3xl font-bold leading-8">
                                              <div v-if="isReady==true && ready1==true && ready2==true && ready3==true && ready4==true">
                                                <number
                                                ref="number2"
                                                :from="0"
                                                :to="tenants"
                                                :duration="0.5"
                                                easing="Power1.easeOut"/>
                                                </div>
                                        </div>

                                        <div class="mt-1 text-base text-gray-600">students</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                              @click="playAnimation3">
                            <div class="p-5">
                                <div class="flex justify-between">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-door-open-fill text-pink-400" viewBox="0 0 16 16">
                                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                        </svg>

                                    <div
                                        class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Vacant Rooms</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>

                                        <div class="mt-3 text-3xl font-bold leading-8">
                                            <div v-if="isReady==true && ready1==true && ready2==true && ready3==true && ready4==true">
                                            <number
                                            ref="number3"
                                            :from="0"
                                            :to="vacant"
                                            :duration="0.5"
                                            easing="Power1.easeOut"/> </div></div>

                                        <div class="mt-1 text-base text-gray-600">rooms</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                @click="playAnimation4">
                            <div class="p-5">
                                <div class="flex justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-wallet-fill text-blue-400" viewBox="0 0 16 16">
                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                    <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
                                    </svg>
                                    <div
                                        class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Rent Collected</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                          <div v-if="isReady==true && ready1==true && ready2==true && ready3==true && ready4==true">
                                            <number
                                            ref="number4"
                                            :from="0"
                                            :to="totals"
                                            :format="theFormat"
                                            :duration="0.5"
                                            easing="Power1.easeOut"/> </div></div>

                                        <div class="mt-1 text-base text-gray-600">MYR</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-span-12 mt-5">
                    <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                        <div class="bg-white p-4 shadow-lg rounded-lg">
                            <h1 class="font-bold text-base">My Rooms Listings</h1>
                             <div v-if="isReady==true && ready1==true && ready2==true && ready3==true && ready4==true">
                            <div class="mt-4">
                                <div class="flex flex-col">
                                    <div class="-my-2 overflow-x-auto">
                                        <div class="py-2 align-middle inline-block min-w-full">
                                            <div
                                                class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                <table class="min-w-full divide-y divide-gray-200">
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div class="flex cursor-pointer">
                                                                    <span class="mr-2">ROOMS LIST</span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div class="flex cursor-pointer">
                                                                    <span class="mr-2">ROOMS TYPE</span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div class="flex cursor-pointer">
                                                                    <span class="mr-2">CAMPUS</span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div class="flex cursor-pointer">
                                                                    <span class="mr-2">PROPERTY ID</span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div class="flex cursor-pointer">
                                                                    <span class="mr-2">STATUS</span>
                                                                </div>
                                                            </th>

                                                            <th
                                                                class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div class="flex cursor-pointer">
                                                                    <span class="mr-2">ACTION</span>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="bg-white divide-y divide-gray-200">
                                                        <tr v-for= "room in rooms" :key="room.id">

                                                            <td
                                                                class="flex px-6 py-4 whitespace-no-wrap text-sm leading-5 ">
                                                                 <img :src="'/images/Properties/'+room.photo_room[0].photo_name"  class="mr-2 w-6 h-6 rounded-full">
                                                                 <router-link :to="{ name: 'view_room_list_land', params:{id: room.id}}" class="cursor-pointer hover:underline">{{ room.listing_name }}
                                                                </router-link>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <p>{{room.room_type}}</p>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <p>{{room.campus}}</p>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <p>{{room.property_id}}</p>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5 capitalize">
                                                                <div class="flex text-green-500">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        class="w-5 h-5 mr-1" fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor">
                                                                        <path stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="2"
                                                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg>
                                                                    <p>{{room.room_status}}</p>
                                                                </div>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <div class="flex space-x-4">
                                                                     <router-link :to="{ name: 'room_landlord', params:{room_id: room.id}}" class="text-blue-500 hover:text-blue-600">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        class="w-5 h-5 mr-1"
                                                                        fill="none" viewBox="0 0 24 24"
                                                                        stroke="currentColor">
                                                                        <path stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="2"
                                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                    </svg>
                                                                    <p>View</p>
                                                                    </router-link>
                                                               </div>
                                                            </td>
                                                        </tr>
                                                         <tr v-if="rooms.length==0">
                                                        <td colspan="6">
                                                            <div class="bg-indigo-100 border-yellow-600 text-black-600  p-4" role="alert">
                                                                <center><p class="font-bold text-base">
                                                                   You have not register any property's room yet.
                                                                </p></center>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                         <div v-else>
                            <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="circular"></loader>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>


</div>
</template>
<script>


export default {

    props: {
        user_id: Number,
        role: Number,
    },
    data(){
        return{
        rooms: [],
        properties: 0,
        tenants: 0,
        vacant: 0,
        totals: 0.00,
        isReady: false,
        ready1: false,
        ready2: false,
        ready3: false,
        ready4: false,

        }
    },
     methods:{
           getRooms(){
            axios.get('/api/get_all_rooms/'+this.user_id).then((response)=>{
                this.rooms=response.data.data;
                this.isReady=true;
                console.warn(this.rooms.data);
            })
        },
           getpropertiesCount(){
            axios.get('/api/getpropertiesCount/'+this.user_id).then((response)=>{
                this.ready1= true,
                this.properties=response.data;

            })
        },
           gettenantsCount(){
            axios.get('/api/gettenantsCount/'+this.user_id).then((response)=>{
                 this.ready2= true,
                this.tenants=response.data;

            })
        },
           getvacantCount(){
            axios.get('/api/getvacantCount/'+this.user_id).then((response)=>{
                 this.ready3= true,
                this.vacant=response.data;

            })
        },
           gettotalsCount(){
            axios.get('/api/gettotalsCount/'+this.user_id).then((response)=>{
                 this.ready4= true,
                this.totals=response.data;

            })
        },
         theFormat(number) {
            return number.toFixed(2);
        },
        playAnimation1() {
            this.$refs.number1.play()
        },
        playAnimation2() {
            this.$refs.number2.play()
        },
        playAnimation3() {
            this.$refs.number3.play()
        },
        playAnimation4() {
            this.$refs.number4.play()
        },
    },

     mounted: function(){
        this.getRooms();
        this.getpropertiesCount();
        this.gettenantsCount();
        this.getvacantCount();
        this.gettotalsCount();

    },

}
</script>

