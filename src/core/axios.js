import axios from "axios";

axios.defaults.baseURL = "http://localhost:3003";
axios.defaults.headers.common["token"] = window.token;
window.axios = axios;

// window.location.origin

export default axios;
