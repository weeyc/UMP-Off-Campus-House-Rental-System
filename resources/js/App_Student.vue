<template>
   <div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-green-200 to-green-500" >
      <p class="text-lg">Home Student </p> <br>
        <p class="text-lg">ID: {{ user_id  }}</p>
            <p class="text-lg">Role: {{ role  }}</p>
         <button @click.prevent="logout">Logout</button>
    </div>


</template>
<script>
export default {
    props: {
        user_id: String,
        role: String
    },
    data(){
        return{
          user: null

        }
    },

     methods:{
           logout(){

                 window.location.href = '/'

        }
    },


}
</script>
