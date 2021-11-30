<template>
	<div class="relative flex min-h-screen ">

        <div  class="bg-blue-600 text-blue-100 w-64 space-y-6 px-2 py-4     absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:-translate-x-0"> Side </div>
 <!-- md:relative md:-translate-x-0 hide side bar -->
        <div class="flex-1">

            <div class="bg-white shadow px-2 py-4">

                header
                <button @click="showSidebar =! showSidebar" class="text-pink-500 font-extrabold">X</button>
            </div>

           <div class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen" >

                    <router-view :user_id="user_id" :role="role"></router-view>

                    This is COntent

            </div>
            <foot-land class="bottom-0 w-full"/>
        </div>




	</div>
</template>

<script>

export default {

	data() {
		return {
            showSidebar: 'false',
		};
	},
	methods: {

	}
};
</script>


