import React from "react";
import orderBy from "lodash/orderBy";
import { Empty, Input } from "antd";

import DialogItem from "../DialogItem";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId }) => {
  const { Search } = Input;
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
        {items.length ? (
          orderBy(items, ["created_at"], ["desc"]).map((item) => (
            <DialogItem
              key={item._id}
              isMe={item.author._id === userId}
              currentDialogId={currentDialogId}
              {...item}
            />
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={"Нет такого собеседника"}
          />
        )}
      </div>
    </div>
  );
};

export default Dialogs;
