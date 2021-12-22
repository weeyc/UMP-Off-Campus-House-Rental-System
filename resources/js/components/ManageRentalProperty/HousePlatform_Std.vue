<template>
<div class="profile-page">

  <section class="top w-full bg-blue-600 overflow-hidden relative block h-1/2">
    <div class="top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0">
        <img class="top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0" :src="'/images/Properties/'+info.property.cover.photo_name" alt="Avatar" />

        <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-20 text-white -mt-10">
          <img :src="'/images/Profile/'+info.property.land.landlord_pic" class="h-20 w-20 object-cover rounded-full">
          <h1 class="text-2xl font-semibold">{{info.property.address}}</h1>
            <router-link :to="{ name: 'std_profile_view', params:{role: 2, id: info.landlord_id}}" target="_blank" class="" >
                <h4 class="text-sm font-semibold hover:underline hover:text-yellow-500">{{info.property.land.landlord_name}}</h4>
            </router-link>
        </div>
    </div>

  </section>

  <section class="relative py-16  bg-conic-to-t from-gray-900 via-gray-100 to-gray-900">
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
                    <div id="bulletin" class="overflow-y-auto h-48 p-5 resize-y">
                        <!-- first post -->
                        <div v-for="item in posts" :key="item.id">
                            <div v-if="item.student.id!=user_id" class="bg-conic-to-l from-yellow-200 via-red-500 to-fuchsia-500 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div class="flex flex-row justify-center mr-2">
                                    <img alt="avatar" class="rounded-full w-5 h-5 shadow-lg mb-4" :src="'/images/Profile/'+item.student.pic">
                                    <p class="text-purple-600 font-semibold ml-2 text-sm text-center md:text-left ">{{ item.student.name }} <span class="text-xs ml-5 text-black"> {{ moment(item.created_at ).format("DD-MM-YYYY, h:mm a") }} </span></p>
                                </div>
                                    <p style="width: 90%" class="text-gray-600 text-base text-center md:text-left ">{{ item.post }}   </p>
                            </div>
                            <div v-else class="bg-conic-to-r from-indigo-200 via-blue-gray-600 to-indigo-200 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div class="flex flex-row  mr-2 w-full">
                                    <img alt="avatar" class="justify-self-start rounded-full w-5 h-5 shadow-lg mb-4" :src="'/images/Profile/'+item.student.pic">
                                    <p class="justify-self-start text-white font-semibold ml-2 mr-5 text-sm text-center md:text-left ">{{ item.student.name }} <span class="text-xs ml-5 text-black"> {{ moment(item.created_at ).format("DD-MM-YYYY, h:mm a") }} </span></p>
                                    <button class="justify-self-end w-5 h-5" @click="deletePost(item.id);">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                </div>
                                    <p style="width: 90%" class="text-gray-600 text-base text-center md:text-left ">{{ item.post }}   </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Bills" class=" flex w-1/3">
                    <div class="mx-auto w-full rounded-lg rounded-tl-none rounded-bl-none overflow-hidden shadow-lg  bg-gradient-to-br from-emerald-500 to-lime-600">
                        <div class="h-14 flex justify-center items-center p-5 bg-gray-800" >

                            <p class="text-lg font-semibold  text-green-500 ">My Bills</p>
                        </div>
                        <div id="bulletin" class="overflow-y-auto h-48 p-5">
                            <div class="grid grid-rows-2 text-center md:text-left">
                                <span class="text-white text-center text-2xl" >Rent This Month:</span>
                                <span class="text-white text-center text-2xl" > RM300</span>

                                 <button class="p-2 mt-5 w-1/2 rounded-md bg-blue-500 text-white hover:bg-blue-600 justify-self-center">Check</button>
                            </div>


                        </div>
                    </div>
            </div>
        </div>

      </div>
    </div>

    <div class="flex mt-48 container mx-auto px-4">
      <div class="w-full mb-6 shadow-xl rounded-lg -mt-36">
            <div id="line" class="px-72 mt-10 flex items-center justify-between">
                <hr class="w-full" />
                    <p  class="focus:outline-none text-2xl font-semibold flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500">My Rooms</p>
                <hr class="w-full" />
            </div>

            <div id="My Rooms" class="p-5">
                <div class="bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg">

                    <div class="h-14 flex justify-center items-center p-5" style="background-color: #2b2a33;">
                        <router-link :to="{ name: 'view_room_list', params:{id: info.id}}"  target="_blank"  class="flex justify-center items-center">
                            <img :src="'/images/Properties/'+info.photo_room[0].photo_name" class="h-7 w-7 mr-3 object-cover rounded-full">
                            <p class="text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text hover:underline ">{{ info.room_name}} | ID: {{info.id }}</p>
                        </router-link>

                            <button v-if="info.tenants.length < info.number_of_tenant" @click="toggleRModal = !toggleRModal" class="ml-48 px-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 grow-0 justify-self-end">Add Roommate</button>

                    </div>
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Student ID
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
                            Action
                            </th>
                        </tr>
                        </thead>
                        <tbody v-for="(item,index) in info.tenants" :key="index" class="bg-white divide-y divide-gray-200">
                        <tr >
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">{{ item.student_id }}</div>
                            </td>
                            <router-link :to="{ name: 'std_profile_view', params:{role: 1, id: item.student_id}}" target="_blank" class="flex items-center">
                            <td class="flex px-6 py-4">
                                <img :src="'/images/Profile/'+item.student.pic"  class="mr-2 w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
                                <span>{{item.student.name }}</span>
                            </td>
                            </router-link>


                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ item.student.phone_no }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900"> {{ item.move_in_date }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{  item.tenancy_period }} Months</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{  item.tenant_status }}</div>
                            </td>
                                <td class="py-3 px-2 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <button @click="read(); toggleModal = !toggleModal;">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <button @click="leave();">
                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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


        <div id="line" class="px-72 mt-10 flex items-center justify-between">
            <hr class="w-full" />
                <p  class="focus:outline-none text-2xl font-semibold flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500">My Housemates</p>
            <hr class="w-full" />
        </div>

        <div id="Housemates" class="p-5">
            <div v-for="item in housemates" :key="item.id" class="bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg mb-10">
                <div class="h-14 flex justify-center items-center p-5" style="background-color: #2b2a33;">
                         <router-link :to="{ name: 'view_room_list', params:{id: item.id}}"  target="_blank"  class="flex justify-center items-center">
                            <img :src="'/images/Properties/'+item.photo_room[0].photo_name" class="h-7 w-7 mr-3 object-cover rounded-full">
                            <p class="text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text hover:underline ">{{ item.room_name}} | ID: {{item.id }}</p>
                        </router-link>
                </div>
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Student ID
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
                            Action
                            </th>
                        </tr>
                        </thead>
                        <tbody v-for="mate in item.tenants" :key="mate.index " class="bg-white divide-y divide-gray-200">
                          <tr >
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">{{ mate.student_id }}</div>
                            </td>
                            <router-link :to="{ name: 'std_profile_view', params:{role: 1, id: mate.student_id}}" target="_blank" class="flex items-center">
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
                                            <button @click="read(); toggleModal = !toggleModal;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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

        <RMModal
            v-if="toggleRModal"
            :prop_id="prop_id"
            :former="form"
            @refreshData="getData"
            :user_id="user_id"
            :role="role"
            @closeModal="closeRModal">
        </RMModal>


</div>
</template>
<script>

import PostModal from './Post_Modal.vue';
import RMModal from './AddRoommate_Modal.vue';
import moment from "moment";
export default {
     components: {
        PostModal,
        RMModal,
    },
    props: {
        user_id: Number,
        role: Number,
    },
    data(){
        return{
            info: [],
            moment: moment,
            room_id: this.$route.params.id,
            toggleModal: false,
            toggleRModal: false,
            prop_id: '',
            posts: [],
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
            axios.get('/api/get_roomPlatform/'+this.user_id+'/'+this.room_id+'?land=1&imej=1', {
                params: {
                    location: this.location,
                }
                }).then((response)=>{
                this.info=response.data.data[0];
                this.prop_id=this.info.property_id;
                this.form.property_id=this.info.property_id;
                this.form.room_id=this.info.id;
                this.form.tenancy_period=this.info.tenants[0].tenancy_period;
                this.form.move_in_date=this.info.tenants[0].move_in_date;
                this.getPost();
                this.getHouseMate();
                console.warn(this.info.data);

            })

        },
        getPost(){
            axios.get('/api/get_post/'+this.user_id+'/'+this.prop_id+'?land=1&imej=1').then((response)=>{
                this.posts=response.data.data;
                console.warn(this.post.data);
            })

        },
        getHouseMate(){
            axios.get('/api/get_housemate/'+this.room_id+'/'+this.prop_id).then((response)=>{
                this.housemates=response.data.data;
                console.warn(this.housemates.data);
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

    },
    watch:{
        $route() {

        },
    },
       mounted: function(){
        this.getData();


    },



}
</script>

