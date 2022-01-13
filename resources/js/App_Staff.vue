<template>
<div>
    <nav-staff :user_id="user_id" :role="role"> </nav-staff>
        <div class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen" >
             <div v-if="isReady==true">
                         <router-view :user_id="user_id" :role="role" ></router-view>
                      <!-- loading -->
                    </div>
                    <div v-else>
                         <loader object="#dc4ae8" color1="#e3851c" color2="#e82dda" size="8" speed="1.3" bg="#1e2337" objectbg="#ff2d2d" opacity="90" disableScrolling="true" name="dots"></loader>
                    </div>
                <!-- loading -->

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
            isReady: false,

        }
    },
     methods:{
        routeLoaded() {
           //Execute this when router-view is loaded
            this.isReady=true;
        },
    },  mounted:  function(){
          this.$router.onReady(() => this.routeLoaded());

    },



}
</script>

