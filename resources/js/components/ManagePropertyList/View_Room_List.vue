<template>
<div>

    <div class="max-w-6xl p-6 mx-auto mt-5 bg-gray-200 rounded-md mb-5" >
        <!-- Top Campuse1s -->

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
        <div  class="bg-yellow-200 lg:order-1 lg:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
          <div class="mx-5 my-5 ">
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.campus }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.listing_name }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.monthly_rent }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.number_of_tenant }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.penalty_fees }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.room_description }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.room_type }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.room_status }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.property.address }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.property.des }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.property.name }}</p>
                </div>
                 <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.property.gender_preferences }}</p>
                </div>
                <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ lists.property.furnishing }}| {{ lists.room_furnishing }}</p>
                </div>
          </div>

        </div>
        <!-- Ending of the component about Daniel Clifford -->

        <!-- Beginning of the component about Jonathan Walters -->
        <div class="bg-gray-900 lg:order-1 lg:row-span-3 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
          <div class="mx-8 my-10">

          </div>

        </div>
        <!-- Ending of the component about Jonathan Walters -->
           <div class="bg-indigo-600 lg:order-1 lg:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
               <div class="mx-5 my-5 ">

          </div>
        </div>

               <div class="bg-indigo-600 lg:order-1 lg:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
               <div class="mx-5 my-5 ">

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
            axios.get('/api/get_room_list/'+this.room_id+'?imej=1').then((response)=>{
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

