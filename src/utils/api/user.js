import { axios } from "core";

export default {
  signin: (postdata) => axios.get("/user/signin", postdata),
  signup: (postData) => axios.post("user/signup", postData),
  getMe: () => axios.get("/user/me"),
};
