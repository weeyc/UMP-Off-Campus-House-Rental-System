<template>


    <div class="max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-inner" >
         <div  class="flex justify-end items-center">
                  <button @click="toggleAddModal = !toggleAddModal"  class="  focus:text-white hover:text-white bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-3 py-3 rounded-md">
                        + Add Property
                 </button >
            </div>
        <div v-if="isReady==true">
            <div v-if="!properties.length">
                 <div class="bg-blue-200 border-yellow-600 text-gray-600  p-20 mt-3 " role="alert">
                   <center><p class="font-bold text-base mt-48 mb-48">You don't have any property register yet. Please add property</p></center>
                 </div>

            </div>
            <div v-else>
                <!-- property card -->
                <div v-for= "property in properties" :key="property.id" class="flex justify-start  ">
                <router-link :to="{ name: 'property', params:{property_id: property.id, role: role }}"  class="flex justify-center w-full px-8 py-4 overflow-hidden bg-white rounded-lg shadow-lg mt-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:bg-blue-400 hover:shadow-2xl">

                    <div v-if="property.cover != null"  class="w-1/3 bg-cover" > <img class="h-48 w-full object-cover"   :src="'/images/Properties/'+property.cover.photo_name"  /></div>
                    <div v-else class="w-1/3 bg-cover" > <img class="h-48 w-full object-cover" :src="'/images/Properties/'+property.photo[0].photo_name" alt="Avatar"  /></div>
                    <div class="w-2/3 p-4 md:p-4">
                        <div class="flex justify-between item-center">
                            <h1 class="text-2xl font-bold text-gray-800 dark:text-white"> {{ property.name }}</h1>
                            <h1 class="text-2xl font-bold text-yellow-800 dark:text-white">{{property.status}}</h1>
                        </div>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ property.address }} | {{ property.campus }}</p>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ property.postcode }} | {{ property.gender_preferences }}</p>
                        </div>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ property.furnishing }}| Created at: {{  moment(property.created_at).format("MMM-YYYY") }}</p>
                        </div>
                    </div>
                </router-link>
            </div>

           </div>
        </div>
        <div v-else>
            <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="circular"></loader>
        </div>



        <AddPropertyModal
            v-if="toggleAddModal"
            :role = role
            :user_id="user_id"
            @refreshData="getProperty"
            @closeModal="closeAddModal">
        </AddPropertyModal>



    </div>
</template>
<script>

import moment from "moment";
import AddPropertyModal from './AddProperty_Modal.vue';
export default {
    components: {
        AddPropertyModal
    },
    props: {
        user_id: Number,
        role: Number
        },

    data(){
        return{
            moment: moment,
            isReady: false,
            properties:[],
            btn: 'hidden',
            toggleAddModal: false,

        }
    },
     methods:{
        getProperty(){
            axios.get('/api/get_properties/'+this.user_id+'?imej=1').then((response)=>{
                this.properties=response.data.data;
                this.isReady=true;
                console.warn(this.properties.data);
                })
            },
        closeAddModal(){
            this.toggleAddModal =!  this.toggleAddModal ;
        },

    },
      mounted: function(){
            this.getProperty();
    },



}
</script>

