<template>
    <div class="max-w-5xl p-6 mx-auto mt-10 bg-gray-200 rounded-md mb-10" >
         <div v-if="role===2">
        <div v-for= "list in room" :key="list.id"  class="flex justify-end items-center">
            <button @click="clickEdit(list); toggleModal = !toggleModal" class=" bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-4 py-3 rounded-md mb-2">
                + Edit Room
            </button>
        </div>
        </div>

        <div  v-for= "list in room" :key="list.id"  class="p-5 overflow-hidden bg-white rounded-lg shadow-lg mt-5">
            <div class="w-full p-4 md:p-4">
                <div class="flex justify-between item-center">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Listing Room Name: {{ list.listing_name }}</h1>

                     <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200
                             transform bg-gray-800 rounded hover:bg-gray-700">
                             {{ list.room_status }}
                    </button >
                </div>
                      <!-- Images Carousel -->
            <div class="border-double border-4 border-light-blue-500" style="width:100%;margin:10px auto;height:300px">

                <slider ref="slider" :options="options">
                    <slideritem   v-for="(item,index) in roomPhoto" :key="index" >

                        <img class="h-70 w-full  relative" :src="'/images/Properties/'+item.photo_name" alt="Avatar"/>
                            <!-- <p class=" absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full ">{{ item.photo_label }}</p> -->

                    </slideritem>
                    <div slot="loading">loading...</div>
                </slider>
            </div>
            <!-- Images Carousel -->
              <div class="flex mt-2 item-center">
                   <p class="mt-2 text-sm text-gray-600 "><span class="font-black"> Room Type: </span>  {{ list.room_name }}</p>
                </div>
              <div class="flex mt-2 item-center">
                   <p class="mt-2 text-sm text-gray-600 "><span class="font-black"> Room Type: </span>  {{ list.room_type }}</p>
                </div>

                <div class="flex mt-2 item-center">
                    <p class="mt-2 text-sm text-gray-600 "><span class="font-black"> Room Description:</span> {{ list.room_description }}</p>
                </div>
                    <div class="flex item-center">
                    <p class="mt-2 text-sm text-gray-600"><span class="font-black">Room Furnishing: </span>{{ list.room_furnishing }}</p>
                </div>
                <div class="flex item-center">
                    <p class="mt-2 text-sm text-gray-600"><span class="font-black"> Room Max. Tenant: </span>{{ list.number_of_tenant }}</p>
                </div>

                   <div class="flex item-center">
                    <p class="mt-2 text-sm text-gray-600"><span class="font-black"> Room Monthly Rent: RM </span>{{ list.monthly_rent }}</p>
                </div>
                   <div class="flex item-center">
                    <p class="mt-2 text-sm text-gray-600"><span class="font-black"> Booking Key: </span>{{ list.booking_key }}</p>
                </div>



            </div>











        </div>

    <EditRoomModal
            v-if="toggleModal"
            :form="form"
            :roomPhoto="roomPhoto"
            :property_id="parseInt(property_id)"
            :room_id="parseInt(room_id)"
            @refreshData="getRoom"
            @closeModal="closeEditModal">
    </EditRoomModal>







    </div>
</template>

<script>
import RoomCard from './RoomCard.vue';
import { slider, slideritem } from 'vue-concise-slider'
import GoogleMap from "./GoogleMap.vue";
import EditRoomModal from './EditRoom_Modal.vue';


// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        RoomCard,
        GoogleMap,
        EditRoomModal,

        slider,
        slideritem,
        // VueperSlides,
        // VueperSlide

    },
    props: {
         user_id: Number,
        role: Number,
    },

    data(){
        return{
            toggleModal: false,
            toggleAddModal: false,
            property: [],
            landlord_id: '',
            rooms: [],
            room: [],
            property_id: this.$route.params.property_id,
            room_id: this.$route.params.room_id,
            roomPhoto:[],
            options: {
              currentPage: 0
            },

            form: {
                id: '',
                list_name: '',
                name:'',
                photo_room: [],
                booking_key: '',
                des: '',
                furnishing: [],
                room_type: '',
                penalty_fees: '',
                number_of_tenant: '',
                monthly_rent: '',
                property_id: '',
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
        getRoom(){
            axios.get('/api/get_room/'+this.room_id).then((response)=>{
                this.room=response.data.data;
                this.roomPhoto = response.data.data[0].photo_room;
                this.landlord_id = response.data.data[0].landlord_id;
                console.warn(this.rooms.data);
            })
        },
        closeEditModal(){
            this.toggleModal =!  this.toggleModal ;
        },
        closeAddModal(){
            this.toggleAddModal =!  this.toggleAddModal ;
        },
        clickEdit(list){
            this.form.id= list.id,
            this.form.list_name= list.listing_name,
            this.form.name= list.room_name,
            this.form.des= list.room_description,
            this.form.furnishing= list.room_furnishing,
            this.form.room_type= list.room_type
            this.form.photo_room= list.photo_room
            this.form.monthly_rent= list.monthly_rent
            this.form.penalty_fees= list.penalty_fees
            this.form.booking_key= list.booking_key
            this.form.number_of_tenant= list.number_of_tenant
            this.form.property_id=this.property_id
        },

    },
      mounted: function(){

        this.getRoom();
    },



}
</script>

