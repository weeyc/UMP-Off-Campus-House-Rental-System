<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Create New Staff</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
      <div class="p-3">
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Staff Details</h1>
                <!-- <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Name</label>
                <input name="Name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Name" />

                 <label for="email" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
                <input name="Email" type="email"  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Email" />

                 <label for="Password" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Password</label>
                <input name="Password" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Password" />

                 <label for="Phone" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Phone Number</label>
                <input name="Phone" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Phone Number" /> -->

              <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                    <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Name</div>
                    <label class="flex p-2 cursor-pointer">
                        <input class="my-auto transform scale-125 ml-5" type="text" name="name" />
                    </label>
                </div>

                <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                    <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Gender</div>
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="gender" />
                        <div class="title px-2">male</div>
                    </label>

                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="gender" />
                        <div class="title px-2">female</div>
                    </label>
                </div>

                 <label for="Photo" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Profile Photo</label>
                <input name="Photo" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Profile Photo" />





      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
        <button @click.prevent="createUser" type="submit" class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Create</button>
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

    data() {
        return {
            errors: [],
            form:{
                name: '',
                email: '',
                password:'',
                gender:'male',
                phone_num:'',
                pic:'',

                errors: new Errors()

            },
        }
    },
    methods: {

     createUser(){
             axios.post('/api/create_staff',
                this.form,
                config
                ).then(() =>{
                    Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Staff created successfully!',
                    showConfirmButton: false,
                    timer: 1500
                    })
                    this.form.name='';
                    this.form.email='';
                    this.form.gender='';
                    this.form.password='';
                    this.form.gender='';
                    this.form.phone_num='';
                    this.form.pic='';

                    this.errors = [];
                    this.closeModal();
                    this.$emit("refreshData");
            }).catch(error =>this.errors=error.response.data.data);

        },
         closeModal(){
             this.$emit("closeModal");
         },









    },
};
</script>
