
<title>UOCA</title>

@extends('layouts.app')
@section('content')

<div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-green-200 to-green-500" >

    <section class="flex items-stretch h-screen w-screen text-white ">
        <div class="relative items-center hidden w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex" style="background-image: url(/images/UMP/wide.jpg);">
            <div class="absolute inset-0 z-0 bg-black opacity-25"></div>
            <div class="z-10 w-full px-24 font-black mt-11">

                <h1 class="text-6xl font-roboto tracking-wide bg-black bg-opacity-5 italic ">Search Accomodation</h1>
                <p class="my-4 text-3xl font-roboto text-ump-green bg-black bg-opacity-30 italic">Browse your rental house in more secure way, anywhere.</p>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center p-4 space-x-4 text-center">

            </div>
        </div>
        <div class="z-0 flex items-center justify-center w-full px-0 text-center lg:w-1/2 md:px-16" style="background-color: #161616;">
            <div class="absolute inset-0 z-10 items-center bg-gray-500 bg-no-repeat bg-cover lg:hidden" >
                <div class="absolute inset-0 z-0 bg-black opacity-60"></div>

            </div>
            <div class="absolute top-0 flex justify-right p-4 space-x-4    ">

                <div class="flex items-center flex-shrink-0 px-5 py-2 border-b-4 hover:text-indigo-400 text-2xl ">Login</div>

            </div>

            <div class="z-auto w-full">

                     <div class="grid grid-row-2 grid-flow-col gap-x-2.5 ">
                        <div class="  row-span-2 justify-self-end animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="100" height="100"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"><g transform="translate(2.408,2.408) scale(0.972,0.972)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g fill="#6366f1" stroke="#6366f1" stroke-width="5" stroke-linejoin="round"><path d="M88.10969,4.50828l32.63297,25.39688v-5.82516c0.00019,-1.89978 1.54022,-3.43981 3.44,-3.44h13.41735c1.89978,0.00019 3.43981,1.54022 3.44,3.44v20.64c0.00404,0.30353 -0.0321,0.60627 -0.1075,0.90031l26.29719,20.46531c1.0242,0.73488 1.56448,1.97105 1.40815,3.22188c-0.15632,1.25084 -0.98421,2.31602 -2.15777,2.77623c-1.17355,0.46022 -2.50483,0.24176 -3.46976,-0.56937l-4.77031,-3.71547v90.4411c-0.00019,1.89978 -1.54022,3.43981 -3.44,3.44h-47.61578c-0.37149,0.0614 -0.75054,0.0614 -1.12203,0h-40.15797c-0.37149,0.0614 -0.75054,0.0614 -1.12203,0h-47.58219c-1.89978,-0.00019 -3.43981,-1.54022 -3.44,-3.44v-90.4411l-4.77031,3.71547c-0.96493,0.81112 -2.2962,1.02958 -3.46976,0.56936c-1.17355,-0.46022 -2.00144,-1.52539 -2.15776,-2.77623c-0.15632,-1.25083 0.38395,-2.487 1.40814,-3.22188l79.12,-61.57735c0.56731,-0.43985 1.258,-0.69122 1.97531,-0.71891c0.80932,-0.03199 1.60399,0.22258 2.24406,0.71891zM20.64,62.45078v92.34922h41.28v-61.37578c-0.16054,-1.00223 0.12968,-2.02421 0.79301,-2.79248c0.66333,-0.76827 1.63206,-1.20442 2.64699,-1.19174h41.28c1.89978,0.00019 3.43981,1.54022 3.44,3.44v61.92h41.28v-92.34922l-65.36,-50.86766zM127.62265,35.26l6.53735,5.0861v-12.8261h-6.53735zM68.8,154.8h34.4v-58.48h-34.4z"></path></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path><g fill="#6366f1" stroke="none" stroke-width="1" stroke-linejoin="miter"><path d="M85.86563,3.78938c-0.71731,0.02769 -1.408,0.27906 -1.97531,0.71891l-79.12,61.57735c-1.02419,0.73488 -1.56447,1.97105 -1.40814,3.22188c0.15632,1.25083 0.98421,2.31601 2.15776,2.77623c1.17355,0.46022 2.50482,0.24176 3.46976,-0.56936l4.77031,-3.71547v90.4411c0.00019,1.89978 1.54022,3.43981 3.44,3.44h47.58219c0.37149,0.0614 0.75054,0.0614 1.12203,0h40.15797c0.37149,0.0614 0.75054,0.0614 1.12203,0h47.61578c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-90.4411l4.77031,3.71547c0.96493,0.81113 2.29621,1.02958 3.46976,0.56937c1.17355,-0.46022 2.00144,-1.5254 2.15777,-2.77623c0.15632,-1.25084 -0.38396,-2.487 -1.40815,-3.22188l-26.29719,-20.46531c0.0754,-0.29405 0.11154,-0.59678 0.1075,-0.90031v-20.64c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44h-13.41735c-1.89978,0.00019 -3.43981,1.54022 -3.44,3.44v5.82516l-32.63297,-25.39687c-0.64007,-0.49632 -1.43474,-0.7509 -2.24406,-0.71891zM86,11.58313l65.36,50.86766v92.34922h-41.28v-61.92c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44h-41.28c-1.01493,-0.01267 -1.98366,0.42347 -2.64699,1.19174c-0.66333,0.76827 -0.95355,1.79024 -0.79301,2.79248v61.37578h-41.28v-92.34922zM127.62265,27.52h6.53735v12.8261l-6.53735,-5.0861zM68.8,96.32h34.4v58.48h-34.4z"></path></g><path d="" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path></g></g></svg>
                        </div>
                        <div class=" row-span-1 "> <h1 class="text-4xl text-ump-green font-oswald font-bold tracking-wide text-left">UMP </h1></div>
                        <div class=" row-span-1 "><h1 class="text-4xl text-ump-green font-oswald font-bold tracking-wide text-left">Off-Campus Housing</h1></div>
                      </div>



                <form action="{{ route('Check_Login') }}" method="POST" class="w-full px-6 mx-auto sm:w-2/3 lg:px-0">
                    <div class="pt-1 pb-2">
                        <input type="email" name="email" id="email" placeholder="Email" required class="block w-full p-4 text-lg bg-black rounded-sm">

                    </div>
                    <div class="pt-1 pb-2">
                        <input class="block w-full p-4 text-lg bg-black rounded-sm" type="password" required name="password" id="password" placeholder="Password"  >
                    </div>

                  <div class="pt-1 pb-2">
                        <select class="block w-full p-4 text-lg bg-black rounded-sm" name="role" required >
                            <option value="Student">Student</option>
                            <option value="Landlord">Landlord</option>
                            <option value="Staff">Staff</option>
                        </select>
                    </div>



                    <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <a href="#">Forgot your password?</a>
                    </div>
                    <div class="px-4 pt-4 pb-2">
                        <button type="submit" class="block w-full p-4 text-lg uppercase rounded-full  bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
                    </div>

                </form>
                <p class="px-6 font-nunito text-center ">Don't have an account yet?
                     <a href="/registration-student" class="hover:underline hover:text-indigo-400">Sign up. </a>
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


