<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="p-6 ml-5">
         <div class="max-w-6xl p-6 mx-auto mt-3  bg-gray-100 rounded-md shadow-xl mb-5" >
               <h2 class=" font-bold text-gray-700 capitalize text-center text-xl">My Bookings</h2>
            <div class="flex items-center justify-center w-full overflow-hidden">
            <div v-if="data.length==0"> You don't having any booking yet.</div>

            <div v-else class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 m-5 mb-10">
                <div  v-for="item in data" :key="item.id" >


                <div class="bg-white rounded-lg shadow-lg h-full overflow-hidden hover:shadow-lg">

                    <img class="h-48 w-full object-cover"  :src="'/images/Properties/'+item.room.photo_room[0].photo_name"/>
                    <div class="m-2 text-justify text-sm">
                        <div class="flex flex-wrap items-center -mt-8 pb-3 ">
                            <img class="block h-8 w-8 rounded-full bg-white mt-1 mr-2 ml-3 border-2 border-white"
                        :src="'/images/Profile/'+item.room.property.land.landlord_pic"
                                alt="Profile">
                            <span class="block text-sm font-bold text-white bg-black bg-opacity-30">{{item.room.property.land.landlord_name}}</span>

                        </div>
                        <div class=" flex justify-between ">
                            <p class="w-1/2 flex justify-start items-center text-base font-bold text-yellow-700">{{item.booking_status}}</p>
                            <p class="w-1/2 flex justify-end text-base font-bold text-yellow-700"> {{ moment(item.booking_date).format("DD-MM-YYYY") }}</p>
                            <!-- <p class="text-right text-base font-bold text-yellow-700">{{item.move_in_date}}</p> -->
                        </div>



                         <router-link :to="{ name: 'view_room_list', params:{id: item.room.id}}" target="_blank"><h2 class=" font-bold mb-5 mt-2 text-lg text-center hover:underline hover:text-blue-500"> {{item.room.listing_name}}</h2>
                        </router-link>
                        <hr class="border-gray-500  mt-5">
                           <h2 class=" font-bold mb-5 mt-2 text-lg text-center">Booking Details</h2>
                          <div  class="mx-5 my-5">
                                <table class=" text-gray-600 w-full">
                                     <tr>
                                        <td class="text-left ">Move-in Date</td>
                                        <td class="text-right">{{ item.move_in_date }}</td>
                                    </tr>
                                     <tr>
                                        <td class="text-left ">Period Tenancy</td>
                                        <td class="text-right">{{ item.period_tenancy }} Months</td>
                                    </tr>

                                    <tr>
                                        <td class="text-left ">Monthly Rental / Room</td>
                                        <td class="text-right">RM {{ item.booking_fees }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Overdue Penalty</td>
                                        <td class="text-right">RM {{ item.room.penalty_fees }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Max Tenant / Room</td>
                                        <td class="text-right">{{ item.room.number_of_tenant }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left ">Utilities</td>
                                        <td class="text-right">Included</td>
                                    </tr>

                                    <tr class="border-yellow-500 font-bold text-green-400 border-t-2 border-b-2  mt-5">
                                        <td class="text-left ">Paid Booking Fees</td>
                                        <td class="text-right">RM {{ item.booking_fees }}</td>
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
                               <div v-if="item.booking_status=='Booked'" class="flex mx-5 my-5">
                                <div class="w-full text-center ">
                                    <button @click="cancelBooking(item.booking_id,item.move_in_date,item)" class="p-3 font-bold rounded-full text-red-900 bg-red-200 hover:bg-red-500 hover:text-white transition duration-150 ease-in-out shadow-xl w-full">Cancel</button>
                                </div>
                            </div>
                            <div v-else class="flex mx-5 my-5">
                                <div class="w-full text-center ">
                                    <button @click="deleteBooking(item.booking_id)" class="p-3 font-bold rounded-full text-black bg-gray-100 hover:bg-gray-500 hover:text-white transition duration-150 ease-in-out shadow-xl w-full">Delete Record</button>
                                </div>
                            </div>


                    </div>

                </div>





                </div>
                </div>
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
            moment: moment,
            toggle: false,
            byID: '',
            bydate: '',
            showSize: 10,
            payments: [],
            toggleModal: false,

                updateDetails:{
                    room_id: '',
                    prop_id: '',
                    std_id: '',

                }
        };
    },
     mounted: function(){
            this.getData();

    },

    methods: {
        getData(){
            axios.get('/api/get_bookings/'+this.user_id+'/'+this.role+'?land=1',{
                params: {
                    byID: this.byID,
                    bydate: this.bydate,
                    showSize: this.showSize
                }}).then((response)=>{
                    this.data=response.data.data;
                    console.warn(this.data.data);
                })
            },
        cancelBooking(id,date,item){
            this.updateDetails.room_id = item.room.id
            this.updateDetails.prop_id = item.property_id
            this.updateDetails.std_id = item.student_id
             Swal.fire({
                title: 'Are you sure?',
                text: "Cancel Book Room for entry at "+date+". This action is unrefundable and irrevertible",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, cancel this booking!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.post('/api/cancel_booking/'+id,this.updateDetails).then((response)=>{
                            this.getData();
                            console.log(response)
                                Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Room booking cancelled!',
                                showConfirmButton: false,
                                timer: 1500
                                })
                        }).catch((errors)=> {
                            console.log(errors)
                        })

                    }
            })

        },
        deleteBooking(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "Delete cancelled booking record",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete this record!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete('/api/delete_booking/'+id).then((response)=>{
                            this.getData();
                            console.log(response)
                                Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Record deleted successfully!',
                                showConfirmButton: false,
                                timer: 1500
                                })
                        }).catch((errors)=> {
                            console.log(errors)
                        })

                    }
            })

        },

        closeReadModal(){
            this.toggleModal =!  this.toggleModal ;
        },

    },





};
</script>
