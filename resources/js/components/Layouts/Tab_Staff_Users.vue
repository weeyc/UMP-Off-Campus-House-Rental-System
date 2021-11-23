<template>
  <div class="w-10/12 ">

      <div class="grid grid-cols-3 gap-5 lex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start">
      <router-link  :to="{name: 'manage_student'}"
          class="

            p-4
            rounded
            bg-white
            text-indigo-500
            hover:bg-indigo-500 hover:text-white
            focus:bg-indigo-500 focus:text-white focus:outline-none
            transition duration-150 ease-in-out
            shadow-md
            flex
            items-center
            justify-center
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Manage Students
      </router-link>
        <router-link  :to="{name: 'manage_landlord'}"

          class="
            p-4
            rounded
           bg-white
            text-indigo-500
            hover:bg-indigo-500 hover:text-white
            focus:bg-indigo-500 focus:text-white focus:outline-none
            transition duration-150 ease-in-out

            shadow-md
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Manage Landlord
        </router-link>
         <router-link  :to="{name: 'manage_staff'}"
          class="
            p-4
            rounded
            bg-white
            text-indigo-500
            hover:bg-indigo-500 hover:text-white
            focus:bg-indigo-500 focus:text-white focus:outline-none
            transition duration-150 ease-in-out
            shadow-md
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          Manage Staff
         </router-link>
      </div>

      <div class="">

            <router-view></router-view>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
