<template>
<div>
     <!-- Top Section-->
    <div class="max-w-6xl p-5 mx-auto mt-3 bg-gray-100 rounded-md mb-5 shadow-xl" >
        <div class="bg-white rounded-md  shadow-xl">
            <div class="mx-5 p-5">
            <div class="flex justify-between item-center">
            <h1 class="text-2xl font-black text-gray-800"> {{ lists.listing_name }}</h1>
            <div class="text-xl bg-yellow-500 px-5 py-1 rounded-md shadow-sm font-bold text-white">{{lists.room_status}}</div>
            </div>
            <div class="flex items-center">
                <svg class="h-6 w-6 text-yellow-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="18" y2="6.01" />  <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />  <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />  <line x1="9" y1="4" x2="9" y2="17" />  <line x1="15" y1="15" x2="15" y2="20" /></svg>
                <span class="ml-2 font-bold ">{{ lists.property.name }}</span>
            </div>
            <div class="flex items-center">
                <svg class="h-6 w-6 text-yellow-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <line x1="3" y1="10" x2="21" y2="10" />  <polyline points="5 6 12 3 19 6" />  <line x1="4" y1="10" x2="4" y2="21" />  <line x1="20" y1="10" x2="20" y2="21" />  <line x1="8" y1="14" x2="8" y2="17" />  <line x1="12" y1="14" x2="12" y2="17" />  <line x1="16" y1="14" x2="16" y2="17" /></svg>
                <span class="ml-2 font-bold">   {{ lists.campus }}</span>
            </div>
            <div class="flex items-center">
                <svg class="h-6 w-6 text-yellow-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />  <circle cx="7" cy="10" r="1" /></svg>
                <span class="ml-2 font-bold">   {{ lists.room_type }} | Preferable {{ lists.property.gender_preferences }}</span>
            </div>


            <!-- Images Slide -->
            <div class="flex items-center justify-center h-80 w-full overflow-hidden bg-gradient-to-b from-green-200 to-green-500">
                <section class="flex items-stretch h-80 w-full text-white ">
                    <div class="relative items-center w-1/2 bg-gray-500 lg:flex">

                        <div class="border-double border-4 border-light-blue-500" style="width:100%;margin:10px auto;height:320px">

                                <slider ref="slider" :options="options">
                                    <slideritem   v-for="(item,index) in propertyPhoto" :key="index" >

                                        <img class="h-70 w-full  relative" :src="'/images/Properties/'+item.photo_name" alt="Avatar"/>
                                            <p class=" absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full ">{{ item.photo_label }}</p>
                                            <p class=" absolute top-0 text-base text-black pt-5 bg-gray-200 w-full ">House Photos:</p>

                                    </slideritem>
                                    <div slot="loading">loading...</div>
                                </slider>
                        </div>
                    </div>
                        <div class="relative items-center w-1/2 bg-gray-500 lg:flex">

                        <div class="border-double border-4 border-light-blue-500" style="width:100%;margin:10px auto;height:320px">

                                <slider ref="slider" :options="options">
                                    <slideritem   v-for="(item,index) in roomPhoto" :key="index" >
                                        <img class="h-70 w-full  relative" :src="'/images/Properties/'+item.photo_name" alt="Avatar"/>
                                        <p class=" absolute top-0 text-base text-black pt-5 bg-gray-200 w-full ">Room Photos:</p>
                                    </slideritem>
                                    <div slot="loading">loading...</div>
                                </slider>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </div>
    </div>
     <!-- Top Section end-->


    <!-- Body section -->
    <div class="max-w-6xl p-6 mx-auto mt-3  mb-5 bg-gray-100 rounded-md shadow-xl" >
        <div  class="body">
        <div class="flex flex-col lg:grid lg:gap-4 lg:grid-cols-3">
            <!-- Beginning of the Description -->
            <div  class="bg-white lg:order-1 lg:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
            <div class="mx-5 my-5 ">
                    <div class="flex mt-2 item-center">
                        <span class="text-2xl font-bold">RM{{ lists.monthly_rent }}/Months</span>
                    </div>
                    <div class="flex mt-2 item-center">
                        <p class="mt-2 text-base text-blue-500">{{ lists.property.address }}</p>
                    </div>
                    <hr class="border-gray-500   mt-5">
                    <div class="flex mt-2 item-center">
                        <span class="text-xl font-bold">Description</span>
                    </div>
                    <div class="flex mt-2 item-center">
                        <p class="mt-2 whitespace-pre-wrap text-base text-gray-600 dark:text-gray-400">{{ lists.property.des }}</p>
                    </div>
                        <div class="flex mt-2 item-center">
                        <p class="mt-2 whitespace-pre-wrap text-base text-gray-600 dark:text-gray-400">{{ lists.room_description }}</p>
                    </div>
                    <hr class="border-gray-500   mt-5 ">
                    <div class="flex mt-2 item-center">
                        <span class="text-xl font-bold">Furnishing</span>
                    </div>
                    <div class="flex mt-2 item-center">
                        <p class="mt-2 text-base text-gray-600 dark:text-gray-400">{{ lists.property.furnishing }}| {{ lists.room_furnishing }}</p>
                    </div>
                    <div class="flex mt-2 item-center">
                        <p class="mt-2 text-base text-gray-600 dark:text-gray-400">Toilet: {{ lists.property.toilet_num }}</p>
                    </div>
                    <div class="flex mt-2 item-center">
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.number_of_tenant }}</p>
                    </div>
                    <div class="flex mt-2 item-center">
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.penalty_fees }}</p>
                    </div>

                    <hr class="border-gray-500 mt-5">
                    <div class="flex mt-2 item-center">
                        <p class="mt-2 text-sm text-gray-600 ">Posted at: {{ moment(lists.created_at).format("DD-MM-YYYY HH:mm:ss") }}</p>
                    </div>
                    <div class="flex item-center">
                        <p class="mt-2 text-sm text-gray-600 ">Last updated at: {{ moment(lists.updated_at).format("DD-MM-YYYY HH:mm:ss") }}</p>
                    </div>


            </div>

            </div>
            <!-- Ending of the Description -->

            <!-- Landlord Card -->
            <div class="bg-white lg:order-1 lg:row-span-2 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0 ">
            <div class="mx-5 my-5">
                    <div class="w-full flex flex-row justify-center items-center">
                        <div class="card w-96 mx-autorounded-md shadow-xl hover:shadow rounded-sm bg-gradient-to-br from-cool-gray-900 to-blue-gray-600">
                            <img class=" h-28 w-28 object-cover mx-auto rounded-full -mt-14 border-4 border-blue-500  " :src="'/images/Profile/'+lists.property.land.landlord_pic" alt="Avatar">

                            <div class="text-center mt-2 text-3xl cursor-pointer text-yellow-500 font-medium hover:underline hover:text-blue-500">
                                <router-link :to="{ name: 'std_profile_view', params:{role: 2, id: lists.landlord_id}}" target="_blank" >{{ lists.property.land.landlord_name}}</router-link >
                            </div>
                            <div class="text-center font-normal text-lg text-white">Landlord</div>
                            <div class="flex p-3">
                                <div class="w-full text-center">
                                    <button :class="[top_btn_style]" class="w-full font-bold rounded-full">Chat Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- Rental Details -->
            <div class="relative mx-5 my-5">
                    <div class="w-full flex flex-row justify-center items-center">
                        <div class="mb-40 card w-96 mx-autorounded-md shadow-xl hover:shadow rounded-sm" style="background-color: #2b2a33;">
                            <div class="mt-2 text-center text-xl text-yellow-500 font-bold">
                                Room Rental Details
                            </div>
                            <div  class="mx-5 my-5">
                                <table class=" text-white w-full">
                                    <tr>
                                        <td class="text-left ">Monthly Rental / Room</td>
                                        <td class="text-right">RM {{ lists.monthly_rent }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Overdue Penalty</td>
                                        <td class="text-right">RM {{ lists.penalty_fees }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Max Tenant / Room</td>
                                        <td class="text-right">{{ lists.number_of_tenant }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Utilities</td>
                                        <td class="text-right">Included</td>
                                    </tr>

                                    <tr class="border-yellow-500 font-bold text-yellow-200 border-t-2 mt-5">
                                        <td class="text-left ">Booking Fees</td>
                                        <td class="text-right">RM {{ lists.booking_fees }}</td>
                                    </tr>
                                </table>
                            <div class="text-sm text-indigo-200 font-light">
                                <div class="mt-5">
                                    The booking fees counted as 1st month of rental
                                </div>
                                <div class="mt-5">
                                    Monthly rental bills will be issues starting on 2nd months of rental
                                </div>
                                <div class="border-2 border-blue-500 p-2 mt-5 text-yellow-200">
                                    <span class="">Chat with landlord to request for booking key</span>
                                </div>
                            </div>
                            </div>

                            <div class="flex mx-5 my-5">
                                <div class="w-full text-center ">
                                    <button @click="toggleModal = !toggleModal" class="p-3 font-bold rounded-full text-green-900 bg-green-100 hover:bg-green-500 hover:text-white transition duration-150 ease-in-out shadow-xl w-full">Book Room Now</button>
                                </div>
                            </div>
                        </div>




                    </div>

            </div>

            </div>

            <!--Location Map -->
            <div  class="bg-white lg:order-1 lg:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 p-2 lg:mb-0">
                <div class="mx-5 my-5 ">
                <div class="flex mt-2 item-center">
                    <span class="text-xl font-bold">Location Map</span>
                </div>
                <GoogleMap class="h-72" :latitude="parseFloat(lists.property.lat)" :logitude="parseFloat(lists.property.log)" :registered="true"  />
            </div>

            </div>
        </div>
        </div>
    </div>
    <!-- Body section end -->


    <!-- Recommendations -->
    <div class="max-w-6xl p-6 mx-auto mt-3  bg-gray-100 rounded-md shadow-xl mb-5" >
             <div class="flex justify-between item-center">
                <button @click="getRecommendation"><h1 class="text-2xl font-black text-gray-800 dark:text-white">Recommended Rooms</h1></button>
            </div>
        <div class="flex items-center justify-center w-full overflow-hidden">
           <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 m-5 mb-10">
                <!-- first card -->

                <div v-for="(similar,index) in recomendations" :key="index.id" class="bg-white rounded-lg shadow-lg overflow-hidden  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 hover:bg-yellow-400 hover:shadow-2xl">
                <router-link :to="{ name: 'view_room_list', params:{id: similar.id}}" target="_blank">
                    <img class="h-48 w-full object-cover"  :src="'/images/Properties/'+similar.photo_room[0].photo_name"
                       />


                    <div class="m-2 text-justify text-sm">
                        <div class="flex flex-wrap items-center -mt-8 pb-3 ">
                            <img class="block h-8 w-8 rounded-full bg-white mt-1 mr-2 ml-3 border-2 border-white"
                        :src="'/images/Profile/'+similar.property.land.landlord_pic"
                                alt="Profile">
                            <span class="block text-sm font-bold text-white bg-black bg-opacity-30">{{similar.property.land.landlord_name}}</span>

                        </div>
                        <p class="text-right text-base font-bold text-yellow-700">RM{{similar.monthly_rent}}/Months</p>
                        <h2 class=" font-bold mb-5 mt-2 text-lg text-center"> {{similar.listing_name}}</h2>

                        <div class="text-base text-left text-gray-600 mb-5">
                            <p class="mt-2 px-3">{{ similar.property.name }} | {{ similar.campus }}</p>
                            <div class="flex mt-2 px-3">
                                <p class="mt-2 ">{{similar.room_type}} | {{similar.property.gender_preferences}} </p>
                            </div>
                            <div class="flex mt-2  px-3">
                                <p class="mt-2">{{similar.property.furnishing}} | {{similar.room_furnishing}}</p>
                            </div>
                        </div>

                    </div>
                    </router-link>
                </div>
           </div>
        </div>
    </div>
     <!-- Recommendations end -->


    <BookingModal
        v-if="toggleModal"
        :roomDetails="lists"
        :user_id="parseInt(user_id)"
        @closeModal="closeModal">
    </BookingModal>






</div>
</template>
<script>

import { slider, slideritem } from 'vue-concise-slider'
import GoogleMap from "./GoogleMap.vue";
import moment from "moment";
import BookingModal from './Booking_Modal.vue';

export default {
 components: {
    GoogleMap,
    slider,
    slideritem,
    BookingModal,

    },
    props: {
        user_id: Number,
        role: Number,
        },
    data(){

        return{
            lists: [],
            recomendations: [],
            moment: moment,
            campus: 'Gambang',
             options: {
              currentPage: 0
            },

            landlord_id: '',

            location: '',
            price:'',
            gender: '',
            room: '',
            minPrice: '',
            maxPrice: '',

            toggleModal: false,
            propertyPhoto:[],
            roomPhoto:[],
            room_id: this.$route.params.id,


            top_btn_style: 'p-3 rounded text-yellow-900 bg-yellow-100 hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out shadow-xl',
        }
    },
     methods:{
        getList(){
            axios.get('/api/get_room_list/'+this.room_id+'?imej=1&land=1').then((response)=>{
                this.lists=response.data.data[0];
                this.location=this.lists.property.name
                this.price=this.lists.monthly_rent
                this.room=this.lists.room_type
                this.gender=this.lists.property.gender_preferences
                this.landlord_id = this.lists.landlord_id
                this.propertyPhoto = response.data.data[0].property.photo;
                this.roomPhoto = response.data.data[0].photo_room;
                console.warn(this.lists.data);
            })
        },
        getRecommendation(){
            if(this.price>=0 && this.price <=200){
                this.minPrice = 0;
                this.maxPrice = 200;
            }else if(this.price>=200 && this.price <=500){
                this.minPrice = 200;
                this.maxPrice = 500;
            }else if(this.price>=500 && this.price <=800){
                this.minPrice = 500;
                this.maxPrice = 800;
            }else if(this.price>=800 && this.price <=2000){
                this.minPrice = 800;
                this.maxPrice = 2000;
            }
            axios.get('/api/get_Recommendation/'+this.campus+'?land=1', {
                params: {
                    location: this.location,
                    minPrice: this.minPrice,
                    maxPrice: this.maxPrice,
                    gender: this.gender,
                    room: this.room,
                    room_id: this.room_id,
                }
                }).then((response)=>{
                this.recomendations=response.data.data;
                console.warn(this.recomendations.data);
            })

        },
        closeModal(){
            this.toggleModal =!  this.toggleModal ;
        },
    },
    watch:{
        $route() {

        },
    },
       mounted: function(){
        this.getList();
        setTimeout(() => this.getRecommendation(), 2000);

    },



}
</script>

