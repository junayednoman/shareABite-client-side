import axios from "axios";

const useAxios = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://share-a-bite-server.vercel.app/'
    })
    return axiosSecure;
};

export default useAxios;