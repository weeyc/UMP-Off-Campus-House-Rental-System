
<title>Register</title>

@extends('layouts.app')
@section('content')


 <div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-green-200 to-green-500" >

    <section class="flex items-stretch h-screen w-screen text-white ">
        <div class="relative items-center hidden w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex" style="background-image: url(/images/People/Students.jpg);">
            <div class="absolute inset-0 z-0 bg-black opacity-25"></div>
            <div class="z-10 w-full px-24 font-black ">
                              {{-- 'nunito', 'montserrat','oswald','poppins','roboto' --}}
                <p class="text-6xl font-roboto tracking-wide bg-black bg-opacity-0 italic "> Register as  <br> Student</p>
                <p class="my-4 text-3xl font-roboto bg-black bg-opacity-5 italic">Search your rental house in more easuy and secure way</p>

            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center p-4 space-x-4 text-center">

            </div>
        </div>
        <div class="z-0 flex items-center justify-center w-full px-0 text-center lg:w-1/2 md:px-16" style="background-color: #161616;">
            <div class="absolute inset-0 z-10 items-center bg-gray-500 bg-no-repeat bg-cover lg:hidden" >
                <div class="absolute inset-0 z-0 bg-black opacity-60"></div>

            </div>
            <div class="absolute top-0 flex justify-right p-4 space-x-4    ">

                <div class="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-coolGray-800 dark:text-coolGray-100">
                    <a href="/student" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-coolGray-400 dark:text-coolGray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Student</span>
                    </a>
                    <a href="/landlord" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-coolGray-400 dark:text-coolGray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Landlord</span>
                    </a>


                </div>

            </div>

            <div class="z-auto w-full">

                     <div class="grid grid-row-2 grid-flow-col gap-x-2.5 ">
                        <div class="  row-span-2 justify-self-end animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="96" height="96"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#d97706"><path d="M86,14.33333c-1.91435,0.00025 -3.74903,0.76638 -5.09506,2.1276l-72.28255,63.07226c-0.9155,0.67554 -1.45577,1.74571 -1.45573,2.88347c0,1.97902 1.60431,3.58333 3.58333,3.58333h17.91667v57.33333c0,3.956 3.21067,7.16667 7.16667,7.16667h28.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-43h28.66667v43c0,3.956 3.21067,7.16667 7.16667,7.16667h28.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-57.33333h17.91667c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0.00004,-1.13776 -0.54023,-2.20792 -1.45573,-2.88347l-72.24056,-63.03027c-0.01394,-0.01406 -0.02794,-0.02805 -0.04199,-0.04199c-1.34603,-1.36123 -3.18071,-2.12736 -5.09506,-2.1276z"></path></g></g></svg>
                        </div>
                        <div class=" row-span-1 "> <h1 class="text-4xl text-ump-green font-oswald font-bold tracking-wide text-left">UMP </h1></div>
                        <div class=" row-span-1 "><h1 class="text-4xl text-ump-green font-oswald font-bold tracking-wide text-left">Off-Campus Housing</h1></div>
                      </div>



                <form action="" class="w-full px-6 mx-auto sm:w-2/3 lg:px-0">

                    <div class="pt-1 pb-2">
                        <input type="text" name="name" id="name" placeholder="Name" required class="block w-full p-4 text-lg bg-black rounded-sm">
                    </div>
                    <div class="pt-1 pb-2">
                        <input type="email" name="email" id="email" placeholder="Email" required class="block w-full p-4 text-lg bg-black rounded-sm">
                    </div>
                    <div class="pt-1 pb-2">
                        <input class="block w-full p-4 text-lg bg-black rounded-sm" type="password" required name="password" id="password" placeholder="Password">
                    </div>

                    <div class="px-4 pt-4 pb-2">
                        <button class="block w-full p-4 text-lg uppercase rounded-full  bg-yellow-600 hover:bg-yellow-700 focus:outline-none">sign Up</button>
                    </div>

                </form>
                <p class="px-6 font-nunito text-center ">Already have an account?
                    <a href="/" class="hover:underline hover:text-yellow-400">Login Now</a>.
                </p>
            </div>


                    <footer class="px-5 py-4 border-t footer bg-base-200 text-base-content border-base-300 absolute bottom-0 flex justify-center p-4 space-x-4 text-center ">
                        <div>
                             <p>Copyright © 2021 - All right reserved by Weeyc</p>
                        </div>
                     </footer>
        </div>
    </section>
 </div>


@endsection


