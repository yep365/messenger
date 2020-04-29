import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions";
import socket from "core/socket";

import { Empty } from "antd";

import { Messages as BaseMessages } from "../components";

const Messages = ({
  currentDialogId,
  fetchMessages,
  addMessage,
  items,
  isLoading,
  user,
  removeMessageById,
}) => {
  const messagesRef = useRef(null);

  const onNewMessage = (data) => {
    addMessage(data);
  };
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:NEW_MESSAGE", onNewMessage);
    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    };
  }, [currentDialogId]);

  useEffect(() => {
    if (currentDialogId) {
      messagesRef.current.scrollTo(0, 999999999);
    }
  }, [currentDialogId]);

  return currentDialogId ? (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading}
      onRemoveMessage={removeMessageById}
    />
  ) : (
    <Empty
      style={{ marginTop: "300px" }}
      description={"Выбирете собесдника!"}
    />
  );
};

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Messages);
