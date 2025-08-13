export default function Heder(){
    return(
        <div className="w-full h-fit flex justify-between items-center py-4 px-6">
            <img src="../poblic/img/logo.webp" alt="" />
            <ul className="flex space-x-3 font-bold">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contuct us</a></li>
                <li><a href="#">Service</a></li>
            </ul>
        </div>
    );
}