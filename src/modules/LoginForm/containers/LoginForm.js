import { connect } from "react-redux";
import { withFormik } from "formik";
import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";
import { openNotification } from "../../../utils/helpers";

import { userActions } from "redux/actions";

const LoginFormConnected = connect((state) => state, userActions)(LoginForm);

const LoginFormContainer = withFormik({
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
  handleSubmit: (values, { setSubmitting, fetchUserLogin }) => {
    console.log(fetchUserLogin);
    // return axios
    //   .post("/user/signin", values)
    //   .then(({ data }) => {
    //     console.log(data);
    //     const { status, token } = data;
    //     if (status === "erorr") {
    //       openNotification({
    //         title: "Ошибка при авторизации",
    //         text: "Неверный пароль",
    //         type: "erorr",
    //       });
    //     } else {
    //       openNotification({
    //         text: "Вы авторизовались! Подождите...",
    //         type: "success",
    //       });
    //     }
    //     console.log(data);

    //     // localStorage.token = data.token;
    //     setSubmitting(false);
    //   })
    //   .catch(() => {
    //     setSubmitting(false);
    //   });
  },
  displayName: "LoginForm",
})(LoginFormConnected);

export default LoginFormContainer;
