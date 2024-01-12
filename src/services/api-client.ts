import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number,
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'267be45a0d894de598046a5d89bf8ba9'
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint=endpoint;
    }

    getAll=(config: AxiosRequestConfig)=>{
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res=>res.data);
    }
}

export default APIClient