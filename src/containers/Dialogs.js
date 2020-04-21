import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions";
import socket from "core/socket";

import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({
  fetchDialogs,
  setCurrentDialogId,
  currentDialogId,
  items,
  userId,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(Array.from(items));

  const onChangeInput = (value = "") => {
    setFiltered(
      items.filter(
        (dialog) =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >
            -1 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >
            -1
      )
    );
    setInputValue(value);
  };
  const onNewDialog = () => {
    fetchDialogs();
  };

  useEffect(() => {
    if (items.lenght) {
      onChangeInput("");
    }
  }, [items]);
  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltered(items);
    }
    socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
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
