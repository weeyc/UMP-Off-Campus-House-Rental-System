<template>
<div ref="section">
     <!-- Top Section-->
      <div v-if="isReady==true">
    <div class="max-w-6xl p-5 mx-auto mt-3 bg-gray-100 rounded-md mb-5 shadow-xl" >
        <div class="bg-white rounded-md  shadow-xl">
            <div class="mx-5 p-5">
            <div class="flex justify-between item-center">
            <h1 class="text-2xl font-black text-gray-800"> {{ lists.listing_name }}</h1>
            <div v-if="lists.room_status=='listing'" class="text-xl bg-yellow-500 px-5 py-1 rounded-md shadow-sm font-bold text-white capitalize">{{lists.room_status}}</div>
            <div v-else class="text-xl bg-red-600 px-5 py-1 rounded-md shadow-sm font-bold text-white capitalize">{{lists.room_status}}</div>
            </div>
            <div class="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                    </svg>
                <span class="ml-2 font-bold ">{{ lists.property.name }}</span>
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                    </svg>
                <span class="ml-2 font-bold">   {{ lists.campus }}</span>
            </div>
            <div class="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                </svg>
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
                    <div class="flex mt-2 item-center text-yellow-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-currency-dollar mx-1" viewBox="0 0 16 16">
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                        </svg>
                        <span class="text-2xl font-bold ">RM{{ lists.monthly_rent }}/Months</span>
                    </div>
                    <div class="flex mt-2 item-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill mx-1" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <p class=" text-base text-blue-500">{{ lists.property.address }}</p>
                    </div>
                    <hr class="border-gray-500   mt-5">
                    <div class="flex mt-2 item-center">
                        <span class="text-xl font-bold">Descriptions</span>
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
                        <p class="mt-2 text-base text-gray-600 dark:text-gray-400">{{ lists.property.furnishing }} | {{ lists.room_furnishing }}</p>
                    </div>
                     <div class="flex mt-2 item-center">
                        <p class="mt-2 text-base text-gray-600 dark:text-gray-400">Number of toilets: {{ lists.property.toilet_num }}</p>
                    </div>
                    <hr class="border-gray-500 mt-5">
                    <div class="flex mt-2 item-center">
                        <div class="mt-2 text-sm text-gray-600 font-medium">Posted at: <span class="font-normal">{{  moment(lists.created_at ).format("DD-MM-YYYY, h:mm a") }}</span></div>
                    </div>
                    <div class="flex item-center">
                        <div class="mt-2 text-sm text-gray-600 font-medium">Last updated at: <span class="font-normal"> {{ moment(lists.updated_at).format("DD-MM-YYYY, h:mm a") }}</span></div>
                    </div>


            </div>

            </div>
            <!-- Ending of the Description -->

            <!-- Landlord Card -->
            <div class="bg-white lg:order-1 lg:row-span-2 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0 ">
            <div class="mx-5 my-5">
                    <div class="w-full flex flex-row justify-center items-center">
                        <div class="card w-96 mx-auto rounded-md shadow-xl hover:shadow bg-gradient-to-br from-cool-gray-900 to-blue-gray-600">
                            <img class=" h-28 w-28 object-cover mx-auto rounded-full -mt-14 border-2 border-blue-500  " :src="'/images/Profile/'+lists.property.land.landlord_pic" alt="Avatar">

                            <div  class="text-center mt-2 text-3xl cursor-pointer text-yellow-500 font-medium hover:underline hover:text-blue-500">
                                <router-link v-if="role==1" :to="{ name: 'std_profile_view', params:{role: 2, id: lists.landlord_id}}" target="_blank" >{{ lists.property.land.landlord_name}}</router-link >
                                <router-link v-if="role==2" :to="{ name: 'profile_landlord', params:{role: 2, id: lists.landlord_id}}" target="_blank" >{{ lists.property.land.landlord_name}}</router-link >
                            </div>


                            <div class="text-center font-normal text-lg text-white">Landlord</div>
                            <div v-if="role==1" class="p-3">
                                    <div class="w-full text-center mb-3 mt-2">
                                        <router-link :to="{ name: 'chat_std', params:{user_role:'landlord' , id: lists.landlord_id, name: lists.property.land.landlord_name, photo:lists.property.land.landlord_pic, path:$route.path }}" :class="[top_btn_style]" class="w-full font-bold rounded-full">Chat Now</router-link>
                                    </div>
                            </div>

                        </div>
                    </div>
            </div>
            <!-- Rental Details -->
            <div class="relative mx-5 my-5">
                    <div class="w-full flex flex-row justify-center items-center">
                        <div class="mb-40 card w-96 mx-auto rounded-md shadow-xl hover:shadow" style="background-color: #2b2a33;">
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

                           <div v-if="role==1">
                            <div v-if="lists.room_status!='rented'" class="flex mx-5 my-5">
                                <div class="w-full text-center ">
                                    <button @click="toggleModal = !toggleModal" class="p-3 font-bold rounded-full text-white bg-green-500 hover:bg-green-600 hover:text-white transition duration-150 ease-in-out shadow-xl w-full">Book Room Now</button>
                                </div>
                            </div>
                            <div v-else class="flex mx-5 my-5">
                                <div class="w-full text-center ">
                                    <button @click="toastBook" class="p-3 font-bold rounded-full text-black bg-gray-100 hover:bg-gray-500 hover:text-white transition duration-150 ease-in-out shadow-xl w-full">Book Room Now</button>
                                </div>
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
    <div v-if="role==1" class="max-w-6xl p-6 mx-auto mt-3  bg-gray-100 rounded-md shadow-xl mb-5" >
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
                        <h2 class=" font-bold mb-5 mt-2 text-lg text-center text-blue-700"> {{similar.listing_name}}</h2>

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
  <div v-else>
           <loader object="#dd7755" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
    </div>


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
            isReady: false,


            top_btn_style: 'p-3 rounded text-white bg-yellow-500 hover:bg-yellow-600 hover:text-white transition duration-150 ease-in-out shadow-xl',
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
                this.isReady=true;
                this.scrollToTop();
                console.warn(this.lists.data);
            })
        },
        scrollToTop() {
         this.$root.$emit("scroll",this.user_id);
        },
        toastBook(){
             this.$toaster.info('This Room is Rented Out')
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
        this.scrollToTop();
        setTimeout(() => this.getRecommendation(), 2000);

    },



}
</script>

