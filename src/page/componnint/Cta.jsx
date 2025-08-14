export default function Cta(){
    return(
        <div className="w-full h-[40%] flex flex-col justify-center items-center gap-3.5">
            <h1 className="font-bold text-3xl">Stay Updated with the Latest News</h1>
            <h1 className="font-bold text-2xl">Don't Miss Out – Join Our Newsletter</h1>
            <div className="flex ">
                <span class="material-symbols-outlined bg-gray-400 p-4 text-gray-700">
mark_email_unread
</span>
            <input type="email" placeholder="Enter your email" className="py-3 px-24 outline-0 bg-gray-300" />
            </div>
        </div>
    )
}