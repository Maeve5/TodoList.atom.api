import axios from "axios";

const API = axios.create({
    baseURL: "https://api.kkot.farm",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default API;