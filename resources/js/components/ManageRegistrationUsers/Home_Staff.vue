<template>
   <div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-red-200 to-red-500" >
      <p class="text-lg">This is Home Staff Vue </p>
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
