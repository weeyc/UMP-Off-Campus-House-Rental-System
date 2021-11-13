<template>
   <div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-red-200 to-red-500" >
   <p class="text-lg">Staff Student </p> <br>
      <p class="text-lg">Staff ID: {{ user_id  }} </p>
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
