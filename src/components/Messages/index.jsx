import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import { Message } from "../../components";

import "./Messages.scss";

const Messages = ({ isLoading, items }) => {
  return (
    <div className={classNames("messages", { "messages--loading": isLoading })}>
      {isLoading && !items ? (
        <Spin size="large" tip="Загружаю сообщения..."></Spin>
      ) : items && items.length > 0 ? (
        <div>
          {items.map(item => (
            <Message key={item._id} {...item} />
          ))}
        </div>
      ) : (
        <Empty description={"Нет сообщений!"} />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array
};
export default Messages;
