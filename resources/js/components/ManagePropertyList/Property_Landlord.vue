<template>
    <div :class="[margin]" class="max-w-5xl pt-5 pb-8 pl-8 pr-8   mx-auto  bg-gray-200 rounded-md " >
        <div v-if="role===2">
            <div v-for= "house in property" :key="house.id"  class="flex justify-end items-center">
                <button @click="$router.go(-1)" class=" bg-teal-500 shadow-lg hover:bg-teal-500 text-xs text-white px-4 py-3 rounded-md mb-2 mr-auto flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left mx-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                    Back
                </button>
                 <button @click="clickEdit(house); toggleModal = !toggleModal" class=" flex items-center bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-4 py-3 rounded-md mb-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pencil-square mr-1" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                 Edit Property
            </button>
            </div>
        </div>
      <div v-if="isReady==true">
        <div  v-for= "house in property" :key="house.id"  class="overflow-hidden bg-white rounded-lg shadow-lg mt-3 p-8">
            <div class="w-full p-4 md:p-4">
                <div class="flex justify-between item-center">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Property Name: {{ house.name }}</h1>
                     <div v-if="house.status=='verified'" class="capitalize px-3 py-2 text-xs font-bold text-white  flex items-center  bg-green-500 rounded  hover:text-white ">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            <span class="mx-1 text-sm sm:text-base">{{ house.status }}</span>
                    </div >
                </div>
                      <!-- Images Carousel -->
            <div class="border-double border-4 border-light-blue-500" style="width:100%;margin:10px auto;height:300px">

                <slider ref="slider" :options="options">
                    <slideritem   v-for="(item,index) in propertyPhoto" :key="index" >

                        <img class="h-70 w-full  relative" :src="'/images/Properties/'+item.photo_name" alt="Avatar"/>
                            <p class=" absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full ">{{ item.photo_label }}</p>

                    </slideritem>
                    <div slot="loading">loading...</div>
                </slider>
            </div>
            <!-- Images Carousel -->
                <div class="flex mt-2 item-center">
                     <p class="text-base text-gray-600 "><span class="font-black"> Address: </span>  {{ house.address }}</p>
                </div>
                <div class="flex item-center">
                    <p class="mt-2 text-base text-gray-600  whitespace-pre-wrap"><span class="font-black">Description:</span> {{ house.des }}</p>
                </div>

                <div class="flex item-center">
                    <p class="mt-2 text-base text-gray-600"><span class="font-black"> Furnishing: </span>{{ house.furnishing }}</p>
                </div>
                <div class="flex item-center">
                    <p class="mt-2 text-base text-gray-600"><span class="font-black"> No. of Toilet: </span>{{ house.toilet_num }}</p>
                </div>
                <div class="flex item-center">
                    <p class="mt-2 text-base text-gray-600"><span class="font-black"> Gender Preferences: </span>{{ house.gender_preferences }}</p>
                </div>
                <div class="flex item-center">
                    <p class="mt-2 text-base text-gray-600"><span class="font-black"> Location: </span></p>
                </div>
                 <GoogleMap :latitude="parseFloat(house.lat)" :logitude="parseFloat(house.log)" :registered="true"  />
                <div class="flex item-center mt-10  justify-between w-full p-6 items-center">
                     <p class="mt-2 text-xl font-bold text-gray-600 flex justify-start items-center"><span class="font-black"> Rooms Listing: </span></p>

                     <div v-if="role===2" class="flex justify-end items-center">
                        <button @click="toggleAddModal = !toggleAddModal"  class=" bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-5 py-3 rounded-md">
                            + Add Room
                        </button >
                    </div>
                      </div>

            </div>



            <div v-if="!rooms.length">
                <div class="bg-blue-200 border-yellow-600 text-gray-600  p-10 mt-3 " role="alert">
                   <center><p class="font-bold text-lg">No room is added yet</p></center>
            </div>

            </div>
            <div v-else>

            <div v-for= "room in rooms" :key="room.id"  class="flex justify-start  ">
                <router-link :to="{ name: route, params:{room_id: room.id}}" class="flex justify-center w-full px-8 py-4 overflow-hidden bg-blue-100 rounded-lg shadow-lg mt-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:bg-blue-400 hover:shadow-2xl">

                    <div v-if="room.photo_room != null" class="w-1/3 bg-cover" > <img class="h-48 w-full object-cover"   :src="'/images/Properties/'+room.photo_room[0].photo_name"  /></div>
                    <div v-else class="w-1/3 bg-cover" > <img class="h-48 w-full object-cover" alt="Avatar"  /></div>
                    <div class="w-2/3 p-4 md:p-4">
                        <div class="flex justify-between item-center">
                            <h1 class="text-2xl font-bold text-gray-800 dark:text-white"> {{ room.listing_name  }}</h1>
                            <h1 class="capitalize text-2xl font-bold text-yellow-800 dark:text-white">{{ room.room_status}}</h1>
                        </div>
                        <p class="mt-2 text-sm text-gray-700 dark:text-gray-400">Room Name {{ room.room_name }}</p>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-400">Room Type: {{ room.room_type }}</p>
                        </div>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-400">Monthly Rent: RM {{ room.monthly_rent }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
           </div>


        </div>

            <!-- loading -->
    </div>
    <div v-else>
     <loader :object="[object]" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
    </div>
  <!-- loading -->

    <EditModal
            v-if="toggleModal"
            :form="form"
            :propertyPhoto="propertyPhoto"
            :role = role
            :property_id="parseInt(property_id)"
            @refreshData="getProperty"
            @closeModal="closeEditModal">
    </EditModal>

        <AddRoomModal
            v-if="toggleAddModal"
            :property_id="parseInt(property_id)"
            :landlord_id="parseInt(landlord_id)"
            :role = role
            @refreshData="getRooms"
            @closeModal="closeAddModal">
        </AddRoomModal>





    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
import GoogleMap from "./GoogleMap.vue";
import EditModal from './EditProperty_Modal.vue';
import AddRoomModal from './AddRoom_Modal.vue';


export default {
    components: {
        GoogleMap,
        EditModal,
        AddRoomModal,

        slider,
        slideritem,
        // VueperSlides,
        // VueperSlide

    },
    props: {
        role: Number,
    },

    data(){
        return{
            toggleModal: false,
            toggleAddModal: false,
            isReady: false,
            property: [],
            landlord_id: '',
            rooms: [],
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
                gender_preferences: '',
                toilet_num: '',
                furnishing: '',
                status: '',
                photo: [],
            },
            margin: '',
            object: '',
            route: '',
        }
    },
     methods:{
        getProperty(){
            axios.get('/api/get_property/'+this.property_id+'?imej=1').then((response)=>{
                this.property=response.data.data;
                this.propertyPhoto = response.data.data[0].photo;
                this.landlord_id = response.data.data[0].landlord_id;

                console.warn(this.property.data);
            })
        },
        getRooms(){
            axios.get('/api/get_rooms/'+this.property_id).then((response)=>{
                this.rooms=response.data.data;
                this.isReady=true;
                console.warn(this.rooms.data);
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
            this.form.gender_preferences= house.gender_preferences
            this.form.toilet_num= house.toilet_num


        },
        getRole(){
        if(this.role == 1){
            this.object = '#dd7755'
        }else if (this.role == 2){
            this.margin = 'mt-5 mb-5 mb-10'
            this.object = '#4491ee'
            this.route = 'room_landlord'
        }else{
            this.object = '#dc4ae8'
             this.route = 'room_staff'
        }
        },

    },
      mounted: function(){
        this.getProperty();
        this.getRooms();
        this.getRole();
    },



}
</script>

