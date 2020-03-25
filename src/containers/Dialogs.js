import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({ items, userId }) => {
  const [inputValue, setInputValue] = useState("");
  let filtered = Array.from(items);
  const onChangeInput = e => {
    const value = e.target.value;
    filtered = filtered.dilter(
      dialog => dialog.user.fullname.indexOf(value) >= 0
    );
    setInputValue(e.target.value);
  };
  return (
    <BaseDialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputvalue={inputValue}
    />
  );
};

export default Dialogs;
