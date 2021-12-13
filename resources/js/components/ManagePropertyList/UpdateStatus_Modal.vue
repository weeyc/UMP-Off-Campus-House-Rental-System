
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div :class="[modalBackground]" class="rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Update Status</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3">
            <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Property Details</h1>
                <div class="flex items-center">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Property Id</label>
                    <input type="text" placeholder="Name" v-model="form.id" readonly
                        class="flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                </div>
                <div class="flex items-center mb-5">
                    <label for="gender" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Status</label>
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="status" value="verified" v-model="form.status"/>
                        <div class="title px-2">verified</div>
                     </label>
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="status" value="processing" v-model="form.status" />
                        <div class="title px-2">processing</div>
                    </label>
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="status" value="unverified" v-model="form.status" />
                        <div class="title px-2">unverified</div>
                    </label>
                </div>

            </div>
                <div class="flex justify-end items-center w-100 border-t p-3">
                    <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
                    <button @click.prevent="updateStatus" type="submit" class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white">Update</button>
                </div>
    </div>
</div>
</template>

<script>

export default {
      props: {
        form: Object,
        staff_id: Number,
    },
components: {

  },

    data() {
        return {
            modalBackground: 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400',
        }
    },
    methods: {
     updateStatus(){
            axios.post('/api/update_prop_status/'+this.staff_id,
            this.form
            ).then(() =>{
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Status update successfully!',
                showConfirmButton: false,
                timer: 1500
                })
                this.closeModal();
                this.$emit("refreshData");

        }).catch(error =>this.errors.record(error.response.data));

        },

         closeModal(){
             this.$emit("closeModal");
         },

    },
    mounted: function(){

    },
};

</script>
