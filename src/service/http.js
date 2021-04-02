import axios from "axios";

const http = axios.create({
    baseURL: "https://nurkadyrnur.pythonanywhere.com"
})

http.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    if(token !== null) {
        config.headers.Authorization = "Token " + token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const {response} = error
    const token = localStorage.getItem("token")
    if(token !== null) {
        if (response && response.status === 401){
            localStorage.removeItem("token")
        }
    }
    return Promise.reject(error);
});

export default http;