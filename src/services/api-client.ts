import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'267be45a0d894de598046a5d89bf8ba9'
    }
})