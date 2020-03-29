import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions";
import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({
  fetchDialogs,
  setCurrentDialogId,
  currentDialogId,
  items,
  userId
}) => {
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

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltered(items);
    }
  }, [items]);

  return (
    <BaseDialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputvalue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
