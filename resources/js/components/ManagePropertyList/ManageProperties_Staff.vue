<template>

    <div class="flex justify-center item-center pl-8 pb-10">

        <!-- change background here top table -->
        <div class="mx-auto container bg-white-500 dark:bg-gray-800 dark:bg-gray-800 shadow rounded " >

            <div class="flex flex-col lg:flex-row p-2 lg:p-8 justify-between items-start lg:items-stretch w-full shadow-inner" style="background-image: url(/images/BlueCoral.jpg);">

                <div class=" grid-cols-3 gap-5 lg:w-1/5 w-full p-4 lg:p-8  flex flex-col lg:flex-row items-start lg:items-center">
                    <button @click="campus(0)" exact-active-class="exact-active" :class="[top_btn_style]" class="px-5" >
                        Gambang
                    </button>
                    <button  @click="campus(1)" exact-active-class="exact-active" class="px-5" :class="[top_btn_style]" >
                        Pekan
                    </button>
                </div>

                <div class="w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center">
                    <div class="flex items-center ">
                        <span class="text-xl font-black">MANAGE PROPERTIES</span>
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
                        <div class="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointe  shadow-lg hover:bg-pink-200">
                            <button  @click="previousPg(page)"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-4 h-4">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                             </button>
                        </div>

                        <div class="flex h-8  font-medium rounded-full bg-gray-200  shadow-lg ">
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-200 " @click="firstPg()">1</button>
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  disabled ">...</button>
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-700 bg-pink-600 text-white " @click="currentPg()">{{ page }}</button>
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full   disabled">...</button>
                            <button class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-200"  @click="lastPg()">{{ lastPage }}</button>
                            <button class="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-pink-600 text-white hover:bg-pink-200">{{ page }}</button>
                        </div>
                        <div class="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer  shadow-lg hover:bg-pink-200">
                              <button  @click="nextPg(page)"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

                <div class="w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center justify-center">
                        <div class="relative w-32 z-10">
                            <select  v-model="filterStatus" class="focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-pink-200 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded font-medium dark:text-gray-400 appearance-none bg-transparent">
                                <option value="">Status</option>
                                <option value="unverified">Unverified</option>
                                <option value="processing">Processing</option>
                                <option value="verified">Verified</option>
                            </select>
                        </div>
                    </div>
            </div>
                    <!-- <div class="flex justify-center item-center mb-10">
                        <input type="text" v-model="filterName"  placeholder="Search Property"  class="block w-5/12 py-2 px-2 text-lg rounded-lg">
                    </div> -->
            <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
                <!-- change body from  bg-dark-600 dark:bg-gray-800 -->

                <table class="min-w-full shadow-lg border-b-2 ">
                     <thead>
                            <tr class="border-b bg-pink-400 text-gray-900 uppercase text-base leading-normal"  style="background-image: url(/images/BlueCoral.jpg);">
                                <th class="py-3 px-3 text-left">No.</th>
                                <th class="py-3 px-6 text-left">Property ID</th>
                                <th class="py-3 px-6 text-left">Property</th>
                                <th class="py-3 px-6 text-left">Landlord Name</th>
                                <th class="py-3 px-6 text-left">Campus</th>
                                <th class="py-3 px-6 text-left">Registered At</th>
                                <th class="py-3 px-6 text-left">Status</th>
                                <th class="py-3 px-6 text-left">Verify By</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-dark-600 text-sm font-light">
                            <tr  v-for= "(prop, index) in Status" :key="prop.id"   class="border-b border-gray-200 hover:bg-pink-200" >
                                 <td class="py-3 px-3 text-left whitespace-nowrap">  {{ index + 1 }}</td >
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{ prop.id }}</span>
                                    </div>

                                </td>
                                <td class="py-3 px-6 text-left">

                                   <router-link :to="{ name: 'view_property', params:{property_id: prop.id}}" target="_blank" class="flex items-center">
                                          <!-- <div class="mr-2">
                                            <img :src="'/images/Profile/'+student.pic"  class="w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
                                        </div> -->
                                        <span>{{ prop.name }}</span>
                                   </router-link>
                                </td>
                                        <td class="py-3 px-6 text-left">
                                         <div class="flex items-center">
                                        <span>{{ prop.land.landlord_name }}</span>
                                    </div>
                                </td>

                                    <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ prop.campus }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                         <div class="flex items-center">
                                        <span>{{prop.created_at}}</span>
                                    </div>
                                </td>

                                     <td class="py-3 px-6 text-left">
                                         <div class="flex items-center">
                                        <span>{{ prop.status }}</span>
                                    </div>
                                </td>
                                     <td class="py-3 px-6 text-left">
                                         <div class="flex items-center">
                                        <span v-if="prop.verify_by == null">Not Assign Yet</span>
                                        <span v-else>{{ prop.verify_by }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <button @click="updateStatus(prop); toggleModal = !toggleModal;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            </button>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                             <button @click="deleteUser(prop.id, prop.name);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg> </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                             <tr v-if="filterStatus==null">
                                <td colspan="9">
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

        <StatusModal
            v-if="toggleModal"
            :form="property"
            :staff_id="user_id"
            :toggle="toggleModal"
            @refreshData="getPropertiesList"
            @closeModal="closeReadModal">

        </StatusModal>
    </div>

</template>

<script>
import StatusModal from './UpdateStatus_Modal.vue';


export default {

    components: {
       StatusModal,
    },
    props: {
        user_id: Number,
        role: Number
    },

    data() {
        return {
            properties:[],
            page: 1,
            lastPage: '',
            filterStatus: '',
            top_btn_style: 'p-3 rounded bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white :active:bg-pink-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl',
            getCampus: 'Gambang',
            toggleModal: false,

                property:{
                    id: '',
                    status: '',
                }
        };
    },

    computed:{
            Status: function(){
            return this.properties.filter((list)=>{
               //return user.gender.match(this.filterGender);
                if(this.filterStatus==""){
                     return list;
                }else if(list.status==this.filterStatus){
                    return list;
                }
            });
        },

    },

     mounted: function(){
            this.getPropertiesList();
            this.getMeta();
    },

    methods: {
            getPropertiesList(){
            axios.get('/api/get_properties_list/'+this.getCampus+'?land=1?page='+this.page).then((response)=>{
                this.properties=response.data.data;
                console.warn(this.properties.data);
                })
            },
            getMeta(){
            axios.get('/api/get_properties_list/'+this.getCampus).then((response)=>{
                this.lastPage=response.data.meta.last_page
                console.warn(response.data.meta.last_page);
                })

            },
            campus(cue){
                if(cue==0){
                    this.getCampus= 'Gambang'
                    this.getPropertiesList()
                }else{
                     this.getCampus= 'Pekan'
                    this.getPropertiesList()
                }
            },
        firstPg(){
                this.page=1;
                this.getPropertiesList();
            },
        currentPg(){
                this.page=this.page;
                this.getPropertiesList();
            },
        lastPg(){
                this.page=this.lastPage;
                this.getPropertiesList();
            },
        nextPg(pg){
               if(pg>=this.lastPage)
                    this.page=this.lastPage;
                else
                     this.page=this.page + 1;
                 this.getPropertiesList();
            },
        previousPg(pg){
                if(pg<=1){
                     this.page=1;
                }
                else
                    this.page=this.page -1;
                 this.getPropertiesList();
            },
        updateStatus(prop){
            this.property.id = prop.id;
            this.property.status = prop.status;

        },
        deleteUser(id, name){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Delete Student: "+name,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete this student!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios.delete('/api/delete_property/'+id).then((response)=>{
                                this.getPropertiesList();
                                console.log(response)
                                     Swal.fire(
                                    'Deleted!',
                                    'Property has been deleted.',
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
        },

    },





};
</script>
