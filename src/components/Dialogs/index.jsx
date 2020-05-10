import React, { useState } from "react";
import orderBy from "lodash/orderBy";
import { Empty, Input } from "antd";
import { SwapOutlined } from "@ant-design/icons";

import DialogItem from "../DialogItem";

import "./Dialogs.scss";
import connectionErr from "../../assets/img/connectionErr.svg";

const Dialogs = ({
  items,
  userId,
  onSearch,
  isLoading,
  inputValue,
  errorLoading,
  currentDialogId,
}) => {
  const { Search } = Input;
  const emptyItems = [];
  for (let i = 0; i < 20; i++) {
    emptyItems.push(
      <DialogItem key={i} isLoading={isLoading} isOnline={false} />
    );
  }

  return (
    <div className="chat__sidebar-wrapper">
      <div className="chat__sidebar-search">
        <Search
          placeholder="Поиск по контактам"
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 297 }}
          value={inputValue}
        />
      </div>
      <div className="dialogs">
        {errorLoading ? (
          <div className="chat__sidebar-error">
            <Empty
              image={connectionErr}
              description={
                "Ошибка,\n сервер не справился,\n извините нас пожалуйста! "
              }
            >
              <SwapOutlined />
            </Empty>
          </div>
        ) : items.length ? (
          orderBy(items, ["created_at"], ["desc"]).map((item) => (
            <DialogItem
              key={item._id}
              isLoading={isLoading}
              isMe={item.author._id === userId}
              userId={userId}
              currentDialogId={currentDialogId}
              {...item}
            />
          ))
        ) : isLoading ? (
          emptyItems
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={"Нет собеседников"}
          />
        )}
      </div>
    </div>
  );
};

export default Dialogs;
