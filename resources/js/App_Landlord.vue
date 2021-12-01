<template>
<div>

    <nav-land :user_id="user_id" :role="role"> </nav-land>





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

