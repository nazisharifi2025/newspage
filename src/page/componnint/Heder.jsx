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
            
        </div>
    );
}