<template>
   <div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-green-200 to-green-500" >
        name: {{ user.name }} <br>
        Email: {{user.email}}

    </div>


</template>
<script>
export default {
    data(){
        return{
          user: null

        }
    },
    methods:{
        saveForm(){
            axios.post('/api/register_student', this.form).then(() =>{
                console.log('saved');

            }).catch((error) =>{
                this.errors = error.response.data.errors
            })
        }
    },
    mounted(){
        axios.get('/api/register_student').then((res)=>{
                this.user = res.data;
        })
    }

}
</script>
