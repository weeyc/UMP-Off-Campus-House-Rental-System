<template>


    <div class="max-w-5xl p-6 mx-auto mt-10 bg-gray-200 rounded-md mb-10" >
        <div  class="flex justify-end items-center">
            <router-link  :to="{name: 'add_property'}" class=" bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-4 py-3 rounded-md mb-2">
                + Edit Property
            </router-link >
        </div>
        <div  class="flex justify-end items-center">
            <router-link  :to="{name: 'add_property'}" class=" bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-5 py-3 rounded-md">
                + Add Room
            </router-link >
        </div>
             <!-- Images Carousel -->
            <div class="border-double border-4 border-light-blue-500" style="width:50%;margin:10px auto;height:250px">

                <slider ref="slider" :options="options">
                    <slideritem   v-for="(item,index) in propertyPhoto" :key="index" >

                        <img class="h-70 w-full  relative" :src="'/images/Properties/'+item.photo_name" alt="Avatar"/>
                          <p class=" absolute bottom-0 text-xs text-white bg-black w-full ">{{ item.photo_label }}</p>

                    </slideritem>
                    <div slot="loading">loading...</div>
                </slider>
            </div>
            <!-- Images Carousel -->

        <div  v-for= "house in property" :key="house.id"  class="max-w-2xl px-8 py-4 mx-auto flex  overflow-hidden bg-white rounded-lg shadow-lg mt-5">
            <div class="w-1/3 bg-cover" > <img class="rounded-full h-50 w-50 object-cover" :src="'/images/Properties/'+house.cover.photo_name" alt="Avatar" /></div>

            <div class="w-2/3 p-4 md:p-4">
                <div class="flex justify-between item-center">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{{ house.name }}</h1>
                     <router-link :to="{ name: 'property', params:{property_id: house.id}}" class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200
                             transform bg-gray-800 rounded hover:bg-gray-700  focus:outline-none focus:bg-gray-700">
                             View Details
                    </router-link >
                </div>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ house.address }}</p>
                <div class="flex mt-2 item-center">
                     <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ house.status }}</p>
                </div>
            </div>
        </div>





    </div>
</template>

<script>
import propertyCard from './PropertyCard.vue';
import { slider, slideritem } from 'vue-concise-slider'

// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        propertyCard,
        slider,
        slideritem,
        // VueperSlides,
        // VueperSlide

    },
    props: {
        user_id: Number,
        role: Number
        },

    data(){
        return{
            property: [],
            property_id: this.$route.params.property_id,
            propertyPhoto:[],
         images:[
          {
            photo_name: 'tNoY7UBzkrVsBrdf.jpg',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            photo_name: 'qCiJ355NdnK2QMlS.png',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            photo_name: 'Z5iDSk0PSSZWrAZZ.jpg',
            style: {
              'background': '#7baabe'
            }
          }
        ],
        options: {
          currentPage: 0
        },
        }
    },
     methods:{
        getProperty(){
            axios.get('/api/get_property/'+this.property_id).then((response)=>{
                this.property=response.data.data;
                this.propertyPhoto = response.data.data[0].photo;
                console.warn(this.property.data);
                })
            },

    },
      mounted: function(){
            this.getProperty();
    },



}
</script>

