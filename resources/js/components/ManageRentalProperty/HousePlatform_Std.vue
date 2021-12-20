<template>
<div class="profile-page">

  <section class="top w-full bg-blue-600 overflow-hidden relative block h-1/2">
    <div class="top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0" style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80');
          ">
      <span id="blackOverlay" class="w-full h-full absolute opacity-10 bg-black"></span>
        <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white -mt-10">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="h-24 w-24 object-cover rounded-full">
          <h1 class="text-2xl font-semibold">Taman Sri Paduka 15150 Gambang Damai</h1>
          <h4 class="text-sm font-semibold">Muhammad Ali</h4>
        </div>
    </div>

  </section>

  <section class="relative py-16 bg-blueGray-200">
    <div class="container mx-auto px-4">
      <div class="w-full mb-6 bg-blueGray-200 shadow-xl rounded-lg -mt-36">
          <!-- max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-xl -->
        <div id="Board and bills" class="flex w-full">
            <div id="Board" class="p-5 flex-1 w-2/3">
                    <div class="bg-white mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <div class="h-14 flex justify-center items-center p-5" style="background-color: #2b2a33;">
                            <img class="" src="https://img.icons8.com/nolan/64/cottage.png"/>
                            <p class="text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ">House Bulletin Board</p>
                        </div>
                        <div id="bulletin" class="overflow-y-auto h-48 p-5 resize-y">
                            <!-- first post -->
                            <div class="bg-blue rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div class="flex flex-row justify-center mr-2">
                                    <img alt="avatar" class="rounded-full w-5 h-5 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png">
                                    <p class="text-purple-600 font-semibold ml-2 text-sm text-center md:text-left ">@Shanel <span class="text-xs ml-5 text-black">3:34 PM</span></p>
                                </div>
                                    <p style="width: 90%" class="text-gray-600 text-base text-center md:text-left ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
                            </div>
                        </div>
                    </div>
            </div>
            <div id="Bills" class="p-5 flex w-1/3">
                    <div class="bg-white mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <div class="h-14 flex justify-center items-center p-5" style="background-color: #2b2a33;">
                            <img class="" src="https://img.icons8.com/nolan/64/cottage.png"/>
                            <p class="text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ">My Bills</p>
                        </div>
                        <div id="bulletin" class="overflow-y-auto h-48 p-5">
                            <!-- first post -->
                            <div class="bg-blue rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div class="flex flex-row justify-center mr-2">
                                    <img alt="avatar" class="rounded-full w-5 h-5 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png">
                                    <p class="text-purple-600 font-semibold ml-2 text-sm text-center md:text-left ">@Shanel <span class="text-xs ml-5 text-black">3:34 PM</span></p>
                                </div>
                                    <p style="width: 90%" class="text-gray-600 text-base text-center md:text-left ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div id="line" class="px-72 mt-10 flex items-center justify-between">
            <hr class="w-full" />
                <p  class="focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500">My Rooms</p>
            <hr class="w-full" />
        </div>

        <div id="My Rooms" class="p-5">
            <div class="bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg">
                <div class="h-14 flex justify-center items-center p-5" style="background-color: #2b2a33;">
                        <img class="" src="https://img.icons8.com/nolan/64/cottage.png"/>
                    <p class="text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ">My Room</p>
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
                        Action
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    <tr >
                        <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{{ }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{{ }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{{}}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900"> {{}}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{{   }}</div>
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

        <div id="line" class="px-72 mt-10 flex items-center justify-between">
            <hr class="w-full" />
                <p  class="focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500">My Housemates</p>
            <hr class="w-full" />
        </div>

        <div id="Housemates" class="p-5">
            <div class="bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg">
                <div class="h-14 flex justify-center items-center p-5" style="background-color: #2b2a33;">
                        <img class="" src="https://img.icons8.com/nolan/64/cottage.png"/>
                    <p class="text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ">My Room</p>
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
                            Action
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                        <tr >
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900"> {{}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{   }}</div>
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

    <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
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
            info: [],
            room_id: this.$route.params.id

        }
    },
     methods:{
        getData(){
            axios.get('/api/get_roomPlatform/'+this.user_id+'/'+this.room_id+'?land=1&imej=1', {
                params: {
                    location: this.location,
                }
                }).then((response)=>{
                this.info=response.data.data;
                console.warn(this.lists.data);
            })

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

