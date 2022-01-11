<template>
    <div class="max-w-5xl pt-5 pb-8 pl-8 pr-8  mx-auto mt-5 bg-gray-200 rounded-md mb-10" >
         <div v-if="role===2">
        <div v-for= "list in room" :key="list.id"  class="flex justify-end items-center">
            <button @click="$router.go(-1)" class=" bg-teal-500 shadow-lg hover:bg-teal-500 text-xs text-white px-4 py-3 rounded-md mb-2 mr-auto flex items-center">
                <svg class="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
                    <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
                </svg>
                Back
            </button>
            <button @click="clickEdit(list); toggleModal = !toggleModal" class=" flex items-center bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-4 py-3 rounded-md mb-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pencil-square mr-1" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                 Edit Room
            </button>
            <button @click="deleteRoom(list.id);" class="flex items-center ml-2 bg-red-600 shadow-lg hover:bg-red-700 text-xs text-white px-4 py-3 rounded-md mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash mr-1" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                Delete Room
            </button>
        </div>
        </div>
 <div v-if="isReady==true">
        <div  v-for= "list in room" :key="list.id"  class="overflow-hidden bg-white rounded-lg shadow-lg mt-3 p-8">
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
<!-- loading -->
    </div>
    <div v-else>
     <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
    </div>
  <!-- loading -->

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
               isReady: false,

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
                status: '',
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
                this.isReady=true;
                console.warn(this.rooms.data);
            })
        },
          deleteRoom(id){
              if(this.room[0].room_status!='rented'){
                     Swal.fire({
                title: 'Are you sure?',
                text: "Delete room for listing",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete this room!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete('/api/delete_room/'+id).then((response)=>{

                            console.log(response)
                                Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Room deleted successfully!',
                                showConfirmButton: false,
                                timer: 1500,
                                })
                        this.$router.go(-1);
                        }).catch((errors)=> {
                            console.log(errors)
                        })

                    }
            })
              }else{
                    this.$toaster.info('This room is currently occupied by tenant')
              }


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
            this.form.status=list.room_status
        },

    },
      mounted: function(){

        this.getRoom();
    },



}
</script>

