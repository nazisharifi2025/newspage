import Phone from "../../assets/img/Phone.webp";
import Hosh from "../../assets/img/Hosh-m.webp";
import Arz from "../../assets/img/Arz-d.jpg";
import Recentpage from "./Rececntpage";
export default function Recent(){
    const recent = [
        {
            imgUrl : Phone,
            envan : "Today's phone prices on Zoomit; the best options for buying",
            Description :  "The price of a mobile phone is the most important factor in buying a phone. At Zoomit, we provide you with the most complete and up-to-date price list of phones along with its reputable sellers. The price of a mobile phone varies depending on the category of features and capabilities of the device."
        },
        {
            imgUrl : Hosh,
            envan : "Artificial Intelligence and the Changing Internet",
            Description :  "Artificial intelligence in the future of the Internet will improve the performance of tasks and bring more desirable results. For example, using voice assistants “Alexa” and “Siri” will allow you to connect your home appliances to the Internet. You can turn on or off the lights whenever you want, change the "
        },
        {
            imgUrl : Arz,
            envan : "How to identify the trend in the cryptocurrency market",
            Description :  "and its strength, we try to provide you with information about the trend of the cryptocurrency market and examine the detection of trends in the price of cryptocurrency so that you have information in this field and can identify market trends and use the information obtained in the technical analysis and price analysis of cryptocurrency training. Experience has shown that during the"
        },
    ]
    return(
        <div className="h-screen  w-full rounded-sm flex flex-col justify-between px-6 py-12 my-5">
           <h1 className="font-bold text-3xl font-serif pt-3 ">Recent Articles</h1>
           <h1 className=" text-xl font-serif py-3 w-[50%]">Discover the latest updates, trends, and insights in the world of technology. Stay informed with our fresh articles</h1>
            <div className="flex w-full h-full font-serif justify-between">
                {recent.map(item=>(
                     <Recentpage imgUrl = {item.imgUrl} envan = {item.envan} Description = {item.Description}/>
                ))

                }
           
            </div>
        </div>
    )
}