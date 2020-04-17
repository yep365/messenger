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
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const { token } = data;
        openNotification({
          title: "Отлично!",
          text: "Авторизация успешна.",
          type: "success",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {
        openNotification({
          title: "Ошибка при авторизации",
          text: "Неверный логин или пароль",
          type: "error",
        });
      });
  },
  fetchUserRegister: (postData) => () => {
    return userApi.signUp(postData);
  },
};
export default Actions;
