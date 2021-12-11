<template>


    <div class="max-w-3xl p-6 mx-auto mt-10 bg-gray-200 rounded-md mb-10" >
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
                <div  v-for= "property in properties" :key="property.id"  class="max-w-2xl px-8 py-4 mx-auto flex  overflow-hidden bg-white rounded-lg shadow-lg mt-5">
                    <div v-if="property.cover != null" class="w-1/3 bg-cover" > <img class="rounded-full h-50 w-50 object-cover" :src="'/images/Properties/'+property.cover.photo_name" alt="Avatar" /></div>
                    <div v-else class="w-1/3 bg-cover" > <img class="rounded-full h-50 w-50 object-cover" :src="'/images/Properties/'+property.photo[0].photo_name" alt="Avatar" /></div>

                    <div class="w-2/3 p-4 md:p-4">
                        <div class="flex justify-between item-center">
                            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{{ property.name }}</h1>
                            <router-link :to="{ name: 'property', params:{property_id: property.id}}" class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200
                                    transform bg-gray-800 rounded hover:bg-gray-700  focus:outline-none focus:bg-gray-700">
                                    View Details
                            </router-link >
                        </div>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ property.address }}</p>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ property.status }}</p>
                        </div>
                    </div>
                </div>
           </div>


    </div>




</template>
<script>
import RoomCard from './RoomCard.vue';


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
            properties:[],

        }
    },
     methods:{
        getProperty(){
            axios.get('/api/get_properties/'+this.user_id).then((response)=>{
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

