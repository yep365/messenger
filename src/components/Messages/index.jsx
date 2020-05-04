import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Empty, Spin, Modal } from "antd";
import classNames from "classnames";

import { Message } from "../../components";

import "./Messages.scss";

const Messages = ({
  onRemoveMessage,
  blockRef,
  isLoading,
  items,
  user,
  previewImage,
  setPreviewImage,
}) => {
  const [chatInputHeight, setChatInputHeight] = useState(100);

  useEffect(() => {
    setChatInputHeight(
      chatInputHeight + document.querySelector(".chat-input").clientHeight
    );
  }, []);
  return (
    <div
      className="chat__dialog-messages"
      style={{
        height: `calc(100% - ${chatInputHeight}px)`,
      }}
    >
      <div
        ref={blockRef}
        className={classNames("messages", { "messages--loading": isLoading })}
      >
        {isLoading ? (
          <Spin size="large" tip="Загружаю сообщения..."></Spin>
        ) : items && !isLoading ? (
          items.length > 0 ? (
            <div>
              {items.map((item) => (
                <Message
                  key={item._id}
                  {...item}
                  isMe={user._id === item.user.id}
                  onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                  setPreviewImage={setPreviewImage}
                />
              ))}
            </div>
          ) : (
            <Empty description={"Вы пока не общались...\nИсправьте это!"} />
          )
        ) : (
          !items && (
            <Empty
              style={{ marginTop: "300px" }}
              description={"Выбирете собесдника!"}
            />
          )
        )}
        <Modal
          visible={!!previewImage}
          title="Прикреплённый файл"
          onCancel={() => {
            setPreviewImage(null);
          }}
          cancelText="Закрыть"
          footer={null}
        >
          <img src={previewImage} style={{ width: "100%" }} alt="Preview" />
        </Modal>
      </div>
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};
export default Messages;
