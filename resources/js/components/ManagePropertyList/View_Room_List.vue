<template>
<div>

    <div class="max-w-6xl p-6 mx-auto mt-3 bg-gray-200 rounded-md mb-5" >
             <div class="flex justify-between item-center">
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white"> {{ lists.listing_name }}</h1>
                <button class="text-2xl bg-yellow-200 px-5 py-1 rounded-sm shadow-sm font-bold text-yellow-800">{{lists.room_status}}</button>
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

    <div class="max-w-6xl p-6 mx-auto mt-3 rounded-md mb-5 bg-gray-200" >

    <div  class="">
      <div class="flex flex-col lg:grid lg:gap-4 lg:grid-cols-3">
        <!-- Beginning of the component about Daniel Clifford -->
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
                    <p class="mt-2 text-base text-gray-600 dark:text-gray-400">{{ lists.property.des }}</p>
                </div>
                    <div class="flex mt-2 item-center">
                    <p class="mt-2 text-base text-gray-600 dark:text-gray-400">{{ lists.room_description }}</p>
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
                 <hr class="border-gray-500   mt-5">
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Posted at: {{ moment(lists.created_at).format("DD-MM-YYYY HH:mm:ss") }}</p>
                </div>
                   <div class="flex item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Last updated at: {{ moment(lists.updated_at).format("DD-MM-YYYY HH:mm:ss") }}</p>
                </div>

          </div>

        </div>
        <!-- Ending of the component about Daniel Clifford -->

        <!-- Beginning of the component about Jonathan Walters -->
        <div class="bg-gray-900 lg:order-1 lg:row-span-2 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
          <div class="mx-8 my-10">

          </div>

        </div>
        <!-- Ending of the component about Jonathan Walters -->
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








</div>
</template>
<script>

import { slider, slideritem } from 'vue-concise-slider'
import GoogleMap from "./GoogleMap.vue";
import moment from "moment";
export default {
 components: {
        GoogleMap,
        slider,
        slideritem,

    },
    props: {

        },
    data(){

        return{
            lists: [],
             moment: moment,
            campus: 'Gambang',
             options: {
              currentPage: 0
            },

                location: '',
                price:{},
                gender: '',
                propertyPhoto:[],
                roomPhoto:[],
                room: '',
                room_id: this.$route.params.id,


            top_btn_style: 'p-3 rounded bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white :active:bg-yellow-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl',
        }
    },
     methods:{
        getList(){
            axios.get('/api/get_room_list/'+this.room_id+'?imej=1&land=1').then((response)=>{
                this.lists=response.data.data[0];

                this.propertyPhoto = response.data.data[0].property.photo;
                this.roomPhoto = response.data.data[0].photo_room;
                console.warn(this.lists.data);
            })

        },
        change_campus(c){
            if(c==0){
                this.campus = 'Gambang'
            }else{
                this.campus = 'Pekan'
            }
                this.location='';
                this.price={};
                this.gender= '';
                this.room='';
                this.removeQueryString()
                this.getList()

        },
        changeQueryString(){

            this.$router.replace({ query:{ campus: this.campus.toLocaleLowerCase(),location: this.location.toLocaleLowerCase(),
            roomtype: this.room.toLocaleLowerCase(),gender: this.gender.toLocaleLowerCase(), minprice: this.price.min, maxprice: this.price.max}})
        },
        removeQueryString(){
            this.$router.replace({ name: "BrowseRoom_Student" })
        },
        dropdownHandlerRoomType(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
          dropdownHandlerPriceRange(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
        dropdownHandlerGenderPreference(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
        clearFilter(type){
            if(type == 'room'){
                var ele = document.getElementsByName("room_type");
                this.room= '';
                for(var i=0;i<ele.length;i++)
                    ele[i].checked = false;
            }else if(type == 'gender'){
                var ele = document.getElementsByName("gender");
                this.gender= '';
                for(var i=0;i<ele.length;i++)
                    ele[i].checked = false;
            }else{
                var ele = document.getElementsByName("price");
                this.price= {};

                for(var i=0;i<ele.length;i++)
                    ele[i].checked = false;
            }
        },

        getFilter(){
            this.changeQueryString()
            this.getList()
        },
    },
    watch:{
        $route() {
            // if(this.$route.query.campus == "Gambang"){

            // }
        },
    },
       mounted: function(){
        this.getList();

    },



}
</script>

