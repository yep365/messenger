import React, { useState } from "react";
import { connect } from "react-redux";

import { ChatInput as ChatInputBase } from "components";

import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  const [inputStatus, setInputStatus] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState("");
  if (!currentDialogId) {
    return null;
  }
  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };
  const sendMessage = () => {
    fetchSendMessage(inputStatus, currentDialogId);
    setInputStatus("");
  };
  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };
  const addImoji = ({ colons }) => {
    setInputStatus((inputStatus + " " + colons).trim());
  };
  const handleOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setEmojiPickerVisible(false);
    }
  };

  return (
    <ChatInputBase
      handleSendMessage={handleSendMessage}
      inputStatus={inputStatus}
      toggleEmojiPicker={toggleEmojiPicker}
      setInputStatus={setInputStatus}
      emojiPickerVisible={emojiPickerVisible}
      setEmojiPickerVisible={setEmojiPickerVisible}
      currentDialogId={currentDialogId}
      handleOutsideClick={handleOutsideClick}
      addImoji={addImoji}
      sendMessage={sendMessage}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
