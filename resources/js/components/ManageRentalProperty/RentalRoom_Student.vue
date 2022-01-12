<template>
<div>

  <!-- Room Result -->
     <div class="max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-inner" >
          <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">My Rental Room</h2>
        <div v-if="isReady==true">
        <div v-if="lists.length==0">
            <div class="bg-yellow-200 border-yellow-600 text-gray-600  p-10 mt-3 " role="alert">
                   <center><p class="font-bold text-base"> You are not renting any room yet.</p></center>
            </div>
        </div>
        <div else>
            <div v-for="(list,index) in lists" :key="index.id" class="flex justify-start  ">
                    <router-link :to="{ name: 'HousePlatform_Std', params:{id: list.room.id}}"
                        class="flex justify-center w-full px-8 py-4 overflow-hidden rounded-lg shadow-lg mt-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:bg-gray-900 hover:shadow-2xl bg-gray-800">
                <!-- flex justify-center bg-white rounded-xl border-2 overflow-hidden -->
                    <div class="w-1/3 bg-cover" > <img class="h-48 w-full object-cover"  :src="'/images/Properties/'+list.room.photo_room[0].photo_name" alt="Avatar"  /></div>
                    <div class="w-2/3 p-4 md:p-4">
                        <div class="flex justify-between item-center">
                            <h1 class="text-2xl font-bold text-yellow-500"> {{ list.room.listing_name }}</h1>
                            <h1 class="text-2xl font-bold text-red-500">RM{{list.room.monthly_rent}}/Month</h1>
                        </div>
                        <p class="mt-2 text-sm text-white ">{{ list.room.property.name }} | {{ list.room.campus }}</p>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-white ">{{ list.room.room_type }} | {{ list.room.property.gender_preferences }}</p>
                        </div>
                        <div class="flex mt-2 item-center">
                            <p class="mt-2 text-sm text-blue-500 ">{{ list.move_in_date  }} | {{ list.tenancy_period }} Months</p>
                        </div>
                    </div>
                </router-link >
            </div>

        </div>
            <!-- loading -->
    </div>
    <div v-else>
        <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="circular"></loader>
    </div>
  <!-- loading -->

    </div>






</div>
</template>
<script>


export default {

    props: {
        user_id: Number,
        role: Number,
    },
    data(){

        return{
            lists: [],
            isReady: false,
            top_btn_style: 'p-3 rounded bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white :active:bg-yellow-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl',
        }
    },
     methods:{
        getList(){
            axios.get('/api/get_rentalRoom/'+this.user_id+'/'+this.role+'?land=1', {
                params: {
                    location: this.location,
                }
                }).then((response)=>{
                this.lists=response.data.data;
                this.isReady=true;
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

