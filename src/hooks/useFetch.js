import { useEffect, useState } from "react"

export default function useFetch(url)
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>
    {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            setLoading(false);
            console.log('data +'+ result)
            setData(result);
        }
        fetchData();
    },[url])
    return {data, loading }
}