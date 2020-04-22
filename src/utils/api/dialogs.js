import { axios } from "core";

export default {
  getAll: () => axios.get("/dialogs"),
  create: ({ partnerId, text }) =>
    axios.post("/dialogs", { partner: partnerId, text }),
};
