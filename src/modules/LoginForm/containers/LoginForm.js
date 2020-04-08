import { withFormik } from "formik";
import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";
import { openNotification } from "../../../utils/helpers";

import axios from "core/axios";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    return axios
      .post("/user/signin", values)
      .then(({ data }) => {
        console.log(data);
        const { status, token } = data;
        if (status === "erorr") {
          openNotification({
            title: "Ошибка при авторизации",
            text: "Неверный пароль",
            type: "erorr",
          });
        } else {
          openNotification({
            text: "Вы авторизовались! Подождите...",
            type: "success",
          });
        }
        console.log(data);

        // localStorage.token = data.token;
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: "LoginForm",
})(LoginForm);
