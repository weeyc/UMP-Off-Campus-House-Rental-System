
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div :class="[modalBackground]" class="rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Write a Post</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3">
                <div class="flex items-center mb-5">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Post</label>
                    <textarea name="des" rows="4" cols="20" placeholder="Profile descriptions"
                    class="flex-1 mr-5 px-3 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" v-model="form.post"/>
                </div>

            </div>
            <div class="flex justify-end items-center w-100 border-t p-3">
                <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
                <button @click.prevent="posting"  class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white">Post</button>
            </div>
    </div>
</div>
</template>

<script>
class Errors{
    constructor(){
        this.errors = {};
    }
    get(field){
        if(this.errors[field]){
            return this.errors[field][0];
        }
    }
    record(errors){
        this.errors = errors.errors;
    }
}


export default {
      props: {
        user_id: Number,
        role: Number,
        prop_id: Number
    },
    data() {
        return {
            errors: new Errors(),
            modalBackground: '',
            form:{
                post: ''
            }


        }
    },
    methods: {
     posting(){
            axios.post('/api/post_bulletin/'+this.user_id+'/'+this.role+'/'+this.prop_id,
            this.form
            ).then(() =>{
                setTimeout(() =>  this.$toaster.success('Posted'), 1000);
                this.closeModal();
                this.$emit("refreshData");

        }).catch(error =>this.errors.record(error.response.data));

        },
         closeModal(){
             this.$emit("closeModal");
         },
        getRole(){
            if(this.role == 1){
                this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400'
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
