<template>
    <div class="max-w-5xl p-6 mx-auto mt-10 bg-gray-200 rounded-md mb-10" >
        <div v-for= "house in property" :key="house.id"  class="flex justify-end items-center">
            <button @click="clickEdit(house); toggleModal = !toggleModal" class=" bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-4 py-3 rounded-md mb-2">
                + Edit Property
            </button>
        </div>
        <div  class="flex justify-end items-center">
            <button @click="toggleAddModal = !toggleAddModal"  class=" bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-5 py-3 rounded-md">
                + Add Room
            </button >
        </div>
        <div  v-for= "house in property" :key="house.id"  class="max-w-2xl px-8 py-4 mx-auto   overflow-hidden bg-white rounded-lg shadow-lg mt-5">
            <div class="w-full p-4 md:p-4">
                <div class="flex justify-between item-center">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Property Name: {{ house.name }}</h1>
                     <router-link :to="{ name: 'property', params:{property_id: house.id}}" class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200
                             transform bg-gray-800 rounded hover:bg-gray-700  focus:outline-none focus:bg-gray-700">
                             {{ house.status }}
                    </router-link >
                </div>
                      <!-- Images Carousel -->
            <div class="border-double border-4 border-light-blue-500" style="width:100%;margin:10px auto;height:250px">

                <slider ref="slider" :options="options">
                    <slideritem   v-for="(item,index) in propertyPhoto" :key="index" >

                        <img class="h-70 w-full  relative" :src="'/images/Properties/'+item.photo_name" alt="Avatar"/>
                            <p class=" absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full ">{{ item.photo_label }}</p>

                    </slideritem>
                    <div slot="loading">loading...</div>
                </slider>
            </div>
            <!-- Images Carousel -->
                <p class="mt-2 text-sm text-gray-600 "><span class="font-black"> Address: </span>  {{ house.address }}</p>
                <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 "><span class="font-black"> Description:</span> {{ house.des }}</p>
                </div>
                <div class="flex item-center">
                    <p class="mt-2 text-sm text-gray-600"><span class="font-black"> Furnishing: </span>{{ house.furnishing }}</p>
                </div>
                <div class="flex item-center">
                    <p class="mt-2 text-sm text-gray-600"><span class="font-black"> Location: </span></p>
                </div>
            </div>
                <GoogleMap :latitude="parseFloat(house.lat)" :logitude="parseFloat(house.log)" :registered="true"  />

            <div  v-for= "room in property" :key="room.id"  class="max-w-2xl px-8 py-4 mx-auto flex  overflow-hidden bg-white rounded-lg shadow-lg mt-5">
                <div class="w-1/3" > <img class="h-70 w-full object-cover" :src="'/images/Properties/'+room.cover.photo_name" alt="Avatar" /></div>

                <div class="w-2/3 p-4 md:p-4">
                    <div class="flex justify-between item-center">
                        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{{ room.name }}</h1>
                        <router-link :to="{ name: 'property', params:{property_id: room.id}}" class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200
                                transform bg-gray-800 rounded hover:bg-gray-700  focus:outline-none focus:bg-gray-700">
                                View Details
                        </router-link >
                    </div>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ room.address }}</p>
                    <div class="flex mt-2 item-center">
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ room.status }}</p>
                    </div>
                </div>
            </div>


        </div>

    <EditModal
            v-if="toggleModal"
            :form="form"
            :propertyPhoto="propertyPhoto"
            :property_id="parseInt(property_id)"
            @refreshData="getProperty"
            @closeModal="closeEditModal">
    </EditModal>

        <AddRoomModal
            v-if="toggleAddModal"
            :property_id="parseInt(property_id)"
            :landlord_id="parseInt(landlord_id)"
            @refreshData="getProperty"
            @closeModal="closeAddModal">
        </AddRoomModal>





    </div>
</template>

<script>
import RoomCard from './RoomCard.vue';
import { slider, slideritem } from 'vue-concise-slider'
import GoogleMap from "./GoogleMap.vue";
import EditModal from './EditProperty_Modal.vue';
import AddRoomModal from './AddRoom_Modal.vue';

// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        RoomCard,
        GoogleMap,
        EditModal,
        AddRoomModal,

        slider,
        slideritem,
        // VueperSlides,
        // VueperSlide

    },
    props: {

    },

    data(){
        return{
            toggleModal: false,
            toggleAddModal: false,
            property: [],
            landlord_id: '',
            property_id: this.$route.params.property_id,
            propertyPhoto:[],
            options: {
              currentPage: 0
            },
            form:{
                id: '',
                landlord_id: '',
                name: '',
                lat: '',
                log: '',
                address: '',
                postcode: '',
                des: '',
                campus: '',
                furnishing: '',
                status: '',
                photo: [],
            },
        }
    },
     methods:{
        getProperty(){
            axios.get('/api/get_property/'+this.property_id).then((response)=>{
                this.property=response.data.data;
                this.propertyPhoto = response.data.data[0].photo;
                this.landlord_id = response.data.data[0].landlord_id;
                console.warn(this.property.data);
                })
            },
        closeEditModal(){
            this.toggleModal =!  this.toggleModal ;
        },
        closeAddModal(){
            this.toggleAddModal =!  this.toggleAddModal ;
        },
        clickEdit(house){

            this.form.id= house.id,
            this.form.landlord_id= house.landlord_id,
            this.form.name= house.name,
            this.form.lat=house.lat,
            this.form.log= house.log,
            this.form.address= house.address,
            this.form.postcode= house.postcode,
            this.form.des= house.des,
            this.form.campus= house.campus,
            this.form.furnishing= house.furnishing,
            this.form.status= house.status,
            this.form.photo= house.photo

        },

    },
      mounted: function(){
        this.getProperty();
    },



}
</script>

