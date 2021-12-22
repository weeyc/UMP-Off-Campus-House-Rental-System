<title>UOCA</title>

@extends('layouts.app')
@section('content')

<div class="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-green-200 to-green-500" >
    <section class="flex items-stretch h-screen w-screen text-white ">
        {{---------------------------------------------------------------------Left Image ---------------------------------------------------------}}
        <div class="relative items-center hidden w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex" style="background-image: url(/images/UMP/wide.jpg);">
            <div class="absolute inset-0 z-0 bg-black opacity-25"></div>
            <div class="z-10 w-full px-24 font-black mt-11">
                <h1 class="text-6xl font-roboto tracking-wide bg-black bg-opacity-5 italic ">Search Accomodation</h1>
                <p class="my-4 text-3xl font-roboto text-indigo-400 bg-black bg-opacity-30 italic">Browse your rental house in more secure way, anywhere.</p>
            </div>
        </div>
        {{---------------------------------------------------------------------Left Image End---------------------------------------------------------}}


        {{---------------------------------------------------------------------Right Black---------------------------------------------------------}}
        <div class="z-0 flex items-center justify-center w-full px-0 text-center lg:w-1/2 md:px-16" style="background-color: #161616;">

            <div class="absolute top-0 flex justify-right p-4 space-x-4 invisible md:invisible sm:invisible lg:invisible xl:invisible 2xl:visible">
                <div class="flex items-center flex-shrink-0 px-5 py-2 border-b-4 hover:text-indigo-400 text-2xl ">Login</div>
            </div>

            <div class="z-auto w-full">
                {{---LOGO AND SYSTEM TITLE---}}
                <div class="grid grid-row-2 grid-flow-col gap-x-2.5 bg-gradient-to-tl from-indigo-500 to-fuchsia-400 text-transparent bg-clip-text ">
                    <div class=" row-span-2 justify-self-end animate-bounce">
                        <img class="ml-5" src="https://img.icons8.com/nolan/100/cottage.png"/>
                    </div>
                    <div class=" row-span-1 "> <h1 class="text-4xl  font-oswald font-bold tracking-wide text-left">UMP </h1></div>
                    <div class=" row-span-1 "><h1 class="text-4xl  font-oswald font-bold tracking-wide text-left">Off-Campus Housing</h1></div>
                </div>


                  {{---------------------------------------------------------------------FORM---------------------------------------------------------}}
                <form action="{{ route('Sign_In') }}" method="POST" class="w-full px-6 mx-auto sm:w-2/3 lg:px-0">
                    @csrf

                    {{-- Alert for wrong email or password --}}
                    @if(Session::get('fail'))
                        <div class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
                            <svg class="w-8 h-8 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <div>
                                <span class="text-lg"> {{ Session::get('fail') }}  </span>
                            </div>
                        </div>
                    @endif


                    <div class="pt-1 pb-2 ">
                        <input type="email" name="email"  placeholder="Email"  class="block w-full p-4 text-lg bg-black rounded-lg" required>
                        <span class="flex text-red-500">@error('email'){{ $message }}@enderror</span>
                    </div>
                    <div class="pt-1 pb-2">
                        <input class="block w-full p-4 text-lg bg-black rounded-lg" type="password"  name="password" placeholder="Password"  required>
                        <span class="flex text-red-500">@error('password'){{ $message }}@enderror</span>
                    </div>

                     <div class="pt-1 pb-2">
                        <select class="block w-full p-4 text-lg bg-black rounded-lg" name="role" required >
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
                  {{---------------------------------------------------------------------FORM---------------------------------------------------------}}

                <p class="px-6 font-nunito text-center ">Don't have an account yet?
                     <a href="/registration-student" class="hover:underline hover:text-indigo-400">Sign up. </a>
                </p>
            </div>


                 <footer class="invisible md:invisible sm:invisible lg:invisible xl:invisible 2xl:visible  px-5 py-4 border-t footer bg-base-200 text-base-content border-base-300 fixed bottom-0 flex justify-center p-4 space-x-4 text-center ">
                        <div>
                            <p>Copyright © 2021 - All right reserved by Weeyc</p>
                        </div>
                </footer>
        </div>
         {{---------------------------------------------------------------------Right Black---------------------------------------------------------}}
    </section>
 </div>


@endsection


