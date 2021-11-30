<template>
   <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div class="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Create New Staff</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3">
            <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Staff Details</h1>

               <div>
                   <center>
                       <AvatarInput
                            class="w-32 h-32 rounded-full mb-5"
                            v-model="form.avatar"
                            @getAva="getAvatar"
                            default-src="https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320944.jpg"
                            />

                    </center>
                </div>


                <div class="flex items-center">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Name</label>
                    <input type="text" name="name" placeholder="Name" v-model="form.name"
                        class="flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                </div>
                <div class=" mb-5">
                    <span class="flex text-red-500 ml-24"> {{ errors.get('name')}}</span>
                </div>


                <div class="flex items-center">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Email</label>
                    <input type="email" name="email" placeholder="Email" v-model="form.email"
                        class="flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                </div>
                <div class=" mb-5">
                    <span class="flex text-red-500 ml-24"> {{ errors.get('email')}}</span>
                </div>

                <div class="flex items-center">
                    <label for="number" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Password</label>
                    <input type="password" id="password" name="password" placeholder="password" v-model="form.password"
                        class="flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                </div>
                <div class="mb-5">
                    <span class="flex text-red-500 ml-24"> {{ errors.get('password')}}</span>
                </div>

                <div class="flex items-center">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Phone number</label>
                    <input type="text" name="phone_num"  v-model="form.phone_num" placeholder="Phone number"
                        class="flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                </div>
                <div class=" mb-5">
                    <span class="flex text-red-500 ml-24"> {{ errors.get('phone_num')}}</span>
                </div>

                <div class="flex items-center mb-5">
                    <label for="gender" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Gender</label>
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="gender" value="male" v-model="form.gender"/>
                        <div class="title px-2">male</div>
                     </label>
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" name="gender" value="female" v-model="form.gender" />
                        <div class="title px-2">female</div>
                    </label>
                </div>
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
import AvatarInput from './AvatarInput.vue';

export default {

components: {
    AvatarInput,
  },
    data() {
        return {

            form:{
                name: '',
                email: '',
                password:'',
                gender:'male',
                phone_num:'',
                avatar: null,
                pic:'',

            },
            errors: new Errors()

        }
    },
    methods: {


     createUser(){
            //  formData.set('image', this.form.avatar)
             axios.post('/api/create_staff',
                this.form
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
                    this.form.avatar=null;
                    this.form.pic='',
                    this.closeModal();
                    this.$emit("refreshData");
            }).catch(error =>this.errors.record(error.response.data));

        },
        getAvatar(event){
            this.form.pic = event;
        },
         closeModal(){
             this.$emit("closeModal");
         },












    },
};
</script>
