import axios from "axios";

const useAxios = () => {
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000/'
    })
    return axiosSecure;
};

export default useAxios;