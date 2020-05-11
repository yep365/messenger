import axios from "axios";

axios.defaults.baseURL = "https://messenger-for-kpres.herokuapp.com/";
axios.defaults.headers.common["token"] = window.localStorage.token;
window.axios = axios;

// window.location.origin

export default axios;
