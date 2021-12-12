<template>
  <div class="w-10/12 ">

    <div class="grid grid-cols-3 gap-5 lex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start">
    <button exact-active-class="exact-active" :class="[top_btn_style]" class="" >
        Gambang
    </button>
    <button exact-active-class="exact-active" class="" :class="[top_btn_style]" >
        Pekan
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
        top_btn_style: 'p-4 rounded bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white :active:bg-pink-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl flex items-center justify-center'
    };
  },
  methods: {},
};
</script>

<style scoped>
.exact-active{
--tw-bg-opacity: 1;
background-color: rgba(236, 72, 153, var(--tw-bg-opacity));
--tw-text-opacity: 1;
color: rgba(255, 255, 255, var(--tw-text-opacity));

}

</style>
