import Heder from "./componnint/Heder";
import Hero from "./componnint/Hero";
import Recent from "./componnint/Recent";

export default function Home(){
    return(
        <div className="bg-[url(../public/img/scattered-forcefields.svg)] h-screen overflow-y-scroll w-full">
            <Heder/>
            <Hero/>
            <Recent/>
        </div>
    );
}