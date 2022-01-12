<template>
<div>
 <div v-if="isReady==true">
  <section class="top w-full bg-blue-600 overflow-hidden relative block h-1/2">
    <div class="top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0">
        <img class="top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0" :src="'/images/Properties/'+info.property.cover.photo_name" alt="Avatar" />

        <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white -mt-10">
          <img :src="'/images/Profile/'+info.property.land.landlord_pic" class="h-20 w-20 object-cover rounded-full">
          <h1 class="text-2xl font-semibold">{{info.property.address}}</h1>
            <router-link :to="{ name: 'profile_landlord'}" target="_blank" class="" >
                <h4 class="text-sm font-semibold hover:underline hover:text-blue-700">{{info.property.land.landlord_name}}</h4>
            </router-link>
        </div>
    </div>

  </section>

  <section class="relative py-16  bg-conic-to-t from-orange-900 via-amber-100 to-orange-900">
    <div class="container mx-auto px-4">
      <div class="w-full mb-5 bg-transparent shadow-xl rounded-lg -mt-36">
          <!-- max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-xl -->
        <div id="Board and bills" class="flex w-full">
            <div id="Board" class=" flex-1 w-2/3">
                <div class="bg-gradient-to-br from-cool-gray-100 to-cool-gray-300       mx-auto rounded-lg overflow-hidden rounded-tr-none rounded-br-none shadow-lg">
                    <div class="h-14 grid grid-cols-3 p-5" style="background-color: #2b2a33;">
                        <p class="text-lg font-semibold text-yellow-500 col-span-2 justify-self-end">House Bulletin Board</p>
                        <button @click="toggleModal = !toggleModal" class="px-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 justify-self-end">Create Post</button>
                    </div>
                    <div id="bulletin" class="overflow-y-auto  h-48 p-5 resize-y">
                        <!-- first post -->
                        <div v-for="item in posts" :key="item.id">
                            <div v-if="item.student!=null" class="bg-conic-to-l from-yellow-200 via-red-500 to-fuchsia-500 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div class="flex flex-row justify-center mr-2">
                                    <img alt="avatar" class="rounded-full w-5 h-5 shadow-lg mb-4" :src="'/images/Profile/'+item.student.pic">
                                    <p class="text-purple-800 font-semibold ml-2 text-sm text-center md:text-left "> <router-link :to="{ name: 'land_profile_view', params:{role: 1, id: item.student.id}}" target="_blank" class="text-purple-800 hover:underline hover:text-purple-900"> {{ item.student.name }} </router-link> (Tenant) <span class="text-xs ml-2 text-gray-700"> {{ moment(item.created_at ).format("DD-MM-YYYY, h:mm a") }} </span></p>
                                </div>
                                    <p style="width: 90%" class="text-gray-800 text-base text-center md:text-left ">{{ item.post }}   </p>
                            </div>
                            <div v-if="item.landlord!=null" class="bg-conic-to-r from-indigo-200 via-blue-gray-600 to-indigo-200 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div class="flex-row  mr-2  w-full flex justify-end">
                                    <button class="justify-self-end w-4 h-4" @click="deletePost(item.id);">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  class="text-gray-700 ">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                          <p class="justify-self-start text-blue-800 font-semibold ml-2 mr-5 text-sm text-center md:text-left "><span class="text-xs ml-2 text-gray-700"> {{ moment(item.created_at ).format("DD-MM-YYYY, h:mm a") }} </span> {{ item.landlord.name }} </p>
                                          <img alt="avatar" class="justify-self-start rounded-full w-5 h-5 shadow-lg mb-4" :src="'/images/Profile/'+item.landlord.pic">
                                </div>
                                    <p style="width: 90%" class="text-gray-800 text-base text-center md:text-left ">{{ item.post }}   </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Bills" class=" flex w-1/3">
                    <div class="mx-auto w-full rounded-lg rounded-tl-none rounded-bl-none overflow-hidden shadow-lg  bg-gradient-to-br from-emerald-500 to-lime-600">
                        <div class="h-14 flex justify-center items-center p-5 bg-gray-800" >

                            <p class="text-lg font-semibold  text-green-500 ">Property Rent</p>
                        </div>
                        <div id="bulletin" class="overflow-y-auto h-48 p-5">
                            <div class="grid grid-rows-2 text-center md:text-left">
                                <span class="text-white text-center text-2xl" >Total Rent Collected:</span>
                                <span class="text-white text-center text-2xl" >RM {{ (bills).toFixed(2)}}</span>
                                 <button @click="checkBill" class="p-2 w-1/2 mt-5 rounded-md bg-blue-500 text-white hover:bg-blue-600 justify-self-center">Check</button>
                            </div>


                        </div>
                    </div>
            </div>
        </div>

      </div>
    </div>

    <div class="flex mt-40 container mx-auto px-4">
      <div class="w-full mb-6 shadow-xl rounded-lg -mt-36">
        <div id="line" class="px-72 mt-10 flex items-center justify-between">
            <hr class="w-full" />
                <p  class="focus:outline-none text-2xl font-semibold flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500">My Tenants</p>
            <hr class="w-full" />
        </div>

        <div id="Housemates" class="p-5">
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
                            Check Bills / Kick
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
                                            <button @click="checkTenantBill(mate.student_id,mate);">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                        </div>
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
                             <tbody>
                            <tr v-if="item.tenants.length==0">
                            <td colspan="7">
                                <div class="bg-indigo-100 border-yellow-600 text-black-600  p-4" role="alert">
                                    <center><p class="font-bold text-base">
                                    No tenant occupy this room yet
                                    </p></center>
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






    <footer class="relative bg-transparent pt-8 pb-6 mt-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                    Home is where the heart is
                </div>
            </div>
            </div>
        </div>
    </footer>

  </section>
        <PostModal
            v-if="toggleModal"
            :prop_id="prop_id"
            @refreshData="getData"
            :user_id="user_id"
            :role="role"
            @closeModal="closeModal">
        </PostModal>

        <BillModal
            v-if="toggleRModal"
            :user_id="tenant_id"
            :role=1
            :tenant="tenant"
            @closeModal="closeRModal">
        </BillModal>



            <!-- loading -->
    </div>
    <div v-else>
     <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
    </div>
  <!-- loading -->
</div>

</template>
<script>

import PostModal from './Post_Modal.vue';
import BillModal from './Bill_Modal.vue';
import moment from "moment";
export default {
     components: {
        PostModal,
        BillModal,
    },
    props: {
        user_id: Number,
        role: Number,
    },
    data(){
        return{
            isReady: false,
            info: [],
            moment: moment,
            prop_id: this.$route.params.id,
            toggleModal: false,
            toggleRModal: false,
            data: [],
            posts: [],
            bills: [],
            bydate: '',
            tenant_bills: [],
            tenant_id: '',
            tenant: {},
            room_id: '',
            housemates: [],


            form: {
                property_id: '',
                room_id: '',
                tenancy_period: '',
                move_in_date: '',
                student_id: this.user_id,
            }



        }
    },
     methods:{
        getData(){
            axios.get('/api/get_HousePlatform/'+this.prop_id+'?land=1&imej=1').then((response)=>{
                this.info=response.data.data[0];
                this.housemates=response.data.data;

                this.getPost();

                console.warn(this.info.data);

            })

        },
        getPost(){
            axios.get('/api/get_post/'+this.user_id+'/'+this.prop_id+'?land=1&imej=1').then((response)=>{
                this.posts=response.data.data;
                this.isReady=true;
                console.warn(this.post.data);
            })

        },
       kickTenant(room_id,tenant_id ){
           this.room_id = room_id;
           this.tenant_id = tenant_id;
            axios.get('/api/get_tenant_payment_status/'+room_id+'/'+tenant_id).then((response)=>{
                this.tenant_bills=response.data;
                if(  this.tenant_bills.payment_status=="Unpaid"){
                     this.$toaster.error('This tenant have not yet pay bills');
                }else if(this.tenant_bills.payment_status == 'Paid' || this.tenant_bills==[] || this.tenant_bills=="Pending")
                {
                    Swal.fire({
                    title: 'Kick tenant from this room?!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, kick the tenant'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios.delete('/api/kick_tenant/'+tenant_id).then((response)=>{
                                this.getData();
                                setTimeout(() =>  this.$toaster.success('Tenant kicked'), 1000);
                            }).catch((errors)=> {
                                console.log(errors)
                            })

                        }
                })
                }
                console.warn(this.tenant_bills);
            })

       },
        deletePost(id){
               Swal.fire({
                    title: 'Delete this post?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios.delete('/api/delete_post/'+id).then((response)=>{
                                this.getData();
                                setTimeout(() =>  this.$toaster.success('Post deleted'), 1000);

                            }).catch((errors)=> {
                                console.log(errors)
                            })

                        }
                })

        },

        closeModal(){
            this.toggleModal =!  this.toggleModal ;
        },
        closeRModal(){
            this.toggleRModal =!  this.toggleRModal ;
        },
        getBills(){
            axios.get('/api/get_property_bills_total/'+this.user_id+'/'+this.prop_id).then((response)=>{
                    this.bills=response.data;
                    console.warn(this.bills);
                })
            },
        checkBill(){
            this.$router.push({ name: 'payment_land' })
        },
        checkTenantBill(student_id,mate){
            this.tenant_id=student_id;
            this.tenant=mate;
            this.toggleRModal = !this.toggleRModal;
        },

    },
    watch:{
        $route() {

        },
    },
       mounted: function(){
        this.getData();
        this.getBills();


    },



}
</script>

