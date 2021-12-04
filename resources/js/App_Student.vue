<template>
<div>
    <nav-std :user_id="user_id" :role="role"> </nav-std >


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

