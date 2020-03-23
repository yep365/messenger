import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined
} from "@ant-design/icons";
import { Input } from "antd";

import "./ChatInput.scss";

const ChatInput = props => {
  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        <SmileOutlined />
      </div>
      <Input size="large" placeholder="large size" />
      <div className="chat-input__actions">
        <div className="chat-input__camera">
          <CameraOutlined />
        </div>
        <div className="chat-input__audio">
          <AudioOutlined />
        </div>

        <div className="chat-input__send">
          <SendOutlined />
        </div>
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string
};
export default ChatInput;
