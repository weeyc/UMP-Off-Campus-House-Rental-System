<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="p-6 ml-5">

         <div class="max-w-6xl p-6 mx-auto mt-3  bg-gray-100 rounded-md shadow-xl mb-5" >
              <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Property Bills</h2>
        <div v-if="info.length==0"> You don't have any verified property yet.</div>
        <div else>
            <section class="mt-5 rounded-lg top w-full bg-blue-600 overflow-hidden relative block h-1/3">
                    <div class="top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0">
                        <img class="top-0 bg-center bg-cover bg w-full h-full object-cover object-center rounded-lg absolute z-0" :src="'/images/Properties/'+info.property.cover.photo_name" alt="Avatar" />

                        <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-20 text-white mt-2">
                        <img :src="'/images/Profile/'+info.property.land.landlord_pic" class="h-20 w-20 object-cover rounded-full">
                        <h1 class="text-2xl font-semibold">(ID: {{info.property.id}}) {{info.property.address}}</h1>
                            <router-link :to="{ name: 'land_profile_view', params:{role: 2, id: info.landlord_id}}" target="_blank" class="" >
                                <h4 class="text-sm font-semibold hover:underline hover:text-yellow-500"> {{info.property.land.landlord_name}}</h4>
                            </router-link>
                        </div>
                    </div>
            </section>

             <div class="flex mt-32 container w-full px-4 ">
      <div class="w-full mb-6 shadow-xl rounded-lg -mt-36">
        <div id="line" class="px-72 mt-10 flex items-center justify-between">
            <hr class="w-full" />
                <p  class="focus:outline-none text-2xl font-semibold flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500">My Tenants</p>
            <hr class="w-full" />
        </div>

        <div id="Tenants" class="p-5">
            <div v-for="item in housemates" :key="item.id" class="bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg mb-10">
                <div class="h-14 flex justify-center items-center p-5" style="background-color: #2b2a33;">
                         <router-link :to="{ name: 'view_room_list_land', params:{id: item.id}}"  target="_blank"  class="flex justify-center items-center">
                            <img :src="'/images/Properties/'+item.photo_room[0].photo_name" class="h-7 w-7 mr-3 object-cover rounded-full">
                            <p class="text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text hover:underline ">{{ item.room_name}} | ID: {{item.id }}</p>
                        </router-link>
                </div>
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tenant ID
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone No.
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Move Date
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tenancy Period
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tenancy Status
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Kick Tenant
                            </th>
                        </tr>
                        </thead>
                        <tbody v-for="mate in item.tenants" :key="mate.index " class="bg-white divide-y divide-gray-200">
                          <tr >
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">{{ mate.tenant_id }}</div>
                            </td>
                            <router-link :to="{ name: 'land_profile_view', params:{role: 1, id: mate.student_id}}" target="_blank" class="flex items-center">
                            <td class="flex px-6 py-4">
                                <img :src="'/images/Profile/'+mate.student.pic"  class="mr-2 w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
                                <span>{{mate.student.name }}</span>
                            </td>
                            </router-link>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ mate.student.phone_no }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900"> {{ mate.move_in_date }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{  mate.tenancy_period }} Months</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{  mate.tenant_status }}</div>
                            </td>
                                <td class="py-3 px-2 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <button @click="kickTenant(mate.room_id, mate.tenant_id);">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M7 12H21M21 12L18 9M21 12L18 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        </div>




        </div>
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
            info: [],
            housemates: [],
            moment: moment,
            prop_id: this.$route.params.id,
            top_btn_style: 'p-3 rounded bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white :active:bg-yellow-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl',
        }
    },
     methods:{
            getData(){
            axios.get('/api/get_HousePlatform/'+this.prop_id+'?land=1&imej=1').then((response)=>{
                this.info=response.data.data[0];
                console.warn(this.info.data);

            })

        },
            getTenantBills(){
            axios.get('/api/get_Property_Tenants_Bills/'+this.prop_id+'?land=1&imej=1').then((response)=>{
                this.housemates=response.data.data;
                console.warn(this.info.data);

            })

        },
    },

    watch:{
        $route() {

        },
    },
       mounted: function(){
        this.getData();
        this.getTenantBills();

    },



}
</script>
