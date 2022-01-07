
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div :class="[modalBackground]" class="rounded max-h-full overflow-y-auto shadow-lg max-w-5xl p-6 mx-auto min-w-2/3" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Edit Room</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3">
            <!-- <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Property Details</h1> -->
            <section id="propertyDetail" v-show="activePhase == 1" class=" w-full p-6 mx-auto bg-gray-200 rounded-md shadow-md">

                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Edit Room</h2>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base ">-Room Details-</h2>
                <div>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700">Listing Name</label>
                            <input type="text" v-model="form.list_name" placeholder="Single room at Gambang" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>
                         <div>
                            <label class="text-gray-700" >Room Name</label>
                            <input  type="text" v-model="form.name" placeholder="Room 1"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>



                        <div>
                            <label class="text-gray-700" >Room Type</label>
                                <select  v-model="form.room_type" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md  focus:border-blue-500 focus:outline-none focus:ring" name="campus" required>
                                    <option class="text-gray-700 text-lg"  value="Single"> Single</option>
                                    <option class="text-gray-700 text-lg" value="Shared"> Shared</option>
                            </select>
                        </div>
                      <div>
                            <label class="text-gray-700" >Max no of tenants per room</label>
                            <input  type="number" v-model="form.number_of_tenant" placeholder="2" min=1 class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>

                        <div>
                            <label class="text-gray-700" >Monthly Rent (RM)</label>
                            <input  type="number" v-model="form.monthly_rent" step="any" min=0 placeholder="300"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>

                        <div>
                            <label class="text-gray-700" >Penalty Fees (Overdue)</label>
                            <input  type="number" v-model="form.penalty_fees" step=any min=0 placeholder="20"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>
                              <div>
                            <label class="text-gray-700" >Booking Key</label>
                            <input  type="text" v-model="form.booking_key" minlength=6 maxlength=6 placeholder="6 character eg. Tkeis7"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(2)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                    </div>
                </div>
            </section>




                <section id="Uploader" v-if="activePhase == 2"  class=" w-full p-6 mx-auto bg-gray-200 rounded-md shadow-md ">
                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Add Photos</h2>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base mb-5">-Property Image-</h2>
                      <button v-if="replace==false" @click.prevent="get_replace(0)" class="px-6 py-2 justify-end mr-5 leading-5 text-white transition-colors
                      duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Replace Images</button>
                      <button v-if="replace==true" @click.prevent="get_replace(1)" class="px-6 py-2 justify-end mr-5 leading-5 text-white transition-colors
                      duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Skip</button>
                <div>
                         <div v-if="replace==false" class="border-double border-4 border-light-blue-500" style="width:100%;margin:10px auto;height:250px">

                            <slider ref="slider" :options="options">
                                <slideritem   v-for="(item,index) in roomPhoto" :key="index" >

                                    <img class="h-70 w-full  relative" :src="'/images/Properties/'+item.photo_name" alt="Avatar"/>

                                </slideritem>
                                <div slot="loading">loading...</div>
                            </slider>
                        </div>
                    <div v-if="replace==true">
                        <ImageUploader v-model="form.photo_room" :hideLabel="true" :editImage="true" @getImage="getImages"></ImageUploader>
                    </div>
                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(1)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                        <button @click.prevent="goToNext(3)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                    </div>
                </div>
            </section>

            <section id="Furnisher" v-if="activePhase == 3"  class="mt-10 w-full p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800">
                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Furnishing and Description</h2>
                    <div class="w-full">
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base mt-6">-Furnishing-</h2>
                        <div class="grid grid-cols-3 gap-4 mt-4 sm:grid-cols-2">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" v-model="form.furnishing" value="Wardrobes"/>
                                <span class="ml-2">Wardrobes </span>
                            </label>

                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" v-model="form.furnishing"  value="Fan"/>
                                <span class="ml-2">Fan</span>
                            </label>

                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" v-model="form.furnishing" value="Study Table"/>
                                <span class="ml-2">Study Table</span>
                            </label>

                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" v-model="form.furnishing" value="A/C"/>
                                <span class="ml-2">A/C</span>
                            </label>
                        </div>
                    </div>
                    <div>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base mt-6">-Room Description-</h2>
                        <div class="w-full mt-4">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Room Description</label>
                            <textarea v-model="form.des" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(2)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                        <button @click.prevent="editProperty" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Room</button>
                    </div>
                </div>
            </section>

            </div>
                <div class="flex justify-end items-center w-100 border-t p-3">
                    <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
                </div>
    </div>
</div>
</template>

<script>
class Errors{
    constructor(){
        this.errors = {};
    }
    get(field){
        if(this.errors[field]){
            return this.errors[field][0];
        }
    }
    record(errors){
        this.errors = errors.errors;
    }
}

import ImageUploader from './ImageUploader.vue';
import GoogleMap from "./GoogleMap.vue";
import { slider, slideritem } from 'vue-concise-slider'
export default {
      props: {
        form: Object,
        room_id: Number,
        property_id: Number,
        roomPhoto: Array,
    },
components: {
    ImageUploader,
        GoogleMap,
          slider,
        slideritem,
  },

    data() {
        return {
            errors: new Errors(),
            type: 'password',
            btnText: 'Show Password',
            isVisible: false,
            modalBackground: 'bg-gradient-to-br from-sky-400 to-cyan-300',
            activePhase: 1,
            replace: false,
            chgPic: 0,
        }
    },
    methods: {
        goToNext(pg){
            this.activePhase = pg;
        },
        getImages(event){
            this.form.photo_room = event;

        },
        getCoordinates(lats, logs){
            this.form.lat = lats;
            this.form.log = logs;
        },
        get_replace(param){
            if(param == 0){
                this.replace = true;
                this.chgPic = 1
            }else{
                this.replace = false;
                this.chgPic = 0
            }


        },
     editProperty(){
            axios.post('/api/update_room/'+this.room_id+'/'+this.chgPic,
            this.form
            ).then(() =>{
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Room update successfully!',
                showConfirmButton: false,
                timer: 1500
                })
                this.closeModal();
                this.$emit("refreshData");

        }).catch(error =>this.errors.record(error.response.data));

        },
        showPassword() {
            if(this.type === 'password') {
                this.type = 'text'
            } else {
                this.type = 'password'
            }
             this.isVisible =! this.isVisible;
        },
        getAvatar(event){
            this.form.pic = event;
        },
         closeModal(){
             this.$emit("closeModal");
         },

    },
    mounted: function(){
         this.form.furnishing = this.form.furnishing.split(',');
    },
};

</script>

