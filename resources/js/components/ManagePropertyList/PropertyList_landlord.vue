<template>


    <div class="max-w-3xl p-6 mx-auto mt-10 bg-gray-200 rounded-md" >
         <div  class="flex justify-end items-center">
                 <router-link  :to="{name: 'add_property'}" class=" bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-3 py-3 rounded-md">
                      + Add Property
                </router-link >
            </div>

        <property-card class="mt-5"></property-card>


    </div>




</template>
<script>
import propertyCard from './PropertyCard.vue';


export default {
     components: {
        propertyCard,

    },

    props: {


        },
    data(){

        return{


        }
    },
     methods:{

    },



}
</script>

