<template>
<div>

  <!-- Room Result -->


{{ room_id }}




</div>
</template>
<script>


export default {

    props: {
        user_id: Number,
        role: Number,
    },
    data(){

        return{
            lists: [],
            top_btn_style: 'p-3 rounded bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white :active:bg-yellow-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl',
            room_id: this.$route.params.id

        }
    },
     methods:{
        getList(){
            axios.get('/api/get_rentalRoom/'+this.user_id+'/'+this.role+'?land=1', {
                params: {
                    location: this.location,
                }
                }).then((response)=>{
                this.lists=response.data.data;
                console.warn(this.lists.data);
            })

        },

    },
    watch:{
        $route() {

        },
    },
       mounted: function(){
        this.getList();

    },



}
</script>

