<template>
    <div class="flex justify-center item-center pl-8 pb-10">
        <!-- change background here top table -->
        <div class="mx-auto container bg-white-500 dark:bg-gray-800 dark:bg-gray-800 shadow rounded " >
            <div class="flex flex-col lg:flex-row p-2 lg:p-8 justify-between items-start lg:items-stretch w-full shadow-inner" style="background-image: url(/images/BlueCoral.jpg);">
                <div class="w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center">
                    <div class="flex items-center ">
                        <span class="text-xl font-black">MANAGE LANDLORD</span>
                    </div>
                </div>
                  <div class="w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center ">
                    <div class="flex items-center">
                          <p class="font-medium text-dark-600 dark:text-gray-400" >  Showing Page {{ page }} of {{ lastPage }}</p>
                    </div>

                </div>
                <div class="w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center justify-end">

                <div class="flex flex-col items-center my-12">
                    <div class="flex text-gray-700">
                        <div class="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointe  shadow-lg hover:bg-blue-200">
                            <button  @click="previousPg(page)"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-4 h-4">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                             </button>
                        </div>

                        <div class="flex h-8  font-medium rounded-full bg-gray-200  shadow-lg ">
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-blue-200 " @click="firstPg()">1</button>
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  disabled ">...</button>
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-blue-700 bg-blue-600 text-white " @click="currentPg()">{{ page }}</button>
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full   disabled">...</button>
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-blue-200"  @click="lastPg()">{{ lastPage }}</button>
                            <button class="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-blue-600 text-white hover:bg-green-200">{{ page }}</button>
                        </div>
                        <div class="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer  shadow-lg hover:bg-blue-200">
                              <button  @click="nextPg(page)"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


                <div class="w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center justify-center ">

                        <div class="relative w-32 z-10">

                            <select  v-model="filterGender" class="focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-blue-200 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded font-medium dark:text-gray-400 appearance-none bg-transparent">
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>

                            </select>


                        </div>
                    </div>

                    <div class="w-full lg:w-1/5 flex flex-col lg:flex-row  items-start lg:items-stretch lg:mt-12">
                        <button @click="toggleModalCreate = !toggleModalCreate" class="bg-gray-200   hover:bg-blue-200 rounded
                        text-indigo-700 px-5 h-8 shadow-lg ">Create User</button>
                    </div>

            </div>
                    <div class="flex justify-center item-center mb-10">
                        <input type="text" name="name"  v-model="filterName"  placeholder="Search Name"  class="block w-5/12 py-2 px-2 text-lg rounded-lg">
                    </div>
            <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
                <!-- change body from  bg-dark-600 dark:bg-gray-800 -->

                <table class="min-w-full shadow-lg border-b-2 " style="background-image: url(/images/BlueCoral.jpg);">
                     <thead>
                            <tr class="border-b bg-blue-400 text-gray-900 uppercase text-base leading-normal"  style="background-image: url(/images/BlueCoral.jpg);">
                                <th class="py-3 px-3 text-left">No.</th>
                                <th class="py-3 px-6 text-left">User ID</th>
                                <th class="py-3 px-6 text-left">Name</th>
                                <th class="py-3 px-6 text-left">Email</th>
                                <th class="py-3 px-6 text-left">Phone No.</th>
                                <th class="py-3 px-6 text-left">Gender</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-dark-600 text-sm font-light">
                            <tr  v-for= "(landlord, index) in filterUser" :key="landlord.landlord_id"   class="border-b border-gray-200 hover:bg-green-200" >
                                 <td class="py-3 px-3 text-left whitespace-nowrap">  {{ index + 1 }}</td >
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{ landlord.landlord_id }}</span>
                                    </div>

                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                          <div class="mr-2">
                                            <img :src="'/images/Profile/'+landlord.landlord_pic"  class="w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
                                        </div>
                                        <span>{{ landlord.landlord_name }}</span>
                                    </div>
                                </td>

                                   <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ landlord.landlord_email }}</span>
                                    </div>
                                </td>
                                    <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ landlord.landlord_phone_no }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                      <span v-if="landlord.landlord_gender==='male'">🧑 {{ landlord.landlord_gender }}</span>
                                      <span v-if="landlord.landlord_gender==='female'">👩‍🦰  {{ landlord.landlord_gender }}</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <button @click="readUser(landlord); toggleModal = !toggleModal;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            </button>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                             <button @click="deleteUser(landlord.landlord_id, landlord.landlord_name);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg> </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                             <tr v-if="filterUser.length==0">
                                <td colspan="7">
                                    <div class="bg-indigo-100 border-yellow-600 text-black-600  p-4" role="alert">
                                        <center><p class="font-bold text-xl">
                                            No data found!
                                        </p></center>
                                    </div>

                                </td>
                            </tr>
                        </tbody>

                </table>


            </div>





        </div>

        <ReadModal
            v-if="toggleModal"
            :form="profile"
            :toggle="toggleModal"
            @closeModal="closeReadModal">
        </ReadModal>


    </div>



</template>

<script>
import ReadModal from './Modal_Student.vue';


export default {

    components: {
        ReadModal,

    },

    data() {
        return {
            landlords:[],
            page: 1,
            lastPage: '',
            filterGender: '',
            filterName: '',


            toggleModal: false,
            toggleModalCreate: false,
            toggleModalEdit: false,

                profile:{
                    id: '',
                    name: '',
                    email: '',
                    phone: '',
                    gender: '',
                    pic: '',
                }
        };
    },

    computed:{
            filterUser: function(){
            return this.landlords.filter((user)=>{
               //return user.gender.match(this.filterGender);
                if(this.filterGender=="" && this.filterName==""){
                     return user;
                }else if(user.landlord_gender==this.filterGender && user.landlord_name.match(this.filterName)){
                    return user;
                }else if(user.landlord_gender==this.filterGender && this.filterName==""){
                    return user;
                }else if (this.filterGender=="" && user.landlord_name.toLowerCase().match(this.filterName.toLowerCase()))
                     return user.landlord_name.toLowerCase().match(this.filterName.toLowerCase());
            });
        },

    },

     mounted: function(){
            this.getLandlord();
            this.getMeta();
    },

    methods: {
          getLandlord(){
            axios.get('/api/get_landlord?page='+this.page).then((response)=>{
                this.landlords=response.data.data;
                console.warn(this.landlords.data);
                })
            },
            getMeta(){
            axios.get('/api/get_landlord').then((response)=>{

                this.lastPage=response.data.meta.last_page
                console.warn(response.data.meta.last_page);
                })

            },
        firstPg(){
                this.page=1;
                this.getLandlord();
            },
        currentPg(){
                this.page=this.page;
                this.getLandlord();
            },
        lastPg(){
                this.page=this.lastPage;
                this.getLandlord();
            },
        nextPg(pg){
               if(pg>=this.lastPage)
                    this.page=this.lastPage;
                else
                     this.page=this.page + 1;
                 this.getLandlord();
            },
        previousPg(pg){
                if(pg<=1){
                     this.page=1;
                }
                else
                    this.page=this.page -1;
                 this.getLandlord();
            },
        readUser(user){
            this.profile.id = user.landlord_id;
            this.profile.name = user.landlord_name;
            this.profile.email = user.landlord_email;
            this.profile.phone = user.landlord_phone_no;
            this.profile.gender = user.landlord_gender;
            this.profile.pic = user.landlord_pic;

        },
         deleteUser(id, name){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Delete Landlord: "+name,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete this landlord!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios.delete('/api/delete_landlord/'+id).then((response)=>{
                                this.getLandlord();
                                console.log(response)
                                     Swal.fire(
                                    'Deleted!',
                                    'Landlord has been deleted.',
                                    'success'
                                    )
                            }).catch((errors)=> {
                                console.log(errors)
                            })

                        }
                })

        },

           closeReadModal(){
            this.toggleModal =!  this.toggleModal ;
        }

    },





};
</script>
