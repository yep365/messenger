import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { UploadField } from "@navjobs/upload";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import "./ChatInput.scss";

const ChatInput = (props) => {
  const [inputStatus, setInputStatus] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState("");

  const { onSendMessage, currentDialogId } = props;

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      onSendMessage(inputStatus, currentDialogId);
      setInputStatus("");
    }
  };

  return (
    <div className="chat-input">
      {emojiPickerVisible && (
        <div className="chat-input__emoji-picker">
          <Picker set="apple" />
        </div>
      )}
      <div className="chat-input__smile">
        <SmileOutlined
          onClick={toggleEmojiPicker}
          style={{ color: "#464847" }}
        />
      </div>
      <Input
        onChange={(e) => setInputStatus(e.target.value)}
        onKeyUp={handleSendMessage}
        size="large"
        placeholder="Введите сообщение"
        value={inputStatus}
      />
      <div className="chat-input__actions">
        <div className="chat-input__camera">
          <UploadField
            onFiles={(files) => console.log(files)}
            containerProps={{
              className: "chat-input__actions-upload-btn",
            }}
            uploadProps={{
              accept: ".pdf,.doc,.docx,.txt,.rtf,.jpg,.jpeg,.png,.gif,.bmp",
              multiple: "multyple",
            }}
          >
            <CameraOutlined style={{ color: "#464847" }} />
          </UploadField>
        </div>
        {inputStatus ? (
          <div className="chat-input__send">
            <SendOutlined style={{ color: "#464847" }} />
          </div>
        ) : (
          <div className="chat-input__audio">
            <AudioOutlined style={{ color: "#464847" }} />
          </div>
        )}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};
export default ChatInput;
