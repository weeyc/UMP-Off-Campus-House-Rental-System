@extends('layouts.app')
@section('content')
<!-- component -->
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 w-full h-full bg-no-repeat bg-cover" style="background-image: url(/images/UMP/clock.jpg);">
    <div class="relative py- sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-8 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-80 border border-gray-200" style="backdrop-filter: blur(20px);">
        <div class="max-w-md mx-auto">

        <div class="grid grid-row-2 grid-flow-col gap-x-2.5 bg-gradient-to-tl from-indigo-500 to-fuchsia-400 text-transparent bg-clip-text ">
                    <div class=" row-span-2 justify-self-end">
                        <img class="h-full w-full" src="https://img.icons8.com/nolan/100/cottage.png"/>
                    </div>
                    <div class=" row-span-1 "> <h1 class="text-4xl  font-oswald font-bold tracking-wide text-left">UOCA </h1></div>
                    <div class=" row-span-1 "><h1 class="text-4xl  font-oswald font-bold tracking-wide text-left">Rental Bills</h1></div>
                </div>

                <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p class="">Hello Wee, </p>
              <p class="text-sm">Here’s a summary of your DEC-21 UOCA rental bill (ID: 2):</p>

              <div class="w-full mx-auto">
                <div class="shadow-md rounded my-6">

                    <table class="text-center w-full border-2 rounded-lg"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                    <thead>
                      <tr>
                        <th  colspan="2" class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-r  border-grey-light ">Bills Date <p class="font-extrabold">04 DEC 2021 </p></th>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light">Tenant ID<p class="font-extrabold">1-2 </p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover:bg-grey-lighter text-sm">
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Outstanding<p class="font-bold">RM 0.00</p> </td>
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Rental Bill<p class="font-bold">RM 200.00</p></td>
                        <td rowspan="2" class="py-4 px-6 border-b border-grey-light border-r ">Total Amount<p class="font-bold">RM 402.00</p>
                            <button class="px-4 py-2 font-medium mt-2 text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                                Pay Now
                            </button></td>
                      </tr>
                      <tr class="hover:bg-grey-lighter text-sm">
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Penalty Fees <p class="font-bold">RM 0.00</p></td>
                        <td class="py-4 px-6 border-b border-grey-light border-r ">Bill Due <p class="font-bold">25 DEC 2021</p></td>


                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>Thank you for using UOCA application!</p>
              <p class="text-xs">Disclaimer: This is a system generated email. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

@endsection
