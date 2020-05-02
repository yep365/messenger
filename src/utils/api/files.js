import { axios } from "core";

export default {
  upload: (file) => {
    let formData = new FormData();
    formData.append("image", file);
    return axios.post("/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
