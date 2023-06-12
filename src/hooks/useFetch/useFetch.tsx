import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [data,setResponseData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const fetchData = async ()=>{
        try {
           const response = await axios.get(url);
           setResponseData(response.data);           
           setLoading(false);
        } catch (error) {
           setLoading(false);
           setError(error.message)
        }
       }
    useEffect(()=>{
        fetchData()
    },[])

    return {error,loading,data}; 
}

export default useFetch;