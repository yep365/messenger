import { axios } from "core";

export default {
  getAll: () => axios.get("/dialogs"),
  create: (partnerId) => axios.post("/dialogs", { partner: partnerId }),
};
