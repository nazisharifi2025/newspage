export default function Heder(){
    return(
        <div className="w-full h-24 flex justify-between items-center py-4 px-6">
            <img src="public/img/logo.webp" className="h-[70%]" alt="" />
            <ul className="flex space-x-3 font-bold text-xl">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contuct us</a></li>
                <li><a href="#">Service</a></li>
            </ul>
             <div className="flex space-x-2">
                <button className="font-bold text-center py-2 px-4 bg-gray-200 text-white">Newsletter</button>
                <button className="font-bold text-center py-2 px-4 bg-blue-200 text-white">ّFollow Us</button>
             </div>

        </div>
    );
}