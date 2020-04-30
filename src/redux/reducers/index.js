import { combineReducers } from "redux";

const reducers = ["user", "messages", "dialogs", "attachments"];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);
