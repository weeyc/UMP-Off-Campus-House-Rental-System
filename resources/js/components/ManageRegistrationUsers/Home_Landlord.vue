<template>
   <div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-blue-200 to-blue-500" >
      <p class="text-lg">This is Home Landlord Vue </p>
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
    props: ['ID'],
     methods:{
        logout(){
            axios.post('/api/logout').then(()=>{
                 window.location.href = '/'

            })
        }
    },


}
</script>
