import Cta from "./componnint/Cta";
import Heder from "./componnint/Heder";
import Hero from "./componnint/Hero";
import Recent from "./componnint/Recent";
import Trending from "./componnint/Trending";

export default function Home(){
    return(
        <div className="bg-[url(../public/img/scattered-forcefields.svg)] h-screen overflow-y-scroll w-full">
            <Heder/>
            <Hero/>
            <Recent/>
            <Trending/>
            <Cta/>
        </div>
    );
}