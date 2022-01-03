<template>
<div>
  <!-- Property Result -->
     <div class="max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-inner" >
          <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">My Property For Rental</h2>
        <div v-if="lists.length==0"> You don't have any verified property yet.</div>
        <div else>
            <div v-for="(list,index) in lists" :key="index.id" class="flex justify-start  ">
                    <router-link :to="{ name: 'HousePlatform_Landlord', params:{id: list.id}}"
                        class="flex justify-center w-full px-8 py-4 overflow-hidden rounded-lg shadow-lg mt-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:bg-gray-900 hover:shadow-2xl bg-gray-800">
                    <div class="w-1/3 bg-cover" > <img class="h-48 w-full object-cover"  :src="'/images/Properties/'+list.cover.photo_name" alt="Avatar"  /></div>
                    <div class="w-2/3 p-4 md:p-4">
                        <div class="flex justify-between item-center">
                            <h1 class="text-2xl font-bold text-yellow-500"> {{ list.name }}</h1>
                            <h1 class="text-2xl font-bold text-red-500">{{list.status}}</h1>
                        </div>
                        <p class="mt-2 text-sm text-white ">{{ list.address }} | {{ list.campus }}</p>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-white ">{{ list.furnishing }} | {{ list.gender_preferences }}</p>
                        </div>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-blue-500 ">Toilet number: {{ list.toilet_num  }} | Created at: {{  moment(list.created_at).format("MMM-YYYY") }} </p>
                        </div>
                    </div>
                </router-link >
            </div>

        </div>

    </div>






</div>
</template>
<script>

import moment from "moment";
export default {

    props: {
        user_id: Number,
        role: Number,
    },
    data(){

        return{
            lists: [],
              moment: moment,
            top_btn_style: 'p-3 rounded bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white :active:bg-yellow-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl',
        }
    },
     methods:{
        getList(){
            axios.get('/api/get_rentalRoom/'+this.user_id+'/'+this.role+'?imej=1').then((response)=>{
                this.lists=response.data.data;
                console.warn(this.lists.data);
            })

        },
    },

    watch:{
        $route() {

        },
    },
       mounted: function(){
        this.getList();

    },



}
</script>

