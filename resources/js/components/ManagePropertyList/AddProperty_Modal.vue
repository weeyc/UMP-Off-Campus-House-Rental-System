<template>
<div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div :class="[modalBackground]" class="rounded max-h-full overflow-y-auto shadow-lg  p-6 w-2/3 min-h-2/3" >
      <!-- modal header -->
      <div class="border-b px-4 flex justify-between items-center">
        <h3 class="font-black text-2xl">Add Property</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3 min-w-1/2">

    <section id="propertyDetail" v-show="activePhase == 1" class="w-full p-6 mx-auto bg-transparent rounded-md shadow-md dark:bg-gray-800">
        <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Property Application</h2>
          <h2 class=" font-bold text-gray-700 capitalize text-center text-base ">-Property Details-</h2>
        <div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700">Property Name</label>
                    <input type="text" placeholder="eg. Taman Sri Gambang" v-model="form.propertyName" name="name"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
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
                <div>
                    <label class="text-gray-700">No. of toilet</label>
                    <input type="number" v-model="form.toilet_num" min=1 max=5 placeholder="eg. 2" class="number block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                </div>

               <div>
                    <label class="text-gray-700" >Gender Preferences</label>
                      <select v-model="form.gender_preferences" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md  focus:border-blue-500 focus:outline-none focus:ring" name="gender" required>
                            <option class="text-gray-700 text-lg" value="Any">Any</option>
                            <option class="text-gray-700 text-lg" value="Male">Male</option>
                            <option class="text-gray-700 text-lg" value="Female">Female</option>
                        </select>
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button @click.prevent="goToNext(2)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
            </div>
        </div>
    </section>


    <section id="Uploader" v-if="activePhase == 2"  class="w-full max-w-4xl p-6 mx-auto bg-transparent rounded-md shadow-md dark:bg-gray-800">
        <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Add Photos</h2>
          <h2 class=" font-bold text-gray-700 capitalize text-center text-base mb-5">-Property Image-</h2>
        <div>
            <keep-alive>
                <ImageUploader :editImage="true" :hideLabel="false" @getImage="getImages"></ImageUploader>
            </keep-alive>
            <div class="flex justify-end mt-6">
                <button @click.prevent="goToNext(1)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                <button @click.prevent="goToNext(3)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
            </div>
        </div>
    </section>

    <section id="Furnisher" v-if="activePhase == 3"  class="w-full p-6 mx-auto bg-transparent rounded-md shadow-md dark:bg-gray-800">
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
                        <input type="checkbox" class="form-checkbox" v-model="form.furnishing" value="Water Heater"/>
                        <span class="ml-2">Water Heater</span>
                    </label>
                     <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="form-checkbox" v-model="form.furnishing" value="Refrigerator"/>
                        <span class="ml-2">Refrigerator</span>
                    </label>
                     <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="form-checkbox" v-model="form.furnishing" value="Sofa"/>
                        <span class="ml-2">Sofa</span>
                    </label>
                 </div>
            </div>
            <div>
            <h2 class=" font-bold text-gray-700 capitalize text-center text-base mt-6">-Property Description-</h2>
                <div class="w-full mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Property Description</label>
                    <textarea v-model="form.description" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                </div>
                <div class="flex justify-end mt-6">
                    <button @click.prevent="goToNext(2)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                    <button @click.prevent="goToNext(4)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                </div>
        </div>
    </section>

      <section id="gps" v-if="activePhase == 4"  class="w-full p-6 mx-auto bg-transparent rounded-md shadow-md dark:bg-gray-800">
        <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Add Property Location </h2>
            <div>
            <h2 class=" font-bold text-gray-700 capitalize text-center text-base mt-6">-GPS Coordinate-</h2>
                <div class="w-full mt-4">
                      <label class="text-gray-700">Address</label>
                    <input type="text" placeholder="eg. Taman Sri Gambang" v-model="form.address" name="name"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" readonly>
                 <span class="mt-5">Please drag the red marker for a accurate location</span>

                      <GoogleMap @getCoordinate="getCoordinates" :registered="false"/>

                </div>

                <div class="flex justify-end mt-6">
                    <button @click.prevent="goToNext(3)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                    <button @click.prevent="submitProperty" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit Property</button>
                </div>
        </div>
    </section>

    </div>
            <div class="flex justify-end items-center  border-t">
                    <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white mr-7 close-modal mt-2 ">Cancel</button>
                </div>
    </div>

    </div>











</template>
<script>
import ImageUploader from './ImageUploader.vue';
import GoogleMap from "./GoogleMap.vue";


export default {
     components: {
        ImageUploader,
        GoogleMap,
    },

    props: {
            user_id: Number,
            role: Number
        },
    data(){

        return{

            activePhase: 1,
            form: {
                propertyName:'',
                campus: 'Gambang',
                address: '',
                postcode: '',
                images: [],
                imageLabel: [],
                description: '',
                toilet_num:'',
                gender_preferences: '',
                furnishing: [],
                latitude: '',
                logitude: '',
                id: this.user_id
            },
            modalBackground:'bg-gradient-to-br from-sky-400 to-cyan-300',
        }
    },
     methods:{
        goToNext(pg){
        if (pg==1) {
            this.activePhase = pg;
        }else if (pg==2){
            if(this.form.propertyName=='' || this.form.address=='' || this.form.postcode=='' ||this.form.gender_preferences=='' ||this.form.campus=='' ||this.form.toilet_num==''){
                 this.$toaster.error('Please fill all  the required fields')
            }else{
              this.activePhase = pg;
            }
        }else if (pg==3){
            if(this.form.images.length<=0 || this.form.imageLabel.length<=0 ){
                this.$toaster.error('Please upload some picture and label it')
            }else{
                this.activePhase = pg;
            }
        }else if (pg==4){
             this.activePhase = pg;
        }


        },
        getImages(event, event2){
            this.form.images = event;

            this.form.imageLabel = event2
        },
        getCoordinates(lat, log){
            this.form.latitude = lat;
            this.form.logitude = log;
        },
        closeModal(){
        this.$emit("closeModal");
    },

     submitProperty(){

             axios.post('/api/create_property',
                this.form
                )
                .then(() =>{
                    Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Property Submitted!',
                    showConfirmButton: false,
                    timer: 1500
                    })
                    this.form.propertyName='';
                    this.form.campus='Gambang';
                    this.form.address='';
                    this.form.postcode='';
                    this.form.images=[];
                    this.form.imageLabel=[];
                    this.form.description='';
                    this.closeModal();
                    this.$emit("refreshData");
                    console.log(response.data);
            })
            .then(response => {
            console.log(response.data);
        })

            // .catch(error =>this.errors.record(error.response.data));

        },

    },
       mounted: function(){

         document.querySelector(".number").addEventListener("keypress", function (evt) {
            if (evt.which < 48 || evt.which > 57)
            {
                evt.preventDefault();
            }
        });

    },




}
</script>

