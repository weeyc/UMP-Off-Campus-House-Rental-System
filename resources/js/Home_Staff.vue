<template>
<div>
    <nav-staff v-cloak> </nav-staff>
    <div class="flex items-center justify-center h-screen overflow-hidden" style="background-image: url(/images/Background/CottonCandy.jpg);">


    </div>
    <foot-staff></foot-staff>

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

    },



}
</script>

