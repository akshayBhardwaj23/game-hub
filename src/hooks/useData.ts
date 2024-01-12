import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

//**This is moved to api-client.ts as useData is not used anymore */
// export interface FetchResponse<T>{
//     count: number,
//     results: T[];
// }

//**No use of useData hook after moving all the data to ReactQuery**
// const useData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[])=>{
//     const [data, setData] = useState<T[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);
  
//     useEffect(() => {

//         const controller = new AbortController();

//         setLoading(true);
//       apiClient
//         .get<FetchResponse<T>>(endpoint,{signal: controller.signal,...requestConfig})
//         .then((res) => {setData(res.data.results);
//         setLoading(false);})
//         .catch((err) => {if(err instanceof CanceledError) return; 
//             setError(err.message)
//           setLoading(false)})

//         return ()=> controller.abort();

//     }, deps? [...deps]: []);

//     return {data, error, isLoading}
// }

// export default useData;