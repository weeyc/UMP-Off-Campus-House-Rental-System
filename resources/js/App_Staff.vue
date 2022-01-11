<template>
<div>
    <nav-staff :user_id="user_id" :role="role"> </nav-staff>
        <div class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen" >

            <router-view :user_id="user_id" :role="role" ></router-view>



        </div>
      <foot-staff class="bottom-0 w-full"/>

</div>
</template>
<script>


export default {

    props: {
            role: Number,
            user_id: Number,

        },
    data(){

        return{


        }
    },
     methods:{

    },



}
</script>

