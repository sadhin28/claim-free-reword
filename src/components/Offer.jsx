import { useLoaderData } from "react-router-dom";
import OfferCard from "./OfferCard";


const Offer = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        
        <div>
           <h1 className="text-center py-10 font-bold text-gray-700">অল্প পরিশ্রম অনেক উপহার</h1>
         <div className="grid md:grid-cols-3 gap-5">
               {
                data.map(data=><OfferCard key={data.id} data={data}/>)
            }
         </div>
        </div>
    );
};

export default Offer;