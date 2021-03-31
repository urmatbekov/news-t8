import axios from "axios";

const http = axios.create({
    baseURL:"https://nurkadyrnur.pythonanywhere.com"
})

export default http;