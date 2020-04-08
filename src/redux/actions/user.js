import { userApi } from "../../utils/api";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.signin(postData).then(({ data }) => {
      dispatch(Actions.setUserData(data));
    });
  },
};
export default Actions;
