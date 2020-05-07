import React, { useState } from "react";
import { connect } from "react-redux";
import { filesApi } from "utils/api";

import { ChatInput as ChatInputBase } from "components";

import { messagesActions, attachmentsActions } from "redux/actions";

const ChatInput = (props) => {
  const {
    dialogs: { currentDialogId },
    attachments,
    fetchSendMessage,
    setAttachments,
    removeAttachment,
  } = props;
  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;
  const [inputStatus, setInputStatus] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState("");
  const [isLoading, setLoading] = useState(false);
  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const sendAudio = (audioId) => {
    return fetchSendMessage({
      text: null,
      dialogId: currentDialogId,
      attachments: [audioId],
    });
  };

  const sendMessage = () => {
    if (isRecording) {
      mediaRecorder.stop();
    } else if (inputStatus) {
      fetchSendMessage({
        text: inputStatus,
        dialogId: currentDialogId,
        attachments: attachments.map((file) => file.uid),
      });
      setInputStatus("");
      setAttachments([]);
    }
  };
  const handleSendMessage = (e) => {
    if (e && e.keyCode === 13) {
      sendMessage();
    } else {
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

  const onSelectFiles = async (files) => {
    let uploaded = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uid = Math.round(Math.random() * 1000);
      uploaded = [
        ...uploaded,
        {
          uid,
          name: file.name,
          status: "uploading",
        },
      ];
      setAttachments(uploaded);
      // eslint-disable-next-line no-loop-func
      await filesApi.upload(file).then(({ data }) => {
        uploaded = uploaded.map((item) => {
          if (item.uid === uid) {
            return {
              status: "done",
              uid: data.file._id,
              name: data.file.filename,
              url: data.file.url,
            };
          }
          return item;
        });
      });
    }
    setAttachments(uploaded);
  };

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
  };
  const onRecording = (stream) => {
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.start();

    recorder.onstart = () => {
      setIsRecording(true);
    };

    recorder.onstop = () => {
      setIsRecording(false);
    };

    recorder.ondataavailable = (e) => {
      const file = new File([e.data], "audio.webm");
      setLoading(true);
      filesApi.upload(file).then(({ data }) => {
        sendAudio(data.file._id);
        setLoading(false);
      });
    };
  };

  const onError = (err) => {
    console.log("The following error occured: " + err);
  };

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const onHideRecording = () => {
    setIsRecording(false);
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
      isRecording={isRecording}
      handleStartRecording={handleStartRecording}
      onRecord={onRecord}
      onHideRecording={onHideRecording}
      removeAttachment={removeAttachment}
      isLoading={isLoading}
    />
  );
};

export default connect(
  ({ dialogs, attachments }) => ({ dialogs, attachments: attachments.items }),
  {
    ...messagesActions,
    ...attachmentsActions,
  }
)(ChatInput);
