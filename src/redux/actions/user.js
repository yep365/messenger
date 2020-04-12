import { openNotification } from "utils/helpers";
import { userApi } from "../../utils/api";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserData: () => (dispatch) => {
    userApi.getMe().then(({ data }) => {
      dispatch(Actions.setUserData(data));
    });
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.signin(postData).then(({ data }) => {
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
        window.axios.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
      }
    });
  },
};
export default Actions;
