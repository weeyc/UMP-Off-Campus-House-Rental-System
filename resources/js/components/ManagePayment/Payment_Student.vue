<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
           <div class="flex flex-col lg:flex-row p-2 lg:p-8 justify-between items-start lg:items-stretch w-full shadow-inner" style="background-image: url(/images/BlueCoral.jpg);">
                <div class="w-full flex flex-col lg:flex-row items-start lg:items-center">
                    <div class="flex items-center ">
                        <span class="text-xl font-black">MANAGE PAYMENT</span>
                    </div>
                </div>
                  <div class="w-full flex flex-col lg:flex-row items-start lg:items-center ">
                    <div v-if="pageInfo" class="flex items-center">
                          <p v-if="page=='[object MouseEvent]'" class="font-medium text-dark-600 dark:text-gray-400" >  Showing Page 1 of {{ lastPage }}</p>
                          <p v-else class="font-medium text-dark-600 dark:text-gray-400" >  Showing Page {{ page }} of {{ lastPage }}</p>
                    </div>

                </div>



            </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-11/12">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th>
                <button @click="sorting(2)"><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment_id
                </th></button>
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  tenant_id
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  student_id
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  property_id
                </th> -->
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  landlord_id
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  room_id
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  booking_id
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  bill_id
                </th> -->
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  payment_details
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  payment_status
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  total_payment
                </th>
                 <button @click="sorting(2)"><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  payment_date
                </th></button>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>

              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(data, index) in payments" :key="data.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ index + 1 }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.payment_id }}</div>
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.landlord_id }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.room_id  }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.booking_id }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{data.bill_id  }}</div>
                </td> -->
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">RM {{ data.payment_details}}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{data.payment_status }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{data.total_payment }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.payment_date  }}</div>
                </td>
                    <td class="py-3 px-2 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <button @click="readUser(data); toggleModal = !toggleModal;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
         <div v-if="pageInfo" class="mt-5 mb-5 flex justify-between ">
                    <div class="w-1/2 flex justify-start ">
                            <select  v-model="showSize" class="focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-pink-200 focus:shadow-outline-gray text-base py-2 px-8 w-1/2 xl:px-3 rounded font-medium  appearance-none bg-transparent">
                                <option @click="getPayment" value="10">Show Entries</option>
                                <option @click="getPayment" value="10">10</option>
                                <option @click="getPayment" value="20">20</option>
                                <option @click="getPayment" value="100000">All</option>
                            </select>
                    </div>
                        <div class="w-1/2 flex justify-end ">
                            <Page :current="pageInfo.current_page" :total="pageInfo.total" :page-size="parseInt(pageInfo.per_page)" @on-change="getPayment"></Page>
                        </div>
                     </div>
  </div>
</template>

<script>
//import ReadModal from './Modal_Student.vue';


export default {

    components: {
       // ReadModal,
    },
     props: {
        user_id: Number,
        role: Number,

    },

    data() {
        return {
            page: 1,
            lastPage: '',
            filterGender: '',
            filterName: '',
            pageInfo: '',

            toggle: false,
            byID: '',
            bydate: '',
            showSize: 10,
            payments: [],
            toggleModal: false,

                profile:{
                    id: '',
                    name: '',
                    email: '',
                    phone: '',
                    gender: '',
                    pic: '',
                    role: '1'
                }
        };
    },
     mounted: function(){
            this.getPayment();

    },

    methods: {
        getPayment(page=1){
            axios.get('/api/get_payments/'+this.user_id+'/'+this.role+'?page='+page,{
                params: {
                    byID: this.byID,
                    bydate: this.bydate,
                    showSize: this.showSize
                }}).then((response)=>{
                this.payments=response.data.data;
                this.pageInfo = response.data.meta
                this.lastPage=response.data.meta.last_page
                console.warn(this.payments.data);

                })
            },

        sorting(q){
            if(q==1){
                this.toggle=!this.toggle;
                if(this.toggle==true){
                    this.byID='desc';
                     this.getPayment();
                }else if(this.toggle==false){
                    this.byID='asc';
                    this.getPayment();
                }
                this.byID = '';
            }else if(q==2){
                 this.toggle=!this.toggle;
                if(this.toggle==true){
                    this.bydate='desc';
                     this.getPayment();
                }else if(this.toggle==false){
                    this.bydate='asc';
                    this.getPayment();
                }
                this.bydate = '';

            }

        },

        readUser(user){
            this.profile.id = user.id;
            this.profile.name = user.name;
            this.profile.email = user.email;
            this.profile.phone = user.phone_no;
            this.profile.gender = user.gender;
            this.profile.pic = user.pic;
        },


        closeReadModal(){
            this.toggleModal =!  this.toggleModal ;
        },

    },





};
</script>
