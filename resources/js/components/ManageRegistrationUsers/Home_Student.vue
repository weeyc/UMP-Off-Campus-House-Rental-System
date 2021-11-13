<template>
   <div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-green-200 to-green-500" >
      <p class="text-lg">Home Student </p> <br>
      <p class="text-lg">Student ID: {{ user_id  }} </p>
         <button @click.prevent="logout">Logout</button>
    </div>


</template>
<script>
export default {
    data(){
        return{
          user: null

        }
    },
    props: ['user_id'],
     methods:{
        logout(){
            axios.post('/api/logout').then(()=>{
                 window.location.href = '/'

            })
        }
    },


}
</script>
