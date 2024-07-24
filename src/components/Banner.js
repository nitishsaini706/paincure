
export default function Banner(){
    return(
        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-[600px]">
                <h1 className="lg:text-5xl">Start your journey to a pain-free work life today!</h1>
                </div>
                <div>
                    <button className="rounded-xl lg:w-[200px] bg-gray-100 text-black lg:py-3 lg:px-6 mb:mt-3 mb:w-[100px] mb:p-2 mb:text-xs mb:text-center lg:text-xl">Get Started</button>
                </div>
        </div>
    )
}