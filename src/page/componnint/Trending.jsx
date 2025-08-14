export default function Trending(){
    return(
        <div className="w-full h-screen flex justify-between my-28 font-serif p-6">
            <div className="w-[35%] p-4 h-full flex flex-col gap-4">
                <h1 className="font-bold text-2xl">Trending Topic</h1>
                <p className="">
                    
The latest news from various fields of technology: mobile, tablet, laptop, robotics, hardware, network, gadget, security, astronomy and astronautics, operating systems, applications, games, automobiles, home  appliances, architecture, photography, the future, and more.
                </p>
                <img src="public/img/tech.svg" className="w-[90%]" alt="" />
            </div>
            <div className="flex w-1/2 h-[70%] flex-col justify-between">
            
            </div>
        </div>
    )
}