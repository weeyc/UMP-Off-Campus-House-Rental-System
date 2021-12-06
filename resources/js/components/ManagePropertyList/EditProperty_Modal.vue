
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div :class="[modalBackground]" class="rounded max-h-full overflow-y-auto shadow-lg max-w-5xl p-6 mx-auto min-w-full" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Edit Property</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3">
            <!-- <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Property Details</h1> -->
            <section id="propertyDetail" v-show="activePhase == 1" class=" max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md">

                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Edit Property</h2>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base ">-Property Details-</h2>
                <div>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700">Property Name</label>
                            <input type="text" placeholder="eg. Taman Sri Gambang" v-model="form.name" name="name"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>

                        <div>
                            <label class="text-gray-700" >Campus</label>
                                <select v-model="form.campus" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md  focus:border-blue-500 focus:outline-none focus:ring" name="campus" required>
                                    <option class="text-gray-700 text-lg" value="Gambang"> Gambang</option>
                                    <option class="text-gray-700 text-lg" value="Pekan"> Pekan</option>
                                </select>
                        </div>

                        <div>
                            <label class="text-gray-700" >Address</label>
                            <input  type="text"  v-model="form.address"  name="address" placeholder="eg. Taman Sri Gambang, 26600 Pekan, Pahang"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>

                        <div>
                            <label class="text-gray-700">Postcode</label>
                            <input type="text" v-model="form.postcode" placeholder="eg. 22600" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(2)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                    </div>
                </div>
            </section>


            <section id="Uploader" v-if="activePhase == 2"  class=" max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md ">
                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Add Photos</h2>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base mb-5">-Property Image-</h2>
                      <button v-if="replace==false" @click.prevent="get_replace(0)" class="px-6 py-2 justify-end mr-5 leading-5 text-white transition-colors
                      duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Replace Images</button>
                      <button v-if="replace==true" @click.prevent="get_replace(1)" class="px-6 py-2 justify-end mr-5 leading-5 text-white transition-colors
                      duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Skip</button>
                <div>
                         <div v-if="replace==false" class="border-double border-4 border-light-blue-500" style="width:100%;margin:10px auto;height:250px">

                            <slider ref="slider" :options="options">
                                <slideritem   v-for="(item,index) in propertyPhoto" :key="index" >

                                    <img class="h-70 w-full  relative" :src="'/images/Properties/'+item.photo_name" alt="Avatar"/>
                                        <p class=" absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full ">{{ item.photo_label }}</p>

                                </slideritem>
                                <div slot="loading">loading...</div>
                            </slider>
                        </div>
                    <div v-if="replace==true">
                        <ImageUploader v-model="form.photo" :editImage="true" @getImage="getImages"></ImageUploader>
                    </div>
                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(1)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                        <button @click.prevent="goToNext(3)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                    </div>
                </div>
            </section>

                <section id="Furnisher" v-if="activePhase == 3"  class="max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md">
                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Furnishing and Description</h2>
                    <div>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base mt-6">-Furnishing-</h2>
                        <div class="grid grid-cols-3 gap-4 mt-4 sm:grid-cols-2">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="" v-model="form.furnishing" value="Internet"/>
                                <span class="ml-2">Internet</span>
                            </label>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="form-checkbox" v-model="form.furnishing" value="Washing Machine"/>
                                <span class="ml-2">Washing Machine</span>
                            </label>

                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="form-checkbox" v-model="form.furnishing" value="Dining Table"/>
                                <span class="ml-2">Dining Table</span>
                            </label>

                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="form-checkbox" v-model="form.furnishing" value="Refrigerator"/>
                                <span class="ml-2">Refrigerator</span>
                            </label>
                            </div>
                    </div>
                    <div>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base mt-6">-Property Description-</h2>
                        <div class="w-full mt-4">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Property Description</label>
                            <textarea v-model="form.des" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                        <div class="flex justify-end mt-6">
                            <button @click.prevent="goToNext(2)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                            <button @click.prevent="goToNext(4)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                        </div>
                </div>
            </section>

            <section id="gps" v-if="activePhase == 4"  class="max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md ">
                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Add Property Location </h2>
                    <div>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base mt-6">-GPS Coordinate-</h2>
                        <div class="w-full mt-4">
                                <label class="text-gray-700">Address</label>
                            <input type="text" placeholder="eg. Taman Sri Gambang" v-model="form.address" name="name"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" readonly>
                            <span class="mt-5">Please drag the red marker for a accurate location</span>
                            <keep-alive>
                                <GoogleMap @getCoordinate="getCoordinates" :registered="false"/>
                                </keep-alive>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button @click.prevent="goToNext(3)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                            <button @click.prevent="editProperty" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Property</button>
                        </div>
                </div>
            </section>


            </div>
                <div class="flex justify-end items-center w-100 border-t p-3">
                    <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
                    <button @click.prevent="editProperty" type="submit" class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white">Update</button>
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
        property_id: Number,
        propertyPhoto: Array,
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
            modalBackground: '',
            activePhase: 1,
            replace: false,
        }
    },
    methods: {
            goToNext(pg){
            this.activePhase = pg;
        },
        getImages(event, event2){
            this.form.images = event;
            this.form.imageLabel = event2
        },
        getCoordinates(lats, logs){
            this.form.lat = lats;
            this.form.log = logs;
        },
        get_replace(param){
            if(param == 0){
                this.replace = true;
            }else
                this.replace = false;

        },
     editProperty(){
            axios.post('/api/update_property/'+this.property_id,
            this.form
            ).then(() =>{
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Property update successfully!',
                showConfirmButton: false,
                timer: 1500
                })
                this.closeModal();

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
        getRole(){
            if(this.role == 1){
                this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400'
            }else if (this.role == 2){
                this.modalBackground = 'bg-gradient-to-br from-sky-400 to-cyan-300'
            }else{
                this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400'
            }
          }
    },
    mounted: function(){
        this.getRole();
    },
};

</script>
