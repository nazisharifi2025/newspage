export default function Hero(){
    return(
        <div className="flex justify-between space-x-3 w-full h-[500px] p-6 my-5 font-serif">
            <div className="w-1/2 h-full shadow-sm p-4 rounded-sm flex items-center justify-center">
            <img src="public/img/t-1.jpg" alt="" className="m-auto rounded-md w-[90%] h-[90%]" />
            </div>
            <div className="flex flex-col h-[97%] p-5 rouneded-sm shadow-sm w-[50%] gap-3">
                <strong className="text-2xl w-[60%]">25 new technologies that will change the future of the world</strong>
                <span>New technology means the realization of all the dreams that were only a sweet dream until now. Believe it or not, the future of the world will be transformed by new technologies. We all dreamed of traveling to Mars in a spaceship as children; or that all our wishes could be fulfilled with the wave of a magic wand. Probably, traveling to Mars will be possible in the next few years. It is not surprising that the magic wand will one day make all our dreams come true. Anyway, these days it is not too late and the future of technology is finally here.

                Studying and researching technology is very interesting for both people who work in this field and ordinary people who are interested in today's technologies. To better understand technologies and future technologies, join us to see the world of the next 10-20 years and the types of technologies in it:</span>
                <button className="text-blue-400 w-[30%] hover:underline cursor-pointer">Hoy Topics Today's</button>
            </div>
        </div>
    )
}