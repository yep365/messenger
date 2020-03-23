import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SearchOutlined,
  SendOutlined
} from "@ant-design/icons";
import { Input } from "antd";

import "./ChatInput.scss";

const ChatInput = props => {
  const { Search } = Input;
  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        <SmileOutlined />
      </div>
      <Search
        placeholder="Введите текст сообщения..."
        onSearch={value => console.log(value)}
        // style={{ width: 284 }}
      />
      <div className="chat-input__actions">
        <CameraOutlined />
        <AudioOutlined />
        <SendOutlined />
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string
};
export default ChatInput;
