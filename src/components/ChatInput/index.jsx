import React, { useState, useEffect } from "react";
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

import { UploadFiles } from "components";

import { useOutside } from "utils/helpers";

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
  const addImoji = ({ colons }) => {
    setInputStatus((inputStatus + " " + colons).trim());
  };
  const handleOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setEmojiPickerVisible(false);
    }
  };
  useEffect(() => {
    const el = document.querySelector(".chat-input__smile");

    document.addEventListener("click", handleOutsideClick.bind(this, el));
    return () => {
      document.removeEventListener("click", handleOutsideClick.bind(this, el));
    };
    console.log(el);
  }, []);

  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        <div className="chat-input__emoji-picker">
          {emojiPickerVisible && (
            <Picker
              onSelect={(emojiTag) => {
                addImoji(emojiTag);
              }}
              set="apple"
            />
          )}
        </div>
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
      <div>
        <UploadFiles />
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};
export default ChatInput;
