<template>


    <div class="max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-inner" >
         <div  class="flex justify-end items-center">
                 <router-link  :to="{name: 'add_property'}" class=" bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-3 py-3 rounded-md">
                      + Add Property
                </router-link >
            </div>

            <div v-if="!properties.length">
                <span>You don't have any property register yet. Please add property</span>
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




</template>
<script>
import RoomCard from './RoomCard.vue';
import moment from "moment";

export default {
    components: {
           RoomCard,
    },
    props: {
        user_id: Number,
        role: Number
        },

    data(){
        return{
               moment: moment,
            properties:[],
            btn: 'hidden',

        }
    },
     methods:{
        getProperty(){
            axios.get('/api/get_properties/'+this.user_id+'?imej=1').then((response)=>{
                this.properties=response.data.data;
                console.warn(this.properties.data);
                })
            },

    },
      mounted: function(){
            this.getProperty();
    },



}
</script>

