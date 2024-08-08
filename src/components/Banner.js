"use client"
export default function Banner(){
    return(
        <div className="flex justify-center">

        <div className="p-4  rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-[600px]">
                <h1 className="lg:text-5xl">Take Action Today!</h1>
                <h2 className="lg:text-3xl mb:mb-2 ">Get Started with a Free Consultation!</h2>
                </div>
                <div>
                    <a href="/assesment" className="rounded-xl lg:w-[250px] bg-gray-100 text-black lg:py-3 lg:px-6 mb:w-[100px] mb:p-2 mb:text-xs mb:text-center lg:text-xl">Book Now</a>
                </div>
        </div>
        </div>
    )
}