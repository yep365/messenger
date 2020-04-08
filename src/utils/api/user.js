import { axios } from "core";

export default {
  signin: (postdata) => axios.get("/user/signin", postdata),
};
