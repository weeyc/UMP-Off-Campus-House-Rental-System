
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div :class="[modalBackground]" class="rounded min-h-min overflow-y-auto shadow-lg w-11/12 md:w-1/3" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">View Receipt</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
      <!-- component -->
<div class="min-72 bg-gray-100 space-y-12 py-10">
  <div id="printMe" class="container mx-auto">

    <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">

      <div class="h-20 flex items-center justify-between" style="background-color: #2b2a33;">
        <img class="ml-5" src="https://img.icons8.com/nolan/64/cottage.png"/>
        <p class="mr-20  text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ">UOCA Payment Receipt</p>

        <p class="mr-5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text  font-thin text-lg">ID-0{{form.id }}</p>
    </div>

      <p class="py-6 text-lg tracking-wide ml-16">{{form.details}} <span class="text-green-500"> ({{ form.status }}) </span></p>
      <!-- <hr > -->
      <div class="flex justify-between px-5 mb-2 text-base">
        <p class="text-yellow-500">MYR {{form.total}}</p>
        <p class="text-blue-500">{{moment(form.date ).format("DD-MM-YYYY, h:mm a")}}</p>
      </div>
    </div>

   </div>
</div>

        <div class="flex justify-end items-center w-100 border-t p-3">
            <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Okay</button>
            <button @click.prevent="print" class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white">Print</button>
        </div>
    </div>
</div>
</template>

<script>
import moment from "moment";
export default {
      props: {
        form: Object,
        user_id: Number,
        role: Number
    },
components: {

  },

    data() {
        return {

            modalBackground: '',
            output: null,
            moment: moment,

        }
    },
    methods: {
           print () {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
     editUser(){
            axios.post('/api/update_profile/'+this.user_id+'/'+this.role,
            this.form
            ).then(() =>{
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Profile update successfully!',
                showConfirmButton: false,
                timer: 1500
                })
                this.closeModal();
                this.$emit("refreshData");
                this.$root.$emit("refreshData",this.user_id);

        }).catch(error =>this.errors.record(error.response.data));

        },
         closeModal(){
             this.$emit("closeModal");
         },
        getRole(){
            if(this.role == 1){
                this.modalBackground = 'bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400'
            }else if (this.role == 2){
                this.modalBackground = 'bg-gradient-to-br from-sky-400 to-cyan-300'
            }else{
                this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400'
            }
          }
    },
    mounted: function(){
        this.getRole();
    },
};

</script>
