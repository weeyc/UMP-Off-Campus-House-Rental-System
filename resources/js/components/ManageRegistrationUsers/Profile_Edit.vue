<template>
<div class="profile-page">

  <section class="relative block h-500-px">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80');
          ">
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section class="relative py-16 bg-blueGray-200">
    <div class="container mx-auto px-4">
      <div :class="[background]" class=" relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">

            <div class="w-full px-4 lg:order-1 flex justify-center">

              <div v-for= "user in userProfile" :key="user.id" class="relative">
                  <img :src="'/images/Profile/'+user.pic" :class="[borderColor]" class="shadow-xl rounded-full h-48 w-48 object-cover  align-middle border-4 absolute -m-16 -ml-10 lg:-ml-16 max-w-200-px" alt="Profile">
              </div>
            </div>
            <div class="w-full px-4 lg:order-2 lg:text-right lg:self-center">
              <div  v-for= "user in userProfile" :key="user.id" class="py-6 px-3 mt-32 sm:mt-0">
                <button @click="clickEdit(user); toggleModal = !toggleModal" :class="[buttonColor]" class=" uppercase text-white font-bold hover:shadow-md shadow text-base px-6 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Edit
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1 hidden">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span class="text-sm text-blueGray-400">Friends</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">1</span><span class="text-sm text-blueGray-400">Rental House</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">4</span><span class="text-sm text-blueGray-400">Student Year</span>
                </div>
              </div>
            </div>
          </div>
        <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    <div v-for= "(user, i) in userProfile" :key="i">
                      {{ user.name }}
                    </div>
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-user-cog mr-2 text-lg text-blueGray-400"></i>
                    {{ userRole }}
            </div>
                <div v-for= "(user, i) in userProfile" :key="'A'+ i" class=" px-4 mb-2 text-blueGray-600 mt-10">
              <i class="fas fa-id-card mr-2 text-lg text-blueGray-400"></i>  {{ user.id }}
            </div>
               <div   v-for= "(user, i) in userProfile" :key="'B'+ i" class="  mb-2 text-blueGray-600">
              <i class="fas fa-venus-mars mr-2 text-lg text-blueGray-400"></i>  {{ user.gender }}
            </div>
            <div   v-for= "(user, i) in userProfile" :key="'C'+ i" class=" mb-2 text-blueGray-600">
              <i class="fas fa-phone-alt mr-2 text-lg text-blueGray-400"></i>{{ user.phone_no }}
            </div>
            <div  v-for= "(user, i) in userProfile" :key="'D'+ i" class="mb-2 text-blueGray-600">
              <i class="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>{{ user.email }}
            </div>


        </div>
          <div v-for= "(user, i) in userProfile" :key="'E'+ i" class="mt-3 py-5 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                     {{ user.des }}
                </p>

              </div>
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
          If I were you, I would adore me.
        </div>
      </div>
    </div>
  </div>


</footer>

  </section>
         <EditModal
            v-if="toggleModal"
            :toggle="toggleModal"
            :form="form"
            @refreshData="getProfile"
            :user_id="user_id"
            :role="role"
            @closeModal="closeEditModal">

        </EditModal>
</div>




</template>

<script>
import EditModal from './Edit_Modal.vue';
export default {
     components: {
        EditModal,
    },
      props: {
            user_id: Number,
            role: Number
        },
    data(){
        return{
            background: '',
            borderColor: '',
            buttonColor:'',
            userProfile: [],
            route_id: this.$route.params.id,
            route_role: this.$route.params.role,
            userRole: '',
            form:{
                id: '',
                name: '',
                email: '',
                password: '',
                gender: '',
                phone_num: '',
                avatar: null,
                pic: '',
                des: '',
            },
             toggleModal: false,
        }
    },
    methods:{
        getProfile(){
            axios.get('/api/get_profile/'+this.user_id+'/'+this.role).then((response)=>{
                this.userProfile=response.data.data;
                console.warn(this.userProfile.data);
                }).catch((errors)=> {console.log(errors)})
            },
        closeEditModal(){
            this.toggleModal =!  this.toggleModal ;
        },
        clickEdit(user){
                this.form.id = user.id
                this.form.name = user.name
                this.form.email = user.email
                this.form.password = user.password
                this.form.gender = user.gender
                this.form.phone_num = user.phone_no
                this.form.pic = user.pic
                this.form.des = user.des
        },
        getRole(){
            if(this.role == 1){
                this.userRole = 'Student'
                this.background = 'bg-yellow-200'
                this.borderColor = 'border-yellow-400'
                this.buttonColor = 'bg-yellow-500 hover:bg-yellow-600'
            }else if (this.role == 2){
                this.userRole = 'Landlord'
                this.background = 'bg-blue-200'
                this.borderColor = 'border-blue-400'
                this.buttonColor = 'bg-blue-500 hover:bg-blue-600'
            }else{
                this.userRole = 'Staff'
                this.background = 'bg-pink-200'
                this.borderColor = 'border-pink-400'
                this.buttonColor = 'bg-pink-500 hover:bg-pink-600'
            }

        }
    },

        mounted: function(){
            this.getProfile();
            this.getRole();
    },




}

</script>
