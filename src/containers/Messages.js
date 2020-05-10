import React, { useState, useEffect, useRef } from "react";
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
  attachments,
}) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [linkOnAttachment, setLinkOnAttachment] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const [blockHeight, setBlockHeight] = useState(145);
  const messagesRef = useRef(null);
  let typingTimeoutId = null;

  const onNewMessage = (data) => {
    addMessage(data);
  };

  const toggleIsTyping = () => {
    setIsTyping(true);
    clearInterval(typingTimeoutId);
    typingTimeoutId = setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  useEffect(() => {
    socket.on("DIALOGS:TYPING", toggleIsTyping);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (attachments.length) {
      setBlockHeight(255);
    } else {
      setBlockHeight(145);
    }
  }, [attachments]);

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:NEW_MESSAGE", onNewMessage);
    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDialogId]);

  useEffect(() => {
    if (items) {
      messagesRef.current.scrollTo(0, 9999999999);
    }
  }, [items]);

  return currentDialogId ? (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading}
      onRemoveMessage={removeMessageById}
      previewImage={previewImage}
      setPreviewImage={setPreviewImage}
      setLinkOnAttachment={setLinkOnAttachment}
      linkOnAttachment={linkOnAttachment}
      blockHeight={blockHeight}
      isTyping={isTyping}
    />
  ) : (
    <Empty
      style={{ marginTop: "300px" }}
      description={"Выбирете собесдника!"}
    />
  );
};

export default connect(
  ({ dialogs, messages, user, attachments }) => ({
    attachments: attachments.items,
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Messages);
