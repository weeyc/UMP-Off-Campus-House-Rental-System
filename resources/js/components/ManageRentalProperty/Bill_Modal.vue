
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >

    <!-- modal -->
    <div class="rounded max-h-full overflow-y-auto shadow-lg  p-6 w-2/3 min-h-2/3 bg-gradient-to-r from-sky-400 to-cyan-300" >
      <!-- modal header -->
      <div v-if="isReady==true">
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Tenant Bills Details</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
         <div class="p-6 ml-5">

         <div class="max-w-6xl p-6 mx-auto mt-3  bg-transparent rounded-md shadow-xl mb-5" >
               <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Tenant Bills</h2>
            <!-- <div class="flex items-center justify-center w-full overflow-hidden"> -->

            <div v-if="data.length==0" class="bg-blue-200 border-yellow-600 text-gray-600  p-10 mt-7 " role="alert">
                   <center><p class="font-bold text-base"> This tenant doesn't have any bills issued yet.</p></center>
            </div>
            <div v-else class=" m-5 mb-10">

                    <div class="w-full flex justify-center mb-3 ">
                                <select v-model="bydate"  class="w-2/4 focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-blue-200 focus:shadow-outline-gray text-base py-2 px-8  xl:px-3 rounded font-medium  appearance-none bg-transparent">
                                    <option value="" selected disabled hidden>Choose month</option>
                                    <option @click="getData" v-for="d in months" :key="d">{{d}} </option>


                                </select>
                        </div>

    <div class="min-h-screen p-5 bg-transparent  rounded-lg border-collapse flex flex-col justify-center w-full h-full bg-no-repeat bg-cover" style="background-image: url(/images/UMP/clock.jpg);">
    <div class="flex max-h-full sm:max-w-xl sm:mx-auto">
      <div class="flex  max-h-full  bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-80 border border-gray-200" style="backdrop-filter: blur(20px);">
        <div class="max-w-md mx-auto ">
            <router-link  :to="{ name: 'land_profile_view', params:{role: 1, id: student_info.std_id}}" target="_blank"  class="w-full focus:outline-none focus:text-white  flex justify-between sm:w-auto items-center space-x-10 text-white mx-6 p-3 rounded focus:bg-yellow-600 bg-yellow-500 hover:bg-yellow-600">
                <div class="flex justify-start sm:w-auto items-center space-x-2">
                    <div>
                        <img class="rounded-full h-10 w-10 object-cover" :src="'/images/Profile/'+student_info.pic" alt="Avatar" />
                    </div>
                    <div class="flex flex-col justify-items-start text-left space-y-1">
                        <p class="text-base leading-4 text-white">{{ student_info.name }}</p>
                        <p class="text-xs leading-3 text-white">{{ student_info.email }}</p>
                    </div>
                </div>
            </router-link >

            <div class="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p class="text-sm">Here’s a summary of tenant's {{moment(data.bills_date).format("MMM-YYYY") }}  UOCA rental bill {{ data.bills_id }}:</p>

                <div class="shadow-md rounded my-6">

                    <table class="text-center w-full border-2 rounded-lg "> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                    <thead>
                      <tr>
                        <th  colspan="2" class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-r  border-grey-light ">Bills Date <p class="font-extrabold">{{moment(data.bills_date).format("MMM-YYYY") }}  </p></th>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light">Tenant ID<p class="font-extrabold">{{ data.tenant_id }} </p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover:bg-grey-lighter text-sm">
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Outstanding<p class="font-bold text-red-500">RM {{(data.outstanding_bills).toFixed(2)}}</p> </td>
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Bills Status<p class="font-bold">{{data.bills_status}}</p></td>
                        <td rowspan="2" class="py-4 px-6 border-b border-grey-light border-r ">Total Amount<p class="font-black text-xl text-ump-green">RM {{(data.total_bills).toFixed(2)}}</p>
                            <div v-if="data.bills_status=='Overdue'" class="mb-5 ">
                                <center>
                                    <div class="mx-auto bg-red-500 px-4 py-1 rounded-full text-white" >
                                         Overdue
                                    </div>
                                </center>
                            </div>
                               <div v-if="data.payment_status=='Paid'"  class="mb-5 ">
                                <center>
                                    <div class="mx-auto bg-green-400 px-4 py-1 rounded-full text-white" >
                                         Paid
                                    </div>
                                </center>
                            </div>
                               <div v-if="data.payment_status=='Unpaid'"  class="mb-5 ">
                                <center>
                                    <div class="mx-auto bg-yellow-400 px-4 py-1 rounded-full text-white" >
                                         Unpaid
                                    </div>
                                </center>
                            </div>

                            </td>
                      </tr>
                      <tr class="hover:bg-grey-lighter text-sm">
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Penalty Fees <p class="font-bold text-red-500">RM {{(data.penalty_fees).toFixed(2)}}</p></td>
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Bill Due <p class="font-bold">{{moment(data.due_date).format("d-MMM-YYYY") }} </p></td>


                      </tr>
                    </tbody>
                  </table>


                </div>

        </div>
        </div>
      </div>
    </div>
  </div>









                </div>

    </div>


  </div>
                <div class="flex justify-end items-center w-100 border-t p-3">
                    <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
                </div>
                 </div>
  <div v-else>
             <loader object="#4491ee" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
    </div>

    </div>
</div>
</template>

<script>
import moment from "moment";
export default {
    props: {
        user_id: Number,
        role: Number,
        tenant: Object,
    },
    components: {
    },
    data() {
        return {
            data: [],
            months: [],
            moment: moment,
            bydate: '',
            form:{
                std_id: this.user_id,
                bills_id: '',
                tenant_id: '',
                property_id: '',
                landlord_id: '',
                payment_details: '',
                total_payment: '',
            },
            student_info:{
                std_id: this.tenant.student_id,
                pic: this.tenant.student.pic,
                name: this.tenant.student.name,
                email: this.tenant.student.email,
            },
            isReady: false,
        }
    },

    methods: {
        getData(){
            axios.get('/api/get_bills/'+this.user_id+'/'+this.role,{
                params: {
                    date: this.bydate,
                }}).then((response)=>{
                    this.data=response.data;
                    this.form.bills_id= this.data.bills_id;
                    this.form.tenant_id= this.data.tenant_id;
                    this.form.property_id= this.data.property_id;
                    this.form.payment_details= 'UOCA Bills (ID: '+this.data.bills_id+') Payment - Room ID: '+this.data.room_id;
                    this.form.total_payment= this.data.total_bills;
                    this.isReady=true;
                    console.warn(this.data);
                })
            },
        getMonths(){
            axios.get('/api/get_bills_months/'+this.user_id+'/'+this.role,{
                params: {
                    date: this.bydate,
                }}).then((response)=>{
                    this.months=response.data;
                    console.warn(this.months);
                })
            },
        closeModal(){
             this.$emit("closeModal");
        },
    },
    mounted: function(){
               this.getData();
            this.getMonths();
    },

};

</script>
