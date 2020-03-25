import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({ items, userId }) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(Array.from(items));

  const onChangeInput = value => {
    setFiltered(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setInputValue(value);
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
