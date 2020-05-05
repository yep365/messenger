import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions";
import socket from "core/socket";

import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({ fetchDialogs, currentDialogId, items, userId }) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(Array.from(items));

  const onChangeInput = (value = "") => {
    setFiltered(
      items.filter(
        (dialog) =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >
            -1 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0
      )
    );
    setInputValue(value);
  };

  window.fetchDialogs = fetchDialogs;

  useEffect(() => {
    if (!items.lenght) {
      onChangeInput("");
    } //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);
  useEffect(() => {
    fetchDialogs();

    socket.on("SERVER:DIALOG_CREATED", fetchDialogs);
    socket.on("SERVER:NEW_MESSAGE", fetchDialogs);
    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", fetchDialogs);
      socket.removeListener("SERVER:NEW_MESSAGE", fetchDialogs);
    };
  }, []);

  return (
    <BaseDialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputvalue={inputValue}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
