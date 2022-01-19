<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="ml-5">

    <div class="overflow-x-auto max-w-6xl p-6 mx-auto  bg-gray-100 rounded-md shadow-xl mb-5 rounded-tl-none">
         <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Payment for Me</h2>
 <div v-if="isReady==true">
          <div v-if="payments.length==0" class="bg-blue-200 border-yellow-600 text-gray-600  p-10 mt-3 w-full rounded-md " role="alert">
                   <center><p class="font-bold text-base"> There are no any payment transact to you yet.</p></center>
            </div>
      <div  v-else class="py-2 align-middle inline-block min-w-full">
                    <div v-if="pageInfo" class="items-center">
                          <p v-if="page=='[object MouseEvent]'" class="font-medium text-dark-600 dark:text-gray-400" >  Showing Page 1 of {{ lastPage }}</p>
                          <p v-else class="font-medium text-dark-600 dark:text-gray-400" >  Showing Page {{ page }} of {{ lastPage }}</p>
                    </div>
        <div class=" shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th>
                    <button @click="sorting(2)"><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  payment date
                </th></button>
                <!-- <button @click="sorting(2)"><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment_id
                </th></button> -->
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
                </th> -->
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Student name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room ID
                </th>
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  booking_id
                </th> -->
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  bill_id
                </th> -->
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  payment details
                </th>
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  payment status
                </th> -->
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  total payment
                </th>

                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th> -->

              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(data, index) in payments" :key="data.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ index + 1 }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{   moment(data.payment_date ).format("DD-MM-YYYY, h:mm a") }}</div>
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.payment_id }}</div>
                </td> -->

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.student.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.room_id  }}</div>
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.booking_id }}</div>
                </td> -->
                <!-- <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{data.bill_id  }}</div>
                </td> -->
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ data.payment_details}}</div>
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{data.payment_status }}</div>
                </td> -->
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">RM {{(data.total_payment).toFixed(2) }}</div>
                </td>

                    <!-- <td class="py-3 px-2 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <button @click="read(data); toggleModal = !toggleModal;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td> -->



              </tr>
            </tbody>

          </table>
               <div v-if="pageInfo" class="mt-5 mb-5 flex justify-between ">
                        <div class="w-1/2 flex justify-start ">
                                <select  v-model="showSize" class="focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-blue-200 focus:shadow-outline-gray text-base py-2 px-8 w-1/2 xl:px-3 rounded font-medium  appearance-none bg-transparent">
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

      </div>
  </div>
  <div v-else>
           <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
    </div>

    </div>

       <ReceiptModal
            v-if="toggleModal"
            :form="form"
            :user_id="user_id"
            :role="role"
            @closeModal="closeModal">
        </ReceiptModal>

  </div>
</template>

<script>
import ReceiptModal from './Receipt_Modal.vue';
import moment from "moment";

export default {

    components: {
         ReceiptModal,
    },
     props: {
        user_id: Number,
        role: Number,

    },

    data() {
        return {
            moment: moment,
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
            isReady: false,

            form:{
                id: '',
                details: '',
                status: '',
                total: '',
                date: '',
            },
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
                this.isReady=true;
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

        read(data){
            this.form.id = data.payment_id;
            this.form.details = data.payment_details;
            this.form.status = data.payment_status;
            this.form.total = data.total_payment;
            this.form.date = data.payment_date;



        },


        closeModal(){
            this.toggleModal =!  this.toggleModal ;
        },

    },





};
</script>
