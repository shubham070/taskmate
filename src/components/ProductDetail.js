import { useLocation, useParams } from "react-router"
import { useSearchParams } from "react-router-dom";

export default function ProductDetail()
{
    const params = useParams();
    const searchParams = useSearchParams();
    const locations = useLocation();

    console.log(params);
    console.log(searchParams);
    console.log(locations);
    
    return(
        
        <div>
        
            <h2> Product Detail</h2>
        </div>
    )
}