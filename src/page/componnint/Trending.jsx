export default function Trending(){
    return(
        <div className="w-full h-[70%] flex justify-between my-28 font-serif p-6">
            <div className="w-[35%] p-4 h-full flex flex-col gap-4">
                <h1 className="font-bold text-2xl">Trending Topic</h1>
                <p className="">
                    
The latest news from various fields of technology: mobile, tablet, laptop, robotics, hardware, network, gadget, security, astronomy and astronautics, operating systems, applications, games, automobiles, home  appliances, architecture, photography, the future, and more.
                </p>
                <img src="public/img/tech.svg" className="w-[90%]" alt="" />
            </div>
            <div className="flex w-1/2 h-[80%] my-3 flex-col justify-between">
            <div className="flex w-full h-[30%] my-6 space-x-2">
                <img src="public/img/Hosh2.webp" className="rounded-md" alt="" />
                <div className="flex flex-col ">
                    <h1 className="font-bold text-xl">Al & Automation</h1>
                    <p className="text-sm font-light w-[70%]">
One of the latest developments in artificial intelligence that has received a lot of attention recently is GPT-4. </p>
                <button className="rounded-full text-blue-300 flex items-center justify-center space-x-4 hover:bg-blue-300 hover:text-white py-1 w-[50%] ">Read More<span class="material-symbols-outlined">arrow_forward</span></button>
                </div>
            </div>
            <div className="flex w-full h-[30%] my-6 space-x-2">
                <img src="public/img/4-4.png.webp" className="rounded-md" alt="" />
                <div className="flex flex-col ">
                    <h1 className="font-bold text-xl">Aybersecurity Updates</h1>
                    <p className="text-sm font-light w-[70%]">Examining security threats in networks and solutions to combat them</p>
                <button className="rounded-full text-blue-300 flex items-center justify-center space-x-4 hover:bg-blue-300 hover:text-white py-1 w-[50%] ">Read More<span class="material-symbols-outlined">arrow_forward</span></button>
                </div>
            </div>
            <div className="flex w-full h-[30%] my-6 space-x-2">
                <img src="public/img/maghz.jpg" className="rounded-md" alt="" />
                <div className="flex flex-col ">
                    <h1 className="font-bold text-xl">Gadgets & Innovations</h1>
                    <p className="text-sm font-light w-[70%]"> The brain-computer interface is almost built.
Innovations like Elon Musk's Neuralink could make the mouse and keyboard obsolete in the future</p>
                <button className="rounded-full text-blue-300 flex items-center justify-center space-x-4 hover:bg-blue-300 hover:text-white py-1 w-[50%] ">Read More<span class="material-symbols-outlined">arrow_forward</span></button>
                </div>
            </div>
            </div>
        </div>
    )
}