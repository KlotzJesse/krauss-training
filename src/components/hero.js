import React from "react"

import tw from "twin.macro"



export default function Hero({ children }) { 
  return (
    <section class="text-gray-700 flex-grow flex flex-col xl:flex-row xl:space-x-32 space-y-5 md:space-y-0 mx-auto items-center justify-center xl:py-0 py-28">
            <div class="flex-initial w-2/3 flex flex-col items-center justify-center">
                <h1 class="font-serif text-2xl font-semibold text-gray-800 dark:text-white xl:text-5xl xl:leading-tight leading-tight mb-8">
                    Praxisnahe & hoch beeindruckende Trainings für Führungskräfte & Verkäufer
                </h1>
                
                <p class="text-2xl text-gray-500 font-normal mb-8">
                Ich helfe Führungskräfte, Verkäufer & Online-Marketing Manager dabei, ihre Potenziale zu erkennen und Chancen in Ihrem Unternehmen zu ergreifen, um zu höchstleistungen zu gelangen.
                </p>

                <button class="self-start xl:flex hidden text-white bg-indigo-500 shadow-lg hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-y-1 uppercase hover:scale-110 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg text-teal-500 block rounded-lg font-medium py-4 px-12 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
                        Strategiegespräch buchen
                        <svg class="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;">
                            <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                                l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                                c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
                        </svg>
                </button>

            </div>
            <div class="flex-initial xl:self-end w-1/2 flex items-center justify-center flex-col">
                <img src="https://gola.io/wp-content/themes/yootheme/cache/pawelgola-2b2627c6.webp"/>
                <button class="xl:hidden flex text-white bg-indigo-500 shadow-lg hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-y-1 uppercase hover:scale-110 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg text-teal-500 block rounded-lg font-medium py-4 px-12 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
                        Strategiegespräch buchen
                        <svg class="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;">
                            <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                                l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                                c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
                        </svg>
                </button>
            </div>
    </section>
  )
}