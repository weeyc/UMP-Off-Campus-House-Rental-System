
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div :class="[modalBackground]" class="rounded max-h-full overflow-y-auto shadow-lg max-w-5xl p-6 mx-auto min-w-full bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Booking Detail</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3 ">
            <!-- <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Property Details</h1> -->
            <section id="bookingDetail" v-show="activePhase == 1" class=" max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md">

                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Enter details</h2>
                    <h2 class=" font-bold text-gray-700 capitalize text-center text-base ">-Booking Details-</h2>
                <div>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700">Move-In Date</label>
                            <input type="date" id='myDate' v-model="form.move_in_date" name="date" min="2015-10-28" class="cursor-pointer block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>

                         <div>
                            <label class="text-gray-700" >Tenancy Period</label>
                            <select  v-model="form.tenancy_period" class="block w-full px-4 py-2 cursor-pointer mt-2 text-gray-700 bg-white border border-black rounded-md  focus:border-blue-500 focus:outline-none focus:ring" name="campus" required>
                                <option class="text-gray-700 text-lg"  value="3"> 3 Months</option>
                                <option class="text-gray-700 text-lg"  value="4"> 4 Months</option>
                                <option class="text-gray-700 text-lg"  value="5"> 5 Months</option>
                                <option class="text-gray-700 text-lg" selected value="6"> 6 Months</option>
                                <option class="text-gray-700 text-lg"  value="7"> 7 Months</option>
                                <option class="text-gray-700 text-lg"  value="8"> 8 Months</option>
                                <option class="text-gray-700 text-lg"  value="9"> 9 Months</option>
                                <option class="text-gray-700 text-lg"  value="10"> 10 Months</option>
                                <option class="text-gray-700 text-lg"  value="11"> 11 Months</option>
                                <option class="text-gray-700 text-lg"  value="12"> 12 Months</option>
                            </select>
                        </div>

                        <div>
                            <label class="text-gray-700" >Student Name</label>
                                 <input type="text" placeholder="Alif Iskandar" v-model="form.name" class="cursor-pointer block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md focus:border-blue-500 focus:outline-none focus:ring"  required>
                        </div>
                      <div>
                            <label class="text-gray-700" >Phone Number</label>
                            <input  type="text"  v-model="form.phone_no" placeholder="0109181410" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>
                          <div>
                            <label class="text-gray-700" >Booking Key (obtain from landlord)</label>
                            <input  type="text"  v-model="form.b_key" placeholder="eg. 242112" minlength="6" maxlength="6" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring" required>
                        </div>


                    </div>

                    <div class="flex justify-end mt-6">
                        <button @click.prevent="checkKey" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Next</button>
                    </div>



                </div>
            </section>


            <div v-if="activePhase == 2"  class="mt-10 max-w-4xl p-6 mx-auto bg-transparent rounded-md shadow-inner">
                <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">Booking Summary</h2>
                <h2 class=" font-bold text-gray-700 capitalize text-center text-base mb-5">-Room Details-</h2>
                <div>
                        <div  class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lg">

                    <img class="h-48 w-full object-cover"  :src="'/images/Properties/'+roomDetails.photo_room[0].photo_name"
                       />


                    <div class="m-2 text-justify text-sm">
                        <div class="flex flex-wrap items-center -mt-8 pb-3 ">
                            <img class="block h-8 w-8 rounded-full bg-white mt-1 mr-2 ml-3 border-2 border-white"
                        :src="'/images/Profile/'+roomDetails.property.land.landlord_pic"
                                alt="Profile">
                            <span class="block text-sm font-bold text-white bg-black bg-opacity-30">{{roomDetails.property.land.landlord_name}}</span>

                        </div>
                        <p class="text-right text-base font-bold text-yellow-700">RM{{roomDetails.monthly_rent}}/Months</p>
                         <router-link :to="{ name: 'view_room_list', params:{id: roomDetails.id}}" target="_blank"><h2 class=" font-bold mb-5 mt-2 text-lg text-center hover:underline hover:text-blue-500"> {{roomDetails.listing_name}}</h2>
                        </router-link>
                        <div class="text-base text-left text-gray-600 mb-5">
                            <p class="mt-2 px-3">{{ roomDetails.property.name }} | {{ roomDetails.campus }}</p>
                            <div class="flex mt-2 px-3">
                                <p class="mt-2 ">{{roomDetails.room_type}} | {{roomDetails.property.gender_preferences}} </p>
                            </div>
                            <div class="flex mt-2  px-3">
                                <p class="mt-2">{{roomDetails.property.furnishing}} | {{roomDetails.room_furnishing}}</p>
                            </div>
                        </div>
                        <hr class="border-gray-500  mt-5">
                           <h2 class=" font-bold mb-5 mt-2 text-lg text-center">Booking Summary</h2>


                          <div  class="mx-5 my-5">
                                <table class=" text-gray-600 w-full">
                                     <tr>
                                        <td class="text-left ">Tenant Name</td>
                                        <td class="text-right">{{ form.name }}</td>
                                    </tr>
                                     <tr>
                                        <td class="text-left ">Move-in Date</td>
                                        <td class="text-right">{{ form.move_in_date }}</td>
                                    </tr>
                                     <tr>
                                        <td class="text-left ">Period Tenancy</td>
                                        <td class="text-right">{{ form.tenancy_period }} Months</td>
                                    </tr>

                                    <tr>
                                        <td class="text-left ">Monthly Rental / Room</td>
                                        <td class="text-right">RM {{ roomDetails.monthly_rent }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Overdue Penalty</td>
                                        <td class="text-right">RM {{ roomDetails.penalty_fees }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Max Tenant / Room</td>
                                        <td class="text-right">{{ roomDetails.number_of_tenant }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Utilities</td>
                                        <td class="text-right">Included</td>
                                    </tr>

                                    <tr class="border-yellow-500 font-bold text-green-400 border-t-2 border-b-2  mt-5">
                                        <td class="text-left ">Booking Fees</td>
                                        <td class="text-right">RM {{ roomDetails.booking_fees }}</td>
                                    </tr>
                                </table>
                               <div class="border-2 border-blue-500 p-2 mt-5 text-gray-500">
                                <div class="mt-2">
                                    The booking fees counted as 1st month of rental
                                </div>
                                <div class="mt-2">
                                    Monthly rental bills will be issues starting on 2nd months of rental
                                </div>

                            </div>

                            </div>
                                <div class="mb-5">
                                    <center><div class="mx-auto w-50" ref="paypal"></div></center>
                                </div>


                    </div>

                </div>


                    <div class="flex justify-end mt-6">
                        <button @click.prevent="goToNext(1)" class="px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>

                    </div>


                </div>

            </div>



            </div>
                <div class="flex justify-end items-center w-100 border-t p-3">
                    <button @click="closeModal" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
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
        roomDetails: Object,
    },
    components: {


    },
    data() {
        return {
            errors: new Errors(),
            //modalBackground: 'bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400',
            isVisible: false,
            modalBackground: '',
            activePhase: 1,
            replace: false,
            student:[],


            product: {
                price: this.roomDetails.booking_fees,
                description: 'UOCA Booking Payment - Room ID: '+this.roomDetails.id
            },

            form: {
                move_in_date: '',
                tenancy_period:'',
                name: '',
                phone_no: '',
                std_id: this.user_id,
                b_key: '',
                landlord_id: this.roomDetails.landlord_id,
                property_id: this.roomDetails.property_id,
                room_id: this.roomDetails.id,
                booking_fees: this.roomDetails.booking_fees,
                details: 'UOCA Booking Payment - Room ID: '+this.roomDetails.id
            },

        }
    },

    methods: {
        goToNext(pg){
            this.activePhase = pg;
        },
        getStudent(){
            axios.get('/api/get_profile/'+this.user_id+'/'+1).then((response)=>{
                    this.student=response.data.data[0];
                    this.form.name=this.student.name;
                    this.form.phone_no=this.student.phone_no;
                    console.warn(this.userProfile.data);
                }).catch((errors)=> {console.log(errors)})
            },
        submitBooking(){
            axios.post('/api/create_booking',
            this.form
            ).then(() =>{
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Payment successful!',
                showConfirmButton: false,
                timer: 1500
                })
                this.closeModal();
                setTimeout(() =>  window.location.href = "/student/browse-rooms", 1900);

                }).catch(error =>this.errors.record(error.response.data));

        },
        closeModal(){
             this.$emit("closeModal");
        },
        checkKey(){
            if(this.form.b_key === this.roomDetails.booking_key){
                this.goToNext(2);
                this.getPayPal();

            }else{
                this.$toaster.info('Booking key not matched!')
            }

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
            this.submitBooking();
            //this.$router.push({ name: "Dashboard"});

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

    },
    watch:{
        activePhase(newValue, oldValue){
            if(this.activePhase==2){

            }
        }
    },
    mounted: function(){
        this.getStudent();
        document.getElementById("myDate").min = new Date().getFullYear() + "-" +  parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate()

      ;

    },

};

</script>
