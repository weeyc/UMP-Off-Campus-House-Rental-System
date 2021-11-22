<template>
<div>
    <nav-staff> </nav-staff>
        <div class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen" >
             {{ user_id }}
            <router-view></router-view>



        </div>
      <foot-staff class="bottom-0 w-full"/>

</div>
</template>
<script>


export default {

    props: {
            user_id: Number,
            role: String
        },
    data(){

        return{
          user: null

        }
    },
     methods:{

    },



}
</script>

