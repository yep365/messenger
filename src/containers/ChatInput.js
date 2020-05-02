import React, { useState } from "react";
import { connect } from "react-redux";
import { filesApi } from "utils/api";

import { ChatInput as ChatInputBase } from "components";

import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  const [inputStatus, setInputStatus] = useState("");
  const [attachments, setAttachments] = useState([]);
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

  const onUpload = (file, uid) => {
    filesApi.upload(file).then(({ data }) => {
      setAttachments(
        attachments.map((item) => {
          if (item.uid === uid) {
            item = {
              uid: data.file._id,
              name: data.file.name,
              status: "done",
              url: data.file.url,
            };
          }
          return item;
        })
      );
    });
  };

  const onSelectFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      const uid = Math.round(Math.random() * 1000);
      const file = files[i];
      setAttachments([
        ...attachments,
        {
          uid,
          name: file.name,
          status: "uploading",
        },
      ]);
      onUpload(file, uid);
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
      attachments={attachments}
      onSelectFiles={onSelectFiles}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
