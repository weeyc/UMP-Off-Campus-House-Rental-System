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
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-green-400"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <div
                                        class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Registered Properties</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                            <number

                                             ref="number1"
                                            :from="0"
                                            :to="properties"
                                            :duration="1"
                                            easing="Power1.easeOut"/> </div>

                                        <div class="mt-1 text-base text-gray-600">units</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                             @click="playAnimation2">
                            <div class="p-5">
                                <div class="flex justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-400"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <div
                                        class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Total Tenants</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                            <number
                                             ref="number2"
                                            :from="0"
                                            :to="tenants"
                                            :duration="0.5"
                                            easing="Power1.easeOut"/> </div></div>

                                        <div class="mt-1 text-base text-gray-600">students</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                              @click="playAnimation3">
                            <div class="p-5">
                                <div class="flex justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-pink-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                    </svg>


                                    <div
                                        class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Vacant Rooms</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                        <div class="mt-3 text-3xl font-bold leading-8">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-400"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <div
                                        class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Rent Collected</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                        <div class="mt-3 text-3xl font-bold leading-8">
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
                             <div v-if="isReady==true">
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
                                                                 <router-link :to="{ name: 'view_room_list', params:{id: room.id}}" class="cursor-pointer hover:underline">{{ room.listing_name }}
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
                this.properties=response.data;

            })
        },
           gettenantsCount(){
            axios.get('/api/gettenantsCount/'+this.user_id).then((response)=>{
                this.tenants=response.data;

            })
        },
           getvacantCount(){
            axios.get('/api/getvacantCount/'+this.user_id).then((response)=>{
                this.vacant=response.data;

            })
        },
           gettotalsCount(){
            axios.get('/api/gettotalsCount/'+this.user_id).then((response)=>{
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

