export default function Heder(){
    return(
        <div className="w-full h-24 flex justify-between items-center py-4 static px-6">
            <img src="public/img/logo.webp" className="h-[60%]" alt="" />
            <ul className="flex space-x-6 font-bold text-xl">
                <li className="hover:underline font-serif transition-normal transition-all duration-300"><a href="#">Home</a></li>
                <li className="hover:underline font-serif transition-normal transition-all duration-300"><a href="#">About</a></li>
                <li className="hover:underline font-serif transition-normal transition-all duration-300"><a href="#">Contuct us</a></li>
                <li className="hover:underline font-serif transition-normal transition-all duration-300"><a href="#">News</a></li>
            </ul>
             <div className="flex space-x-2">
                <button className="font-bold text-center py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-100 text-white">Newsletter</button>
                <button className="font-bold text-center py-2 px-4 bg-blue-200 rounded-md hover:bg-blue-100 text-white">ّFollow Us</button>
             </div>

        </div>
    );
}