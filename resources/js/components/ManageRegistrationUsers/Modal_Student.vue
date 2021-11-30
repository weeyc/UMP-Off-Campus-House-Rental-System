<template>
 <div  class="modal h-screen w-full fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div class="bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 rounded shadow-lg w-10/12 md:w-1/3">
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">View User Details</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
      <div class="p-3">
           <table class="min-w-full px-3 py-3 shadow-lg">
                 <tr  class="order-b border-blue-100 hover:bg-pink-100" >
                       <td colspan="2" class="place-items-center py-1">
                           <center><img :src="'/images/Profile/'+form.pic"  class="w-32 h-32 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500"></center>
                       </td>
                 </tr>
                <tr class="border-b border-blue-100 hover:bg-pink-100" >
                    <td class="py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal ">ID: </td >
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div  class="flex items-center">
                            <span >{{ form.id }}</span>
                        </div>
                    </td>
                </tr>
                    <tr  class="border-b border-blue-100 hover:bg-pink-100" >
                    <td class="py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal" >Name: </td >
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                             <span >{{ form.name }}</span>
                        </div>
                    </td>
                </tr>
                    <tr  class="border-b border-blue-100 hover:bg-pink-100" >
                    <td class="py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal">Email: </td >
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                              <span >{{ form.email }}</span>
                        </div>
                    </td>
                </tr>
                    <tr  class="border-b border-blue-100 hover:bg-pink-100" >
                    <td class="py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal">Gender: </td >
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                              <span >{{ form.gender }}</span>
                        </div>
                    </td>
                </tr>
                    <tr  class="border-b border-blue-100 hover:bg-pink-100" >
                    <td class="py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal">Phone: </td >
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                               <span >{{ form.phone }}</span>
                        </div>
                    </td>
                </tr>
            </table>
      </div>



      <div class="flex justify-end items-center w-100 border-t p-3">
        <router-link :to="{ name: 'profile_view', params:{role: form.role, id: form.id}}" target="_blank" class="bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded text-white mr-1 close-modal">View Profile</router-link >
        <button @click="closeModal" class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1 close-modal">Okay</button>
      </div>
    </div>
</div>
</template>

<script>
export default {

    props: {
        form: Object,



    },
    data() {
        return {

        }
    },
    methods: {
        closeModal(){
          this.$emit('closeModal');
        },






    },
};
</script>
