<template>
    <div class="flex justify-center item-center pl-8 pb-10">
        <!-- change background here top table -->
        <div class="mx-auto container bg-white-500 dark:bg-gray-800 dark:bg-gray-800 shadow rounded " >
            <div v-if="isReady==true">
            <div class="flex flex-col lg:flex-row p-2 lg:p-8 justify-between items-start lg:items-stretch w-full shadow-inner" style="background-image: url(/images/BlueCoral.jpg);">
                <div class="w-full flex flex-col lg:flex-row items-start lg:items-center">
                    <div class="flex items-center ">
                        <span class="text-xl font-black">MANAGE STUDENTS</span>
                    </div>
                </div>
                  <div class="w-full flex flex-col lg:flex-row items-start lg:items-center ">
                    <div v-if="pageInfo" class="flex items-center">
                          <p v-if="page=='[object MouseEvent]'" class="font-medium text-dark-600 dark:text-gray-400" >  Showing Page 1 of {{ lastPage }}</p>
                          <p v-else class="font-medium text-dark-600 dark:text-gray-400" >  Showing Page {{ page }} of {{ lastPage }}</p>
                    </div>

                </div>



                <div class="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center">
                        <div class="relative w-32 z-10">
                            <select  v-model="filterGender" class="focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-pink-200 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded font-medium dark:text-gray-400 appearance-none bg-transparent">
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
            </div>
                    <div class="flex justify-center item-center mb-10">
                        <input type="text" name="name"  v-model="filterName"  placeholder="Search Name"  class="block w-5/12 py-2 px-2 text-lg rounded-lg">
                    </div>
            <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
                <!-- change body from  bg-dark-600 dark:bg-gray-800 -->

                <table class="min-w-full shadow-lg border-b-2 ">
                     <thead>
                            <tr class="border-b bg-pink-400 text-gray-900 uppercase text-base leading-normal"  style="background-image: url(/images/BlueCoral.jpg);">
                                <th class="py-3 px-3 text-left">No.</th>
                                <button  @click="sorting(1); " ><th class="py-3 px-6 text-left">User ID</th></button>
                                <th class="py-3 px-6 text-left">Name</th>
                                <th class="py-3 px-6 text-left">Email</th>
                                <th class="py-3 px-6 text-left">Phone No.</th>
                                <button @click="sorting(2)"> <th class="py-3 px-6 text-left">Gender</th></button>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-dark-600 text-sm font-light">
                            <tr  v-for= "(student, index) in filterUser" :key="student.id"   class="border-b border-gray-200 hover:bg-pink-200" >
                                 <td class="py-3 px-3 text-left whitespace-nowrap">  {{ index + 1 }}</td >
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{ student.id }}</span>
                                    </div>

                                </td>
                                <td class="py-3 px-6 text-left">

                                   <router-link :to="{ name: 'profile_view', params:{role: 1, id: student.id}}" target="_blank" class="flex items-center">
                                          <div class="mr-2">
                                            <img :src="'/images/Profile/'+student.pic"  class="w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
                                        </div>
                                        <span>{{ student.name }}</span>
                                   </router-link>
                                </td>

                                   <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ student.email }}</span>
                                    </div>
                                </td>
                                    <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ student.phone_no }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                      <span v-if="student.gender==='male'">🧑 {{ student.gender }}</span>
                                      <span v-if="student.gender==='female'">👩‍🦰  {{ student.gender }}</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <button @click="readUser(student); toggleModal = !toggleModal;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            </button>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                             <button @click="deleteUser(student.id, student.name);"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <center>
                    <div v-if="pageInfo" class="center mt-5 mb-5 w-1/2 flex flex-col lg:flex-row items-start lg:items-center justify-center">
                    <div class="w-1/2 flex flex-col lg:flex-row items-start lg:items-center justify-center">
                            <select  v-model="showSize" class="focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-pink-200 focus:shadow-outline-gray text-base py-2 px-8 w-1/2 xl:px-3 rounded font-medium  appearance-none bg-transparent">
                                <option @click="getStudent" value="10">Show Entries</option>
                                <option @click="getStudent" value="10">10</option>
                                <option @click="getStudent" value="20">20</option>
                                <option @click="getStudent" value="50">50</option>
                                <option @click="getStudent" value="100000">All</option>
                            </select>
                    </div>
                    <Page :current="pageInfo.current_page" :total="pageInfo.total" :page-size="parseInt(pageInfo.per_page)" @on-change="getStudent"></Page>
                    </div>
                </center>

            </div>

             <!-- loading -->
            </div>
            <div v-else>
                <loader object="#dc4ae8" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
            </div>
        <!-- loading -->

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
            students:[],
            page: 1,
            lastPage: '',
            filterGender: '',
            filterName: '',
            pageInfo: '',

            toggle: false,
            byID: '',
            byGender: '',
            showSize: 10,

            toggleModal: false,
            isReady: false,
                profile:{
                    id: '',
                    name: '',
                    email: '',
                    phone: '',
                    gender: '',
                    pic: '',
                    role: '1'
                }
        };
    },

    computed:{
            filterUser: function(){
            return this.students.filter((user)=>{
               //return user.gender.match(this.filterGender);
                if(this.filterGender=="" && this.filterName==""){
                     return user;
                }else if(user.gender==this.filterGender && user.name.match(this.filterName)){
                    return user;
                }else if(user.gender==this.filterGender && this.filterName==""){
                    return user;
                }else if (this.filterGender=="" && user.name.toLowerCase().match(this.filterName.toLowerCase()))
                     return user.name.toLowerCase().match(this.filterName.toLowerCase());
            });
        },

    },

     mounted: function(){
            this.getStudent();
            this.getMeta();
    },

    methods: {
          getStudent(page=1){
                this.page=page;
                axios.get('/api/get_std?page='+page,{
                params: {
                    byID: this.byID,
                    byGender: this.byGender,
                    showSize: this.showSize
                }}).then((response)=>{
                this.students=response.data.data;
                this.isReady=true;
                console.warn(this.students.data);
                })
            },
            getMeta(){
            axios.get('/api/get_std').then((response)=>{
                this.pageInfo = response.data.meta
                this.lastPage=response.data.meta.last_page
                console.warn(response.data.meta.last_page);
                })

            },
        sorting(q){
            if(q==1){
                this.toggle=!this.toggle;
                if(this.toggle==true){
                    this.byID='desc';
                     this.getStudent();
                }else if(this.toggle==false){
                    this.byID='asc';
                    this.getStudent();
                }
                this.byID = '';
            }else if(q==2){
                 this.toggle=!this.toggle;
                if(this.toggle==true){
                    this.byGender='desc';
                     this.getStudent();
                }else if(this.toggle==false){
                    this.byGender='asc';
                    this.getStudent();
                }
                this.byGender = '';

            }

        },

        readUser(user){
            this.profile.id = user.id;
            this.profile.name = user.name;
            this.profile.email = user.email;
            this.profile.phone = user.phone_no;
            this.profile.gender = user.gender;
            this.profile.pic = user.pic;
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
                            axios.delete('/api/delete_std/'+id).then((response)=>{
                                this.getStudent();
                                console.log(response)
                                     Swal.fire(
                                    'Deleted!',
                                    'Student has been deleted.',
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
