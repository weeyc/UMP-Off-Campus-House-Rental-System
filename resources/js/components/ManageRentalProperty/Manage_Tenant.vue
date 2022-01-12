<template>
    <div class="flex justify-center item-center pl-8 pb-10">
        <!-- change background here top table -->
        <div class="mx-auto container bg-white-500 dark:bg-gray-800 dark:bg-gray-800 shadow rounded " >
             <div v-if="isReady==true">
            <div class="flex flex-col lg:flex-row p-2 lg:p-8 justify-between items-start lg:items-stretch w-full shadow-inner" style="background-image: url(/images/BlueCoral.jpg);">
                <div class=" grid-cols-3 gap-5 lg:w-1/5 w-full p-4 lg:p-8  flex flex-col lg:flex-row items-start lg:items-center">
                    <button @click="campus(0)" exact-active-class="exact-active" :class="[top_btn_style]" class="px-5" >
                        Gambang
                    </button>
                    <button  @click="campus(1)" exact-active-class="exact-active" class="px-5" :class="[top_btn_style]" >
                        Pekan
                    </button>
                </div>
                <div class="w-full flex flex-col lg:flex-row items-start lg:items-center">
                    <div class="flex items-center ">
                        <span class="text-xl font-black">MANAGE TENANTS</span>
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
                                <th class="py-3 px-6 text-left">Student ID</th>
                                <th class="py-3 px-6 text-left">Student Name</th>
                                <th class="py-3 px-6 text-left">Campus</th>
                                <th class="py-3 px-6 text-left">Property ID</th>
                                <th class="py-3 px-6 text-left">Property Name</th>
                                <th class="py-3 px-6 text-left">Room ID</th>
                                <th class="py-3 px-6 text-left">Landlord </th>
                                <th class="py-3 px-6 text-left">Gender</th>
                            </tr>
                        </thead>
                        <tbody class="text-dark-600 text-sm font-light">
                            <tr  v-for= "(student, index) in filterUser" :key="student.id"   class="border-b border-gray-200 hover:bg-pink-200" >
                                 <td class="py-3 px-3 text-left whitespace-nowrap">  {{ index + 1 }}</td >
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{ student.student_id }}</span>
                                    </div>

                                </td>
                                <td class="py-3 px-6 text-left">

                                   <router-link :to="{ name: 'profile_view', params:{role: 1, id: student.student_id}}" target="_blank" class="flex items-center">
                                          <div class="mr-2">
                                            <img :src="'/images/Profile/'+student.student.pic"  class="w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
                                        </div>
                                        <span>{{ student.student.name }}</span>
                                   </router-link>
                                </td>

                                   <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ student.prop.campus }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ student.prop.id }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ student.prop.name }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ student.room_id }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ student.prop.landlord_id }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                      <span v-if="student.student.gender==='male'">🧑 {{ student.student.gender }}</span>
                                      <span v-if="student.student.gender==='female'">👩‍🦰  {{ student.student.gender }}</span>
                                </td>

                            </tr>
                             <tr v-if="filterUser.length==0">
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


    </div>

</template>

<script>

export default {

    components: {

    },

    data() {
        return {
            students:[],
            page: 1,
            lastPage: '',
            filterGender: '',
            filterName: '',
            pageInfo: '',
            isReady: false,

            toggle: false,
            byID: '',
            byGender: '',
            showSize: 10,
            top_btn_style: 'p-3 rounded bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white :active:bg-pink-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl',
            getCampus: 'Gambang',



        };
    },

    computed:{
            filterUser: function(){
            return this.students.filter((user)=>{
               //return user.gender.match(this.filterGender);
                if(this.filterGender=="" && this.filterName==""){
                     return user;
                }else if(user.student.gender==this.filterGender && user.student.name.match(this.filterName)){
                    return user;
                }else if(user.student.gender==this.filterGender && this.filterName==""){
                    return user;
                }else if (this.filterGender=="" && user.student.name.toLowerCase().match(this.filterName.toLowerCase()))
                     return user.student.name.toLowerCase().match(this.filterName.toLowerCase());
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
                axios.get('/api/get_tenants/'+this.getCampus+'/?page='+page,{
                params: {
                    showSize: this.showSize
                }}).then((response)=>{
                this.students=response.data.data;
                this.isReady=true;
                console.warn(this.students.data);
                })
            },
            getMeta(){
            axios.get('/api/get_tenants/'+this.getCampus).then((response)=>{
                this.pageInfo = response.data.meta
                this.lastPage=response.data.meta.last_page
                console.warn(response.data.meta.last_page);
                })

            },
                campus(cue){
                if(cue==0){
                    this.getCampus= 'Gambang'
                    this.getStudent();
                    this.getMeta();

                }else{
                     this.getCampus= 'Pekan'
                    this.getStudent()
                    this.getMeta()
                }
            },


    },





};
</script>
