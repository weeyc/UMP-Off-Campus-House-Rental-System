<template>
<div>
  <div class="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-transparent shadow-2xl">
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
                                  <svg class="h-8 w-8 text-green-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
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
                                   <svg class="h-8 w-8 text-yellow-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
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
                                            :duration="1"
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
                                <svg class="h-8 w-8 text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" />  <path d="M9 21v-8a3 3 0 0 1 6 0v8" /></svg>


                                    <div
                                        class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Total Rooms</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                            <number
                                            ref="number3"
                                            :from="0"
                                            :to="rooms"
                                            :duration="1"
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
                                  <svg class="h-8 w-8 text-blue-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 3.13a4 4 0 0 1 0 7.75" />  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                                    <div
                                        class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span class="flex items-center">Total Landlord</span>
                                    </div>
                                </div>
                                <div class="ml-2 w-full flex-1">
                                    <div>
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                        <div class="mt-3 text-3xl font-bold leading-8">
                                            <number
                                            ref="number4"
                                            :from="0"
                                            :to="landlords"
                                            :duration="1"
                                            easing="Power1.easeOut"/> </div></div>
                                        <div class="mt-1 text-base text-gray-600">landlords</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-span-12 mt-5">
                    <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                        <div class="bg-white p-4 shadow-lg rounded-lg">
                            <h1 class="font-bold text-base">Landlord's Property Applications</h1>
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
                                                                    <span class="mr-2">PROPERTY</span>
                                                                </div>
                                                            </th>
                                                            <th
                                                                class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                <div class="flex cursor-pointer">
                                                                    <span class="mr-2">LANDLORD</span>
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
                                                                    <span class="mr-2">APPLICATION DATE</span>
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
                                                        <tr v-for= "room in unverified" :key="room.id">

                                                            <td
                                                                class="flex px-6 py-4 whitespace-no-wrap text-sm leading-5 ">
                                                                    {{ room.name }}
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <p>{{room.land.landlord_name}}</p>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <p>{{room.campus}}</p>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <p>{{moment(room.created_at  ).format("DD-MM-YYYY, h:mm a")}}</p>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5 capitalize">
                                                                <div class="flex text-red-500">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        class="w-5 h-5 mr-1" fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor">
                                                                        <path stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="2"
                                                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg>
                                                                    <p>{{room.status}}</p>
                                                                </div>
                                                            </td>
                                                            <td
                                                                class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                <div class="flex space-x-4">
                                                                    <router-link :to="{ name: 'view_property', params:{property_id: room.id}}" target="_blank" class="text-blue-500 hover:text-blue-600">
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
                                                           <tr v-if="unverified.length==0">
                                                        <td colspan="6">
                                                            <div class="bg-indigo-100 border-yellow-600 text-black-600  p-4" role="alert">
                                                                <center><p class="font-bold text-xl">
                                                                   There are no latest applications
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
                    </div>
                </div>
            </div>
        </div>
     </div>


</div>
</template>
<script>

import moment from "moment";
export default {

    props: {
        user_id: Number,
        role: Number,
    },
    data(){
        return{
         moment: moment,
          properties: 0,
          tenants: 0,
          rooms: 0,
          landlords: 0,
          unverified: [],

        }
    },
     methods:{
           getallpropertyCount(){
            axios.get('/api/getallpropertyCount').then((response)=>{
                this.properties=response.data;

            })
        },
           getalltenantsCount(){
            axios.get('/api/getalltenantsCount').then((response)=>{
                this.tenants=response.data;

            })
        },
           getallroomCount(){
            axios.get('/api/getallroomCount').then((response)=>{
                this.rooms=response.data;

            })
        },
           getalllandlordCount(){
            axios.get('/api/getalllandlordCount').then((response)=>{
                this.landlords=response.data;

            })
        },
           get_properties_list_Unverified(){
            axios.get('/api/get_properties_list_Unverified?land=1').then((response)=>{
                this.unverified=response.data.data;

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
        this.getallpropertyCount();
        this.getalltenantsCount();
        this.getallroomCount();
        this.getalllandlordCount();
        this.get_properties_list_Unverified();

    },

}
</script>

