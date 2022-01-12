<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="ml-5 ">
            <div class="overflow-x-auto max-w-6xl p-6 mx-auto  bg-gray-100 rounded-md shadow-xl mb-5 rounded-tl-none">
               <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">My Bills</h2>
<div v-if="isReady==true">
               <div v-if="data.length==0" class="bg-yellow-200 border-yellow-600 text-gray-600  p-10 mt-3 w-full rounded-md " role="alert">
                   <center><p class="font-bold text-base">You don't having any bills yet.</p></center>
            </div>
            <div v-else class=" m-5 mb-10">

                    <div class="w-full flex justify-center mb-3 ">
                                <select v-model="bydate"  class="w-1/4 focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-yellow-200 focus:shadow-outline-gray text-base py-2 px-8  xl:px-3 rounded font-medium  appearance-none bg-transparent">
                                    <option value="" selected disabled hidden>Choose month</option>
                                    <option @click="getData" v-for="d in months" :key="d">{{d}} </option>


                                </select>
                        </div>

    <div class="min-h-screen p-5 bg-gray-100 py-6 rounded-lg border-collapse flex flex-col justify-center sm:py-12 w-full h-full bg-no-repeat bg-cover" style="background-image: url(/images/UMP/clock.jpg);">
    <div class="flex max-h-full py-2 sm:max-w-xl sm:mx-auto">
      <div class="flex  max-h-full px-4 py-4 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-80 border border-gray-200" style="backdrop-filter: blur(20px);">
        <div class="max-w-md mx-auto ">

                <div class="grid grid-row-2 -mt-10 grid-flow-col gap-x-2.5 bg-gradient-to-tl from-indigo-500 to-fuchsia-400 text-transparent bg-clip-text ">
                    <div class=" row-span-2 justify-self-end">
                        <img class="h-full w-full" src="https://img.icons8.com/nolan/100/cottage.png"/>
                    </div>
                    <div class=" row-span-1 "> <h1 class="text-4xl  font-oswald font-bold tracking-wide text-left">UOCA </h1></div>
                    <div class=" row-span-1 "><h1 class="text-4xl  font-oswald font-bold tracking-wide text-left">Rental Bills</h1></div>
                </div>


            <div class="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p class="text-sm">Here’s a summary of your {{moment(data.bills_date).format("MMM-YYYY") }}  UOCA rental bill {{ data.bills_id }}:</p>

                <div class="shadow-md rounded my-6">

                    <table class="text-center max-w-full w-full border-2 rounded-lg "> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                    <thead>
                      <tr>
                        <th  colspan="2" class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-r  border-grey-light ">Bills Date <p class="font-extrabold">{{moment(data.bills_date).format("MMM-YYYY") }}  </p></th>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light">Tenant ID<p class="font-extrabold">{{ data.tenant_id }} </p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover:bg-grey-lighter text-sm">
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Outstanding<p class="font-bold text-red-500">RM {{(data.outstanding_bills).toFixed(2)}}</p> </td>
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Bills Status<p class="font-bold ">{{data.bills_status}}</p></td>
                        <td rowspan="2" class="py-4 px-6 border-b border-grey-light border-r ">Total Amount<p class="font-black text-xl text-ump-green">RM {{(data.total_bills).toFixed(2)}}</p>
                            <div v-if="data.payment_status==='Unpaid' && data.bills_status==='Ready'" class="mb-5 ">
                                <center><div  class="mx-auto" ref="paypal"></div></center>
                            </div>
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

                            </td>
                      </tr>
                      <tr class="hover:bg-grey-lighter text-sm">
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Penalty Fees <p class="font-bold text-red-500">RM {{(data.penalty_fees).toFixed(2)}}</p></td>
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Bill Due <p class="font-bold  ">{{moment(data.due_date).format("DD-MMM-YYYY") }} </p></td>


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
  <div v-else>
           <loader object="#dd7755" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
    </div>
    </div>


  </div>
</template>

<script>
//import ReadModal from './Modal_Student.vue';
import moment from "moment";

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

            data: [],
            months: [],
            moment: moment,
            toggle: false,
            bydate: '',
            toggleModal: false,

            product: {
                price: '',
                description: '',
            },
            form:{
                std_id: this.user_id,
                bills_id: '',
                tenant_id: '',
                property_id: '',
                landlord_id: '',
                payment_details: '',
                total_payment: '',
            },
             isReady: false,

        };
    },
    methods: {
        getData(){
            axios.get('/api/get_bills/'+this.user_id+'/'+this.role,{
                params: {
                    date: this.bydate,
                }}).then((response)=>{

                    this.data=response.data;
                    this.product.price= this.data.total_bills;
                    this.form.bills_id= this.data.bills_id;
                    this.form.tenant_id= this.data.tenant_id;
                    this.form.property_id= this.data.property_id;
                    this.form.payment_details= 'UOCA Bills (ID: '+this.data.bills_id+') Payment - Room ID: '+this.data.room_id;
                    this.form.total_payment= this.data.total_bills;
                    this.product.description= 'UOCA Bills (ID: '+this.data.bills_id+') Payment - Room ID: '+this.data.room_id;
                      this.isReady=true;
                    if(this.data.payment_status=='Unpaid' && this.data.bills_status=='Ready'){
                        this.getPayPal();
                    }

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
        payBills(){
            axios.post('/api/pay_bill',
            this.form
            ).then(() =>{
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Payment successful!',
                showConfirmButton: false,
                timer: 1500
                })
                setTimeout(() =>   this.$router.push({ name: 'payment_std' }), 1900);
                }).catch(error);

        },
       setLoaded: function(resp) {
      this.loaded = true;

      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "MYR",
                    value: this.product.price
                  }
                }
              ]
            });
          },
        style: {
                size: 'medium',
                color: 'blue',
                shape: 'pill',
            },
          onApprove: async (data, actions, resp) => {
            this.loadding = true;
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            this.loadding = false;
            this.payBills();
            this.$router.push({ name: "payment_std"});

          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    },
    getPayPal(){
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AQhqPjoZfsUmu5_yLMiug7vrWEBke2_EvnwUaVQRCYgpIxFj4DiWVkpCNPgOlwv3csIYXVFWa_cXEdZI&currency=MYR&disable-funding=credit,card";

        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);


    },




        closeReadModal(){
            this.toggleModal =!  this.toggleModal ;
        },

    },
         mounted: function(){
            this.getData();
            this.getMonths();


    },





};
</script>
