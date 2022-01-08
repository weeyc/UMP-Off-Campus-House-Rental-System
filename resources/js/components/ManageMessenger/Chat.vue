<template>
<div >
      <div :class="[margin]" class="max-w-5xl p-6 mx-auto bg-gray-100 rounded-md shadow-inner " >
          <h2 class=" font-bold text-gray-700 capitalize text-center text-xl mb-2 -mt-2">My Chat Messenger</h2>
        <!-- component -->
<!-- This is an example component -->
<div class="w-full">
    <div class="grid grid-cols-3 min-w-full border rounded">
            <div class="col-span-1 bg-white border-r border-gray-300">
                <div class="my-3 mx-3 ">
                    <div class="relative text-gray-600 focus-within:text-gray-400">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-gray-500"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </span>
                        <input aria-placeholder="Busca tus amigos o contacta nuevos" placeholder="Busca tus amigos"
                        class="py-2 pl-10 block w-full rounded bg-gray-100 outline-none focus:text-gray-700" type="search" name="search" required autocomplete="search" />
                    </div>
                </div>

                <ul class="overflow-auto" style="height: 400px;">
                    <h2 class="ml-2 mb-2 text-gray-600 text-lg my-2">Chats</h2>
                    <li>
                        <div v-for="list in conversations" :key="list.id">
                             {{ getContact(list.user1_id ,list.user1_role, list.user2_id, list.user2_role) }}
                        </div>
                        <a  class="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">


                                                           <!-- <img class="h-10 w-10 rounded-full object-cover" :src="'/images/Profile/'+contacts[index].pic" alt="username" /> -->
                                <img class="h-10 w-10 rounded-full object-cover" alt="username" />
                                <div class="w-full pb-2">
                                    <div class="flex justify-between">
                                        <span class="msg block ml-2 font-semibold text-base text-gray-600 "></span>
                                        <span class="block ml-2 text-sm text-gray-600">5 minutes</span>

                                    </div>
                                    <div id="msg" class="flex justify-between">
                                        <span class="msg block ml-2 text-sm text-gray-600">Hello world!! hello my name hahahsda hello bodo mung beodo is blalblalallskdakskd askdk asdk asdkaskda sdaks dksakd akskd ask</span>
                                        <span  class="badge mb-3 bg-red-800 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm mr-1">9</span>
                                    </div>


                                </div>

                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-span-2 bg-white">
                <div id="Profile" v-if="user_role==undefined" class="w-full">
                    <div  class="flex items-center border-b border-gray-300 pl-3 py-3">

                        <img class="h-10 w-10 rounded-full object-cover"
                        src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="username" />
                        <span class="block ml-2 font-bold text-base text-gray-600">Eduard</span>
                        <!-- <span class="connected text-green-500 ml-2" >
                            <svg width="6" height="6">
                                <circle cx="3" cy="3" r="3" fill="currentColor"></circle>
                            </svg>
                        </span> -->
                    </div>
                    <div id="chat" class="w-full overflow-y-auto p-10 relative" style="height: 400px;" ref="feed">
                        <ul>
                            <li class="clearfix2">
                                <div class="w-full flex justify-start">
                                    <div class="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative" style="max-width: 300px;">
                                        <span class="block">Hello bro</span>
                                        <span class="block text-xs text-right">10:30pm</span>
                                    </div>
                                </div>
                                <div class="w-full flex justify-end" >
                                    <div class="bg-yellow-200 rounded px-5 py-2 my-2 text-gray-700 relative" style="max-width: 300px;">
                                        <span class="block">Hello</span>
                                        <span class="block text-xs text-left">10:32pm</span>
                                    </div>
                                </div>
                                <div class="w-full flex justify-end" >
                                    <div class="bg-blue-200 rounded px-5 py-2 my-2 text-gray-700 relative" style="max-width: 300px;">
                                         <div id="room" class="relative m-3 flex flex-wrap mx-auto justify-center">
                                            <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                                <div class="overflow-x-hidden rounded-2xl relative">
                                                    <img class="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg">
                                                </div>
                                                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                                                    <div>
                                                    <p class="text-lg font-semibold text-gray-900 mb-0">Master Bed</p>
                                                    <p class="text-md text-gray-800 mt-0">RM130 / Months</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                        <div class="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300">
                        <button class="outline-none focus:outline-none">
                            <svg class="text-gray-400 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button class="outline-none focus:outline-none ml-1">
                            <svg class="text-gray-400 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                        </button>

                        <input aria-placeholder="Type a message" placeholder="Type a message"
                            class="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700" type="text" name="message" v-model="form.enter_msg" required/>

                        <button class="outline-none focus:outline-none" type="submit">
                            <svg class="text-gray-400 h-7 w-7 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </div>


                <div v-else   class="w-full">
                    <div class="flex items-center border-b border-gray-300 pl-3 py-3">
                        <img class="h-10 w-10 rounded-full object-cover"
                        :src="'/images/Profile/'+photo"
                        alt="username" />
                        <span class="block ml-2 font-bold text-base text-gray-600"> {{ name }}</span>
                    </div>
                    <div id="chat" class="w-full overflow-y-auto p-10 relative" style="height: 400px;" ref="feed">
                        <ul>
                            <li class="clearfix2">


                            </li>
                        </ul>
                    </div>
                        <div class="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300">
                        <button class="outline-none focus:outline-none">
                            <svg class="text-gray-400 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button class="outline-none focus:outline-none ml-1">
                            <svg class="text-gray-400 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                        </button>

                        <input aria-placeholder="Type a message" placeholder="Type a message"
                            class="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700" type="text" name="message" v-model="form.enter_msg" required/>

                        <button @click="sendNew" class="outline-none focus:outline-none" type="sendNew">
                            <svg class="text-gray-400 h-7 w-7 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </div>




            </div>
        </div>
    </div>
{{ haha}}

    </div>


</div>
</template>
<script>

import moment from "moment";

export default {
    components: {

    },
    props: {
        user_id: Number,
        role: Number,

        user_role: String,
        id: Number,
        name: String,
        photo: String,
    },

    data(){
        return{
            moment: moment,
            conversations:[],
            messages:[],
            enter_msg: '',
            margin: '',
            name:'',
            photo: '',
            contacts: [],
            contak: {},




            form: {
                enter_msg: '',
                receiver_id: this.id,
                receiver_role: '',
            }


        }
    },
     methods:{
        getConverstations(){
            axios.get('/api/getConverstations/'+this.user_id+'/'+this.role).then((response)=>{
                this.conversations=response.data
                console.warn(this.conversations.data);
                })

            },
        send(){
            axios.post('/api/send_msg/'+this.user_id+'/'+this.role,
            this.form
            ).then(() =>{
                 this.$toaster.success('Sent');
        }).catch(error =>this.errors.record(error.response.data));

        },
        sendNew(){
              if(this.user_role=="student"){
                this.form.receiver_role =1
            }else if (this.user_role=="landlord"){
                 this.form.receiver_role =2
            }else if (this.user_role=="staff"){
                 this.form.receiver_role =3
            }
            axios.post('/api/send_msg_new/'+this.user_id+'/'+this.role,
            this.form
            ).then(() =>{
                 this.$toaster.success('Sent');
        }).catch(error =>this.errors.record(error.response.data));

        },
        scrollToBottom() {
            setTimeout(() => {
                this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
            }, 50);
        },
        getContact(id1,role1, id2, role2){
            var selected_role;
            var selected_id;
            if(role1==this.role){
                if(id1==this.user_id){
                    selected_role = role2;
                    selected_id =id2;
                }else if(id2==this.user_id){
                    selected_role = role2;
                    selected_id =id1;
                }
            }else if (role2==this.role){
                 if(id1==this.user_id){
                     selected_role = role1;
                    selected_id =id2;
                }else if(id2==this.user_id){
                    selected_role = role1;
                    selected_id =id1;
                }
            }

            axios.get('/api/getContact/'+selected_id+'/'+selected_role).then((response)=>{
                this.contak=response.data.data
                let clone = (JSON.parse(JSON.stringify(this.contak)));

                this.contacts.push( clone );
                this.contak = [],

            console.warn(this.contacts);

            })
        },
        getRole(){
            if(this.role == 1){
                this.margin = 'mt-5 mb-5'
            }else if (this.role == 2){
                this.margin = 'mt-5 mb-5'
            }else{

            }
          },

    },

      mounted: function(){
           // this.getProperty();
           this.getRole();
           this.getConverstations();
    },



}
</script>
<style scoped>
.msg {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1; /* number of lines to show */
           line-clamp: 1;
   -webkit-box-orient: vertical;
}
</style>
