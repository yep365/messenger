import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined
} from "@ant-design/icons";
import { Input } from "antd";

import "./ChatInput.scss";

const ChatInput = props => {
  const [inputStatus, setInputStatus] = useState("");
  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        <SmileOutlined style={{ color: "#464847" }} />
      </div>
      <Input
        onChange={e => setInputStatus(e.target.value)}
        size="large"
        placeholder="Введите сообщение"
      />
      <div className="chat-input__actions">
        <div className="chat-input__camera">
          <CameraOutlined style={{ color: "#464847" }} />
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
  className: PropTypes.string
};
export default ChatInput;