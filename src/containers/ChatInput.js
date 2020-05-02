import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { filesApi } from "utils/api";

import { ChatInput as ChatInputBase } from "components";

import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  const [inputStatus, setInputStatus] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState("");

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
              url: data.file.url,
              status: "done",
            };
          }
          return item;
        })
      );
    });
  };

  const onSelectFiles = (files) => {
    let uploaded = [];
    for (let i = 0; i < files.length; i++) {
      const uid = Math.round(Math.random() * 1000);
      const file = files[i];
      uploaded.push({
        uid,
        name: file.name,
        status: "uploading",
        file,
      });
    }
    setAttachments(uploaded);
    uploaded.forEach((item) => {
      onUpload(item.file, item.uid);
    });
  };

  if (!currentDialogId) {
    return null;
  }

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
