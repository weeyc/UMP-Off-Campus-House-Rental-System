
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div class="bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Edit Profile</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3">
            <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Profile Details</h1>

               <div>
                   <center>
                       <AvatarInput
                            class="w-32 h-32 rounded-full mb-5"
                            v-model="form.avatar"
                            @getAva="getAvatar"
                            :default-src="'/images/Profile/'+form.pic"

                            />
                    </center>
                </div>

                <div class="flex items-center">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Name</label>
                    <input type="text" name="name" placeholder="Name" v-model="form.name"
                        class="flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                </div>
                <div class=" mb-5">
                    <span class="flex text-red-500 ml-24">{{ errors.get('name')}}</span>
                </div>


                <div class="flex items-center">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Email</label>
                    <input type="email" name="email" placeholder="Email" v-model="form.email"
                        class="flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                </div>
                <div class=" mb-5">
                    <span class="flex text-red-500 ml-24">{{ errors.get('email')}}</span>
                </div>

                <div class="flex items-center">
                    <label for="number" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Password</label>
                    <input :type="type" id="password" name="password" placeholder="password" v-model="form.password"
                        class="flex-1 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                         <button class="mr-2 py-2 px-2 rounded-l-none  border-gray-400 focus:border-green-400 outline-none" @click="showPassword">
                            <div v-if="isVisible">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                            </div>

                            <div v-if="!isVisible">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                                    </path>
                                </svg>
                            </div>
                         </button>
                </div>
                <div class="mb-5">
                    <span class="flex text-red-500 ml-24">{{ errors.get('password')}}</span>
                </div>



                <div class="flex items-center">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Phone number</label>
                    <input type="text" name="phone_num"  v-model="form.phone_num" placeholder="Phone no."
                        class="flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                </div>
                <div class=" mb-5">
                    <span class="flex text-red-500 ml-24">{{ errors.get('phone_num')}}</span>
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

                <div class="flex items-center mb-5">
                    <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Profile Description</label>
                    <textarea name="des" rows="4" cols="33" placeholder="Profile descriptions"
                    class="flex-1 mr-5 px-3 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" v-model="form.des"/>

                </div>

            </div>
                <div class="flex justify-end items-center w-100 border-t p-3">
                    <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
                    <button @click.prevent="editUser" type="submit" class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white">Update</button>
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
      props: {
        form: Object,
        user_id: Number,
        role: Number
    },
components: {
    AvatarInput,
  },

    data() {
        return {
            errors: new Errors(),
            type: 'password',
            btnText: 'Show Password',
            isVisible: false,

        }
    },
    methods: {
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
        showPassword() {
            if(this.type === 'password') {
                this.type = 'text'
            } else {
                this.type = 'password'
            }
             this.isVisible =! this.isVisible;
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
