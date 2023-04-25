import axios from "axios";

const instance = axios.create({
    baseURL: "https://mobilicis-dx4b.onrender.com",
});

export default instance;