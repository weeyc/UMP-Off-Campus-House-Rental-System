<template>
 <div>
  <div class="w-10/12 mt-10 ml-24 flex flex-col ">
    <div class="flex">
        <router-link  :to="{name: 'payment_land'}"
            exact-active-class="exact-active" class="flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-blue-200   border-b border-gray-100 rounded-t-lg sm:px-4  -px-1 whitespace-nowrap focus:outline-none hover:text-blue-700">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card mx-1" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
            </svg>
            <span class="mx-1 text-sm sm:text-base">
                Payments
            </span>
        </router-link >

         <router-link  :to="{name: 'land_booking'}"
            exact-active-class="exact-active" class="flex  items-center h-12 px-2 py-2 text-center text-gray-700 bg-blue-200 border-b border-gray-100 rounded-t-lg sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark-check mx-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
            <span class="mx-1 text-sm sm:text-base">
                Bookings
            </span>
        </router-link >
           <!-- <router-link  :to="{name: 'land_bills'}"
            exact-active-class="exact-active"  active-class="active" class="flex  items-center h-12 px-5 py-2 text-center text-gray-700 bg-blue-400 border-b border-gray-100 rounded-t-lg sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cash-stack mx-1" viewBox="0 0 16 16">
            <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
            </svg>
            <span class="mx-1 text-sm sm:text-base">
                Bills
            </span>
        </router-link > -->

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
background-color: rgb(243 244 246);
border-width: 1px;
border-bottom-width: 0px;
}
.active{
border-width: 1px;
border-bottom-width: 0px;
}

</style>
