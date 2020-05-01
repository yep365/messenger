import { axios } from "core";

export default {
  upload: (file) => {
    let formData = new FormData(); // instantiate it
    // suppose you have your file ready
    formData.set("file", yourFile);
    // add some data you collected from the input fields
    formData.set("data1", dataInputField1); // suppose you got dataInputField1 from your HTML5 form input
    axios.post("/api/art", formData, {
      headers: {
        "content-type": "multipart/form-data", // do not forget this
      },
    });
  },
};
