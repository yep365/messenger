import { axios } from "core";

export default {
  signin: (postdata) => axios.get("/user/signin", postdata),
  signup: (postData) => axios.post("user/signup", postData),
  verifyHash: (hash) => axios.get("user/verify?hash=" + hash),
  getMe: () => axios.get("/user/me"),
};
