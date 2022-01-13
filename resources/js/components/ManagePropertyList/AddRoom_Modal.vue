
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div :class="[modalBackground]" class="rounded max-h-full overflow-y-auto shadow-lg  p-6 w-2/3 min-h-2/3" >
      <!-- modal header -->
      <div class="border-b px-4 flex justify-between items-center">
        <h3 class="font-black text-2xl">Add Room</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3 min-w-1/2">


            <section ref="section1"  class=" w-full p-6 mx-auto h-full bg-transparent rounded-md shadow-md ">

                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Room Listing</h2>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base ">-Room Details-</h2>
                <div>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700">Listing Name</label>
                            <input type="text" v-model="form.listingName" placeholder="Single room at Gambang" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>
                         <div>
                            <label class="text-gray-700" >Room Name</label>
                            <input  type="text" v-model="form.roomName" placeholder="Room 1"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
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
                            <input  type="number" v-model="form.number_tenants" placeholder="2" min="1" max="10" class="number block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>

                        <div>
                            <label class="text-gray-700" >Monthly Rent (RM)</label>
                            <input  type="number" v-model="form.monthly_rent" step="any" min="0" max="5000" placeholder="300"  class="number2 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>

                        <div>
                            <label class="text-gray-700" >Penalty Fees (Overdue)</label>
                            <input  type="number" v-model="form.penalty_fees" step=any min="0" max="5000" placeholder="20"  class="number3 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(2)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                    </div>
                </div>
            </section>



            <section ref="section2" class=" w-full p-6 bg-transparent rounded-md shadow-md h-full hidden">
                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Add Photos</h2>
                <h2 class=" font-bold text-gray-700 capitalize text-center text-base mb-5">-Room Images-</h2>
                <div>
                    <keep-alive>
                        <ImageUploader :hideLabel="true" :editImage="false" @getImage="getImages" class=""></ImageUploader>
                    </keep-alive>
                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(1)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                        <button @click.prevent="goToNext(3)" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                    </div>
                </div>
            </section>



            <section ref="section3"   class="w-full p-6  bg-transparent rounded-md shadow-md h-full hidden">
                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Furnishing and Description</h2>
                    <div>
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
                            <textarea v-model="form.description" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(2)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                        <button @click.prevent="submitRoom" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none ">Submit List</button>
                    </div>
                </div>
            </section>


            </div>
                <div class="flex justify-end items-center  border-t">
                    <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white mr-3 close-modal mt-2 ">Cancel</button>
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
import { slider, slideritem } from 'vue-concise-slider'
export default {
    props: {
        property_id: Number,
        landlord_id: Number,
        role: Number,
    },
    components: {
        ImageUploader,
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

            form: {
                listingName: '',
                roomName:'',
                images: [],
                //imageLabel: [],
                description: '',
                furnishing: [],
                room_type: '',
                penalty_fees: '',
                number_tenants: '',
                monthly_rent: '',
                prop_id: this.property_id,
                land_id: this.landlord_id
            },
        }
    },
    methods: {
        goToNext(pg){
            this.activePhase = pg;
            let section1 = this.$refs.section1;
            let section2 = this.$refs.section2;
            let section3 = this.$refs.section3;

            if (this.activePhase==1) {


                    section1.classList.remove("hidden");
                    section2.classList.add("hidden");
                    section3.classList.add("hidden");


            }else if (this.activePhase==2){
                 if(this.form.listingName=='' || this.form.monthly_rent=='' || this.form.number_tenants=='' ||this.form.penalty_fees=='' ||this.form.room_type=='' ||this.form.roomName==''){
                     this.$toaster.error('Please fill all  the required fields')
                }else{
                    section1.classList.add("hidden");
                    section2.classList.remove("hidden");
                    section3.classList.add("hidden");
                }

            }else if (this.activePhase==3){
                    if(this.form.images.length<=0 ){
                     this.$toaster.error('Please  upload some picture')
                }else{
                    section1.classList.add("hidden");
                    section2.classList.add("hidden");
                    section3.classList.remove("hidden");
                }

            }
        },
        getImages(event, event2){
            this.form.images = event;
            //this.form.imageLabel = event2
        },
        submitRoom(){
            axios.post('/api/create_room',
            this.form
            ).then(() =>{
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Room added successfully!',
                showConfirmButton: false,
                timer: 1500
                })
                this.closeModal();
                this.$emit("refreshData");

        }).catch(error =>this.errors.record(error.response.data));

        },
         closeModal(){
             this.$emit("closeModal");
         },
         hideElement(){
            let section1 = this.$refs.section1;
            let checdiv = this.$refs.chec;

            if (!flag) {
                notification.classList.add("translate-x-full");
                notification.classList.remove("translate-x-0");
            }

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
         //this.form.furnishing = this.form.furnishing.split(',');
         document.querySelector(".number").addEventListener("keypress", function (evt) {
            if (evt.which < 48 || evt.which > 57)
            {
                evt.preventDefault();
            }
        });
         document.querySelector(".number2").addEventListener("keypress", function (evt) {
            if (evt.which < 48 || evt.which > 57)
            {
                evt.preventDefault();
            }
        });
         document.querySelector(".number3").addEventListener("keypress", function (evt) {
            if (evt.which < 48 || evt.which > 57)
            {
                evt.preventDefault();
            }
        });
    },
};

</script>
