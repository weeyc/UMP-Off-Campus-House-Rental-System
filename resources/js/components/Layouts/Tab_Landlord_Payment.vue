<template>
 <div>
  <div class="w-10/12 mt-3 ml-5 flex flex-col ">


    <div class="flex">
        <router-link  :to="{name: 'payment_land'}"
            exact-active-class="exact-active" class="flex items-center h-12 px-2 py-2 text-center text-gray-700  bg-transparent border-b border-black rounded-t-md sm:px-4  -px-1 whitespace-nowrap focus:outline-none hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
            <span class="mx-1 text-sm sm:text-base">
                Payments
            </span>
        </router-link >

         <router-link  :to="{name: 'land_booking'}"
            exact-active-class="exact-active" class="flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-black rounded-t-md sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span class="mx-1 text-sm sm:text-base">
                Bookings
            </span>
        </router-link >
           <router-link  :to="{name: 'land_bills'}"
            exact-active-class="exact-active"  active-class="active" class="flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-black rounded-t-md sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span class="mx-1 text-sm sm:text-base">
                Bills
            </span>
        </router-link >

    </div>
     </div>


    <div class="">
            <router-view :user_id="user_id" :role="role" ></router-view>
    </div>


  </div>
</template>

<script>
export default {
        props: {
        user_id: Number,
        role: Number
    },

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
/* --tw-bg-opacity: 1;
background-color: rgba(236, 72, 153, var(--tw-bg-opacity)); */
/* --tw-text-opacity: 1;
color: rgba(255, 255, 255, var(--tw-text-opacity));*/

/* When actived: (border border-b-0) */
border-width: 1px;
border-bottom-width: 0px;
}
.active{
border-width: 1px;
border-bottom-width: 0px;
}

</style>
