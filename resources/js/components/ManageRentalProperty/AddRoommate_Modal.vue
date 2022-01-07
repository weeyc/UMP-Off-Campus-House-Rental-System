
<template>
   <div class="modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50" >
    <!-- modal -->
    <div  class="bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400 rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3" >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Add Roommate</h3>
        <button class="text-black " @click="closeModal">&cross;</button>
      </div>
      <!-- modal body -->
        <div class="p-3">
                <div class="flex justify-center bg-white rounded-xl border-2 overflow-hidden">
                <input type="Number" min="1" required placeholder="Search by student id"  v-model="id" class="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2 px-3">
                <button @click.prevent="getData">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto m-2" style="color: blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                 </div>
        <div v-if="mate!=null" class="max-w-3xl w-full mx-auto z-10">
		<div class="flex flex-col">
			<div class="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
				<div class="flex-none sm:flex">
					<div class=" relative h-28 w-32   sm:mb-0">
						<img :src="'/images/Profile/'+mate.pic" alt="Avatar" class=" w-32 h-28 object-cover rounded-2xl">
					</div>
					<div class="flex-auto sm:ml-5 justify-evenly">
						<div class="flex items-center justify-between sm:mt-2">
							<div class="flex items-center">
								<div class="flex flex-col">
									<div class="w-full flex-none text-lg text-gray-800 font-bold leading-none">{{mate.name}}</div>
									<div class="flex-auto text-gray-500 my-1">
										<span class="mr-3 "> Student</span><span class="mr-3 border-r border-gray-200  max-h-0"></span><span>ID: {{mate.id}}</span>
									</div>
								</div>
							</div>
						</div>

							<div class="flex pt-2  text-sm text-gray-500">
								<div class="flex-1 inline-flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
										fill="currentColor">
										<path
											d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
										</path>
									</svg>
									<p class=""> {{mate.gender}}</p>
								</div>
								<div class="flex-1 inline-flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
										fill="currentColor">
										<path fill-rule="evenodd"
											d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
											clip-rule="evenodd"></path>
									</svg>
									<p class="">{{mate.phone_no}}</p>
								</div>
								<button  @click="addMate(mate.id, mate.name)" class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg
                                ont-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">ADD</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div v-else-if="mate==undefined && noresult==true">
            <div class="w-full text-white bg-blue-500 mt-5 mb-3">
                <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                    <div class="flex">
                        <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
                        </svg>

                        <p class="mx-3">No Result Found</p>
                    </div>
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
        role: Number,
        prop_id: Number,
        former: Object,
    },
    data() {
        return {
            errors: new Errors(),
            modalBackground: '',

                id: '',

            mate: null,
            noresult: false,


        }
    },
    methods: {
        getData(){
        axios.get('/api/get_mate/'+this.id).then((response)=>{
            this.mate=response.data.data[0];
            if(this.mate==null || this.mate==undefined || this.mate.length==0){
                 this.noresult = true;
            }else{
                 this.noresult = false;
            }

            console.warn(this.mate.data);

        })

    },
        addMate(id, name){
          Swal.fire({
                title: 'Are you sure?',
                text: "Send a roommate request to: " +name,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, send request!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.post('/api/send_requestRoommate/'+id,this.former).then((response)=>{
                            this.closeModal();
                            this.$emit("refreshData");
                            console.log(response)
                                Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Roommate request sent!',
                                showConfirmButton: false,
                                timer: 1500
                                })
                        }).catch((errors)=> {
                            console.log(errors)
                        })

                    }
            })

    },
         closeModal(){
             this.$emit("closeModal");
         },
        getRole(){
            if(this.role == 1){
                this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400'
            }else if (this.role == 2){
                this.modalBackground = 'bg-gradient-to-br from-sky-400 to-cyan-300'
            }else{
                this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400'
            }
          }
    },
    mounted: function(){
        this.getRole();
        this.getData();
    },
};

</script>
