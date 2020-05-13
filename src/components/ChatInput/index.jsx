import React from "react";
import PropTypes from "prop-types";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { UploadField } from "@navjobs/upload";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import { UploadFiles } from "components";

import "./ChatInput.scss";

const ChatInput = (props) => {
  const {
    sendMessage,
    emojiPickerVisible,
    setInputStatus,
    inputStatus,
    toggleEmojiPicker,
    handleSendMessage,
    addImoji,
    removeAttachment,
    attachments,
    onSelectFiles,
    onRecord,
    isRecording,
    onHideRecording,
    isLoading,
    emojiPopUp,
    parseEmojis,
  } = props;

  return (
    <div className="chat-input">
      <div>
        <div className="chat-input__smile">
          <SmileOutlined
            onClick={toggleEmojiPicker}
            style={{ color: "#464847" }}
          />
        </div>

        {emojiPickerVisible && (
          <div ref={emojiPopUp} className="chat-input__emoji-picker">
            <Picker
              onSelect={(emojiTag) => {
                addImoji(emojiTag);
              }}
              set="apple"
            />
          </div>
        )}

        {isRecording ? (
          <div className="chat-input__record-status">
            <i></i>
            <p>Идёт запись</p>
            <CloseOutlined
              onClick={onHideRecording}
              className="chat-input__record-close-btn"
            />
          </div>
        ) : (
          <Input
            onChange={(e) => setInputStatus(e.target.value)}
            onKeyUp={handleSendMessage}
            size="large"
            placeholder="Введите сообщение"
            value={parseEmojis(inputStatus)}
          />
        )}

        <div className="chat-input__actions">
          <div className="chat-input__camera">
            <UploadField
              onFiles={onSelectFiles}
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
          {isLoading ? (
            <div className="chat-input__send">
              <LoadingOutlined style={{ color: "#464847" }} />
            </div>
          ) : isRecording || inputStatus || attachments.length > 0 ? (
            <div className="chat-input__send">
              <SendOutlined
                onClick={sendMessage}
                style={{ color: "#464847" }}
              />
            </div>
          ) : (
            <div className="chat-input__record-btn">
              <div className="chat-input__audio">
                <AudioOutlined
                  onClick={onRecord}
                  style={{ color: "#464847" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {attachments.length > 0 && (
        <div className="chat-input__attachments">
          <UploadFiles
            attachments={attachments}
            removeAttachment={removeAttachment}
          />
        </div>
      )}
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};
export default ChatInput;
