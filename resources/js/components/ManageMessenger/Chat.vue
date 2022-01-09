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
                        <input aria-placeholder="Search contact" placeholder="Search contact"
                        class="py-2 pl-10 block w-full rounded bg-gray-100 outline-none focus:text-gray-700" type="search" name="search" v-model="filterName"  required autocomplete="search" />
                    </div>
                </div>

                <ul class="overflow-auto" style="height: 400px;">
                    <h2 class="ml-2 mb-2 text-gray-600 text-lg my-2">Chats</h2>
                    <li>
                            <!-- <div>{{ getContact(list.user1_id ,list.user1_role, list.user2_id, list.user2_role) }}</div> -->
                        <div v-if="filterContact.length>0">
                        <div v-for="(list,index) in filterContact" :key="index">
                        <a class="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center justify-start text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">

                                    <div  v-if="list.user1_role==role && list.user1_id==user_id" @click="selectConversations(list, list.user2_id,list.user2_name,list.user2_photo,list.user2_role);  getMessages(list.id)" class="w-full" >

                                        <img class="h-10 w-10 ml-2 rounded-full object-cover" :src="'/images/Profile/'+list.user2_photo" alt="Avatar" />
                                        <div class="w-full pb-2">
                                            <div class="flex justify-between">
                                                <span class="msg block ml-2 font-semibold text-base text-gray-600 ">{{list.user2_name}}</span>
                                                <span class="block ml-24 text-sm text-gray-600">{{moment(list.get_msg_relation[0].created_at  ).format("h:mm a")}}</span>

                                            </div>
                                            <div id="msg" class="flex justify-between">
                                                <span class="msg block ml-2 text-sm text-gray-600">{{list.get_msg_relation[0].msg}}</span>
                                                <span  class="badge mb-3 bg-red-800 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm mr-1">9</span>
                                            </div>
                                        </div>
                                    </div>

                                         <div v-if="list.user2_role==role && list.user2_id==user_id" @click="selectConversations(list, list.user1_id,list.user1_name,list.user1_photo,list.user1_role);  getMessages(list.id)" >
                                         <img class="h-10 w-10 ml-2 rounded-full object-cover" :src="'/images/Profile/'+list.user1_photo" alt="username" />
                                        <div class="w-full pb-2">
                                            <div class="flex justify-between">
                                                <span class="msg block ml-2 font-semibold text-base text-gray-600 ">{{list.user1_name}}</span>
                                                <span class="block  text-sm text-gray-600 ml-24">{{ moment(list.get_msg_relation[0].created_at  ).format("h:mm a") }}</span>
                                            </div>
                                            <div id="msg" class="flex justify-between">
                                                <span class="msg block ml-2 text-sm text-gray-600">{{list.get_msg_relation[0].msg}}</span>
                                                <span  class="badge mb-3 bg-red-800 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm mr-1">9</span>
                                            </div>
                                        </div>
                                        </div>
                        </a>
                        </div>
                        </div>
                        <div v-else class="p-2">No conversations </div>
                    </li>
                </ul>
            </div>
            <div class="col-span-2 bg-white">
                <div id="Profile" v-if=" checkContact==false && filterContact.length>0" class="w-full">
                    <div  class="flex items-center border-b border-gray-300 pl-3 py-3">
                        <img  @click="viewProfile(chat.u_id, chat.u_role)" class="h-10 w-10 rounded-full object-cover cursor-pointer" :src="'/images/Profile/'+chat.avatar" alt="username" />
                        <span  @click="viewProfile(chat.u_id, chat.u_role)" class="cursor-pointer block ml-2 font-bold text-base text-gray-600 hover:underline">{{ chat.name }} </span>

                          <button class="p-2 ml-auto bg-pink-light">delete</button>
                    </div>

                    <div id="chat" class="w-full overflow-y-auto p-10 relative" style="height: 400px;" ref="feed">
                        <ul>

                            <li v-for="msg in messages" :key="msg.id" class="clearfix2">
                                <div v-if="msg.receiver_role==role && msg.receiver_id==user_id">
                                      <div  class="w-full flex justify-start">
                                        <div class="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative" style="max-width: 300px;">
                                            <span class="block">{{msg.msg}}</span>
                                            <span class="block text-xs text-right">{{ moment(msg.created_at ).format("h:mm a") }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>

                                       <div  class="w-full flex justify-end" >
                                        <div class="bg-yellow-200 rounded px-5 py-2 my-2 text-gray-700 relative" style="max-width: 300px;">
                                            <span class="block">{{msg.msg}}</span>
                                            <span class="block text-xs text-left">{{ moment(msg.created_at ).format("h:mm a") }}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="w-full flex justify-end" >
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
                                </div> -->
                            </li>
                        </ul>
                    </div>
                    <div class="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300">
                        <input aria-placeholder="Type a message" placeholder="Type a message"
                            class="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700" type="text" name="message" v-model="formSend.put_msg" required/>

                        <button v-if="formSend.put_msg.length!=0" @click="send" class="outline-none focus:outline-none" type="submit">
                            <svg class="text-gray-400 h-7 w-7 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div v-if="checkContact==true"   class="w-full">
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
                        <input aria-placeholder="Type a message" placeholder="Type a message"
                            class="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700" type="text" name="message" v-model="form.enter_msg" required/>

                        <button v-if="form.enter_msg.length!=0" @click="sendNew" class="outline-none focus:outline-none" type="sendNew">
                            <svg class="text-gray-400 h-7 w-7 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </div>
                 <div v-else-if="checkContact==false && filterContact.length==0"   class="w-full">
                    <div class="flex items-center border-b border-gray-300 pl-3 py-3">

                        <span class="block ml-2 font-bold text-base text-gray-600"> </span>
                    </div>
                    <div id="chat" class="w-full overflow-y-auto p-10 relative" style="height: 400px;" ref="feed">
                        <ul>
                            <li class="clearfix2">
                            </li>
                        </ul>
                    </div>
                    <div class="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300">

                    </div>
                </div>




            </div>
        </div>
    </div>


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

            filterName: '',
            checkContact: false,
            convertedRole:'',


            chat: {
                id:'',
                avatar: '',
                name:'',
                u_id:'',
                u_role: '',
            },


            form: {
                enter_msg: '',
                receiver_id: this.id,
                receiver_role: '',
            },

            formSend: {
                id: '',
                put_msg: '',
                receiver_id: '',
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
            this.formSend
            ).then(() =>{

                this.formSend.put_msg='';
                this.getConverstations();
                 setTimeout(() => {
                    this.getFirstConversation();
                }, 1000);
                this.scrollToBottom();
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
                this.form.enter_msg='';
                this.checkContact= false;
                this.getConverstations();
                setTimeout(() => {
                    this.getFirstConversation();
                }, 1000);
                // if(this.conversations.length>0){
                //     this.getMessages(this.chat.id);
                // }

                 this.scrollToBottom();
        }).catch(error);

        },
        scrollToBottom() {
            setTimeout(() => {
                this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight;
            }, 50);
        },
        viewProfile(id,role) {

            if(this.role==1){
                // let routeData = this.$router.resolve({ name: 'std_profile_view', params: { role: role, id:id }});
                // window.open(routeData.href, '_blank');
                 this.$router.push({ name: 'std_profile_view', params: { role: role, id:id } })

            }else if (this.role==2){
                let routeData = this.$router.resolve({ name: 'land_profile_view', params: { role: role, id:id }});
                window.open(routeData.href, '_blank');

            }else if (this.role==3){
                let routeData = this.$router.resolve({ name: 'profile_view', params: { role: role, id:id }});
                window.open(routeData.href, '_blank');

            }

        },

        getMessages(id){
            axios.get('/api/get_messages/'+id).then((response)=>{
                    this.messages=response.data

                    console.warn(this.messages.data);
                })

        },
        getFirstConversation(){
                if(this.conversations[0].user1_role==this.role && this.conversations[0].user1_id==this.user_id){
                this.chat.id = this.conversations[0].id;
                this.chat.avatar = this.conversations[0].user2_photo;
                this.chat.name = this.conversations[0].user2_name;
                this.chat.u_id = this.conversations[0].user2_id;
                this.chat.u_role = this.conversations[0].user2_role;
                this.formSend.id = this.conversations[0].id;
                this.formSend.receiver_id = this.conversations[0].user2_id;
                this.formSend.receiver_role = this.conversations[0].user2_role;


                this.getMessages(this.conversations[0].id);
            }else if (this.conversations[0].user2_role==this.role && this.conversations[0].user2_id==this.user_id){
                this.chat.id = this.conversations[0].id;
                this.chat.avatar = this.conversations[0].user1_photo;
                this.chat.name = this.conversations[0].user1_name;
                this.chat.u_id = this.conversations[0].user1_id;
                this.chat.u_role = this.conversations[0].user1_role;
                this.formSend.receiver_id = this.conversations[0].user1_id;
                this.formSend.receiver_role = this.conversations[0].user1_role;
                this.getMessages(this.conversations[0].id);
            }
        },
        selectConversations(list, u_id,u_name,u_photo,u_role){
                this.chat.id = list.id;
                this.chat.u_id = u_id;
                this.chat.avatar = u_photo
                this.chat.name = u_name
                this.chat.u_role = u_role


                this.formSend.receiver_id= u_id;
                this.formSend.id= list.id;
                this.formSend.receiver_role= u_role;
                this.getConverstations();
                this.checkContact=false;
                this.scrollToBottom();
        },
        getRole(){
            if(this.role == 1){
                this.margin = 'mt-5 mb-5'
            }else if (this.role == 2){
                this.margin = 'mt-5 mb-5'
            }else{

            }
          },
        convertRole(){
            if(this.user_role == 'student'){
                this.convertedRole = 1
            }else if (this.user_role == 'landlord'){
                this.convertedRole = 2
            }else if(this.user_role == 'staff'){
                 this.convertedRole = 3
            }
          },

        checkNewContact(){
            if(this.conversations.some(data => data.user1_role === this.convertedRole && data.user1_id===this.id)){
                    this.checkContact=false
            }else if (this.conversations.some(data => data.user2_role === this.convertedRole && data.user2_id===this.id)){
                    this.checkContact=false;
            }else {

                     this.checkContact=true;


            }



        },

    },
     watch: {
            messages(messages) {
                this.scrollToBottom();
            }
        },
     computed:{
            filterContact: function(){
            return this.conversations.filter((user)=>{
               //return user.gender.match(this.filterGender);
               if(user.user1_role==this.role && user.user1_id==this.user_id){
                   if(user.user2_name.toLowerCase().match(this.filterName.toLowerCase())){
                       return user;
                   }

               }else if (user.user2_role==this.role && user.user2_id==this.user_id){
                    if(user.user1_name.toLowerCase().match(this.filterName.toLowerCase())){
                       return user;
                   }


               }
            });
        },

    },

      mounted: function(){
           // this.getProperty();
        this.getRole();
        this.getConverstations();
        this.convertRole();
        if(this.conversations.length>0){
            setTimeout(() => {
                            this.getFirstConversation();
                        }, 2000);
            }

        if(this.user_role!=undefined){
            setTimeout(() => {
                 this.checkNewContact();
            }, 2000);
        }
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
