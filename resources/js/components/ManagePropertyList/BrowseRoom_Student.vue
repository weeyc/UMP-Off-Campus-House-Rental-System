<template>
<div ref="section">
    <div v-if="isReady==true">
    <div class="max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-xl" >
        <!-- Top Campuses -->
        <span v-if="campus=='Gambang'" class="text-xl font-black">Selected Campus: <span class="text-yellow-500">{{campus}}</span></span>
        <span v-else class="text-xl font-black">Selected Campus: <span class="text-ump-green">{{campus}}</span></span>
        <div class="flex items-center justify-center h-40 w-full overflow-hidden bg-gradient-to-b from-green-200 to-green-500">
            <section class="flex items-stretch h-40 w-full text-white ">
                <div class="relative items-center w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex" style="background-image: url(/images/UMP/Gambang.jpg);">
                    <div class="w-full justify-center flex">
                        <button @click="change_campus(0);" :class="[top2_btn_style]"  class=" px-5 border-b-4 hover:border-b-2 hover:border-t-2 border-yellow-600 hover:border-yellow-800 rounded" >
                            Gambang
                        </button>
                    </div>

                </div>
                <div class="relative items-center w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex" style="background-image: url(/images/UMP/cancelori.jpg);">
                        <div class="w-full justify-center flex">
                        <button @click="change_campus(1);"  :class="[top2_btn_style]" class="px-10 border-b-4 hover:border-b-2 hover:border-t-2 border-yellow-600 hover:border-yellow-800 rounded" >
                            Pekan
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- filter bar -->

    <div class="max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-xl" >
        <div class="flex justify-start">
            <div class="flex justify-center bg-white rounded-xl border-2 overflow-hidden">
                <input type="search" placeholder="Search Area / Property Name"  v-model="location" class="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2 px-3">
                <button @click="getFilter">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto m-2" style="color: gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

            </div>
               <div id="gender" class="hidden xl:flex items-center ">
                <div class="ml-6 relative">
                            <div class="flex items-center relative" @click="dropdownHandlerGenderPreference($event)"  >
                                <ul class="w-52 p-2 border-r bg-gray-800 absolute rounded right-0 top-0 shadow mt-16 hidden overflow-hidden z-10 ">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal py-2">
                                        <label class="flex radio p-2 cursor-pointer">
                                            <input class="my-auto transform scale-125" type="radio" name="gender" v-model="gender" value="Male"/>
                                            <div class="title px-2">Male</div>
                                        </label>
                                    </li>

                                <hr class="border-yellow-300  ">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <label class="flex radio p-2 cursor-pointer">
                                                <input class="my-auto transform scale-125" type="radio" name="gender"  v-model="gender" value="Female"/>
                                                <div class="title px-2">Female</div>
                                        </label>
                                    </li>
                                    <hr class="border-yellow-300">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                                          <label class="flex justify-center cursor-pointer">
                                            <div @click="clearFilter('gender')" class="px-5 rounded-full text-yellow-500 mt-3 ">&cross; Clear</div>
                                            <button :class="[top_btn_style]" @click="getFilter" class="px-5 rounded-full ">Apply</button>
                                       </label>

                                    </li>
                                </ul>
                                <div class="flex justify-center text-gray-100">
                                    <button :class="[top_btn_style]" class="px-5 rounded-full">Gender</button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                </div>
            </div>
            <div id="room" class="hidden xl:flex items-center ">
                <div class="ml-6 relative">
                            <div class="flex items-center relative" @click="dropdownHandlerRoomType($event)"  >
                                <ul class="w-52 p-2 border-r bg-gray-800 absolute rounded right-0 top-0 shadow mt-16 hidden overflow-hidden z-10 ">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal py-2">
                                        <label class="flex radio p-2 cursor-pointer">
                                            <input class="my-auto transform scale-125" type="radio" name="room_type"  v-model="room" value="Single"/>
                                            <div class="title px-2">Single</div>
                                        </label>
                                    </li>

                                <hr class="border-yellow-300  ">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <label class="flex radio p-2 cursor-pointer">
                                                <input class="my-auto transform scale-125" type="radio" name="room_type"  v-model="room" value="Shared"/>
                                                <div class="title px-2">Shared</div>
                                        </label>
                                    </li>
                                    <hr class="border-yellow-300">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                                          <label class="flex justify-center cursor-pointer">
                                            <div @click="clearFilter('room')" class="px-5 rounded-full text-yellow-500 mt-3 ">&cross; Clear</div>
                                            <button :class="[top_btn_style]" @click="getFilter" class="px-5 rounded-full ">Apply</button>
                                       </label>

                                    </li>
                                </ul>



                                <div class="flex justify-center text-gray-100">
                                    <button :class="[top_btn_style]" class="px-5 rounded-full">Room Type</button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                </div>
            </div>
            <div id="price" class="hidden xl:flex items-center ">
                <div class="ml-6 relative">
                            <div class="flex items-center relative" @click="dropdownHandlerPriceRange($event)"  >
                                <ul class="w-52 p-2 border-r bg-gray-800 absolute rounded right-0 top-0 shadow mt-16 hidden overflow-hidden z-10 ">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal py-2">
                                       <label class="flex radio p-2 cursor-pointer">
                                                <input class="my-auto transform scale-125" type="radio" name="price"  v-model="price" v-bind:value="{min: 0, max: 200}"/>

                                                <div class="title px-2">RM0 - RM200</div>
                                        </label>
                                    </li>
                                <hr class="border-yellow-300  ">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <label class="flex radio p-2 cursor-pointer">
                                                <input class="my-auto transform scale-125" type="radio" name="price"  v-model="price" v-bind:value="{min: 200, max: 500}"/>
                                                <div class="title px-2">RM200 - RM500</div>
                                        </label>
                                    </li>
                                       <hr class="border-yellow-300  ">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow-700 flex items-center focus:text-yellow-700 focus:outline-none">
                                        <label class="flex radio p-2 cursor-pointer">
                                          <input class="my-auto transform scale-125" type="radio" name="price"  v-model="price" v-bind:value="{min: 500, max: 800}"/>
                                                <div class="title px-2">RM500 - RM800</div>
                                        </label>
                                    </li>
                                      <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <label class="flex radio p-2 cursor-pointer">
                                          <input class="my-auto transform scale-125" type="radio" name="price"  v-model="price" v-bind:value="{min: 800, max: 2000}"/>
                                                <div class="title px-2">RM800 - RM2000</div>
                                        </label>
                                    </li>
                                    <hr class="border-yellow-300">
                                    <li class="cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                                          <label class="flex justify-center cursor-pointer">
                                            <div @click="clearFilter('price')" class="px-5 rounded-full text-yellow-500 mt-3 ">&cross; Clear</div>
                                            <button :class="[top_btn_style]" @click="getFilter" class="px-5 rounded-full ">Apply</button>
                                       </label>

                                    </li>
                                </ul>



                                <div class="flex justify-center text-gray-100">
                                    <button :class="[top_btn_style]" class="px-5 rounded-full">Price Range</button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                </div>
            </div>

        </div>
    </div>
 <!-- filter bar -->

  <!-- Room Result -->
     <div class="max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-inner" >
         <div class="flex justify-between">
             <span v-if="page=='[object MouseEvent]'" class="text-base font-bold flex justify-start">Rooms for rent ({{ pageInfo.total }}) | Showing Page 1 of {{ lastPage }} </span>
             <span v-else class="text-base font-bold flex justify-start">Rooms for rent ({{ pageInfo.total }}) | Showing Page {{ page }} of {{ lastPage }} </span>
            <div class="w-1/3 flex justify-end">
                            <select v-model="sort" class="focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-yellow-200 focus:shadow-outline-gray text-base py-2 px-8 w-1/2 xl:px-3 rounded font-medium  appearance-none bg-transparent">
                                <option selected @click="getList" value="">Order By</option>
                                <option @click="getList" value="asc">Price: Lowest to Highest</option>
                                <option @click="getList" value="desc">Price: Highest to Lowest</option>
                            </select>
                    </div>
        </div>

        <div  v-if="lists.length==0" class="bg-yellow-200 border-yellow-600 text-gray-600  p-10 mt-7 rounded-md" role="alert">
                   <center><p class="font-bold text-base"> Sorry, no result is found.</p></center>
            </div>
        <div else>
            <div v-for="(list,index) in lists" :key="index.id" class="flex justify-start  ">
                <router-link @click.native="scrollToTop" :to="{ name: 'view_room_list', params:{id: list.id}}" class="flex justify-center w-full px-8 py-4 overflow-hidden bg-white rounded-lg shadow-lg mt-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:bg-yellow-400 hover:shadow-2xl">
                <!-- flex justify-center bg-white rounded-xl border-2 overflow-hidden -->
                    <div class="w-1/3 bg-cover" > <img class="h-48 w-full object-cover"  :src="'/images/Properties/'+list.photo_room[0].photo_name" alt="Avatar"  /></div>
                    <div class="w-2/3 p-4 md:p-4">
                        <div class="flex justify-between item-center">
                            <h1 class="text-2xl font-bold text-gray-800 dark:text-white"> {{ list.listing_name }}</h1>
                            <h1 class="text-2xl font-bold text-yellow-800 dark:text-white">RM{{list.monthly_rent}}/Month</h1>
                        </div>

                        <div class="flex mt-2 text-sm text-gray-700 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt-fill mx-1" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                             <div class="mx-1 text-green-700">
                                 {{ list.property.name }} | {{ list.campus }}
                             </div>
                        </div>
                        <div class="flex mt-2 item-center text-gray-700  items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-door-open-fill mx-1" viewBox="0 0 16 16">
                                 <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                            </svg>
                             <div class="mx-1 text-sm text-blue-700">
                                 {{ list.room_type }} | {{ list.property.gender_preferences }}
                            </div>
                        </div>
                        <div class="flex mt-2 item-center  text-gray-700  items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-plus-square-fill mx-1" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                            </svg>
                            <div class="mx-1 text-sm ">
                               {{ list.property.furnishing }} | {{ list.room_furnishing }}
                             </div>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
                 <center>


                    <div v-if="lists.length!=0" class="mt-5 mb-5 flex justify-between ">
                    <div class="w-1/2 flex justify-start ">
                            <select  v-model="showSize" class="focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-yellow-200 focus:shadow-outline-gray text-base py-2 px-8 w-1/2 xl:px-3 rounded font-medium  appearance-none bg-transparent">
                                <option @click="getList" value="10">Show Entries</option>
                                <option @click="getList" value="10">10</option>
                                <option @click="getList" value="20">20</option>
                                <option @click="getList" value="100000">All</option>
                            </select>
                    </div>
                        <div class="w-1/2 flex justify-end ">
                            <Page :current="pageInfo.current_page" :total="pageInfo.total" :page-size="parseInt(pageInfo.per_page)" @on-change="getList"></Page>
                        </div>
                     </div>
                </center>

    </div>





   <!-- loading -->
    </div>
    <div v-else>
        <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="circular"></loader>
    </div>
  <!-- loading -->



</div>
</template>
<script>


export default {

    props: {

        },
    data(){

        return{
            lists: [],
            campus: 'Gambang',
            sort: '',
            location: '',
            price:{},
            gender: '',
            room: '',
            toggle: false,
            byID: '',
            byGender: '',
            showSize: 10,
            page: 1,
            lastPage: '',
            pageInfo: '',
            isReady: false,
            noScroll: false,


            top_btn_style: 'p-3 rounded bg-yellow-400 text-white hover:bg-yellow-600 hover:text-white transition duration-150 ease-in-out shadow-xl',
            top2_btn_style: 'p-3 rounded bg-yellow-500 text-white hover:bg-yellow-700 hover:text-white transition duration-150 ease-in-out shadow-xl',
        }
    },
     methods:{
        getList(page=1){
              this.page=page;
            axios.get('/api/get_BrowseList/'+this.campus+'?page='+page, {
                params: {
                    location: this.location,
                    minPrice: this.price.min,
                    maxPrice: this.price.max,
                    gender: this.gender,
                    room: this.room,
                    sort: this.sort,
                    showSize: this.showSize
                }
                }).then((response)=>{
                this.lists=response.data.data;
                this.pageInfo = response.data.meta
                this.lastPage=response.data.meta.last_page
                this.isReady=true;

                //this.scrollToTop();


                console.warn(this.lists.data);
            })

        },
        scrollToTop() {
            //this.$refs.section.scrollTo(0, 0);
            this.$root.$emit("scroll",this.user_id);
        },

        change_campus(c){
            if(c==0){
                this.campus = 'Gambang'
            }else{
                this.campus = 'Pekan'
            }
                this.location='';
                this.price={};
                this.gender= '';
                this.room='';
                this.removeQueryString()
                this.getList()

        },
        changeQueryString(){

            this.$router.replace({ query:{ campus: this.campus.toLocaleLowerCase(),location: this.location.toLocaleLowerCase(),
            roomtype: this.room.toLocaleLowerCase(),gender: this.gender.toLocaleLowerCase(), minprice: this.price.min, maxprice: this.price.max}})
        },
        removeQueryString(){
            this.$router.replace({ name: "BrowseRoom_Student" })
        },
        dropdownHandlerRoomType(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
          dropdownHandlerPriceRange(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
        dropdownHandlerGenderPreference(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
        clearFilter(type){
            if(type == 'room'){
                var ele = document.getElementsByName("room_type");
                this.room= '';
                for(var i=0;i<ele.length;i++)
                    ele[i].checked = false;
            }else if(type == 'gender'){
                var ele = document.getElementsByName("gender");
                this.gender= '';
                for(var i=0;i<ele.length;i++)
                    ele[i].checked = false;
            }else{
                var ele = document.getElementsByName("price");
                this.price= {};

                for(var i=0;i<ele.length;i++)
                    ele[i].checked = false;
            }
        },

        getFilter(){
            this.changeQueryString()
            this.getList()
        },
    },
    watch:{
        $route() {
            // if(this.$route.query.campus == "Gambang"){

            // }
        },
    },
       mounted: function(){
        this.getList();
        this.scrollToTop();

    },



}
</script>

