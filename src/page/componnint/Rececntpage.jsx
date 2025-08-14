export default function Recentpage({imgUrl,envan,Description}){
    return(
                <div className="w-[25%] flex flex-col h-full  border border-gray-100 p-4 rounded-sm">
                    
                 <img src={imgUrl} className="rounded-sm w[90%] h-[200px]" alt="" />
                    <span className="font-bold">{envan}</span>
                    <span className="font-serif">{Description}</span>
<button className="rounded-full text-blue-300 flex items-center justify-center space-x-4 hover:bg-blue-300 hover:text-white py-2 w-[50%] ">Read More<span class="material-symbols-outlined">
arrow_forward
</span></button> 
                </div> 
    )
}