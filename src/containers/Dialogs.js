import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions";
import socket from "core/socket";

import { Dialogs as BaseDialogs, DialogItem } from "../components";

const Dialogs = ({
  fetchDialogs,
  currentDialogId,
  items,
  userId,
  errorLoading,
  isLoading,
  user,
}) => {
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

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emptyItems = [];
  for (let i = 0; i < 20; i++) {
    emptyItems.push(
      <DialogItem key={i} isLoading={isLoading} isOnline={false} />
    );
  }

  return (
    <BaseDialogs
      userId={userId}
      items={filtered}
      emptyItems={emptyItems}
      isLoading={isLoading}
      inputvalue={inputValue}
      onSearch={onChangeInput}
      errorLoading={errorLoading}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs, user }) => dialogs, dialogsActions)(Dialogs);
