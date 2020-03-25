import React from "react";
import orderBy from "lodash/orderBy";
import { Empty, Input } from "antd";

import DialogItem from "../DialogItem";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue }) => {
  const { Search } = Input;
  return (
    <div className="chat__sidebar-wrapper">
      <div className="chat__sidebar-search">
        <Search
          placeholder="Поиск по контактам"
          onChange={e => onSearch(e.target.value)}
          style={{ width: 284 }}
          value={inputValue}
        />
      </div>
      <div className="dialogs">
        {items.length ? (
          orderBy(items, ["created_at"], ["desc"]).map(item => (
            <DialogItem key={item._id} isMe={item._id === userId} {...item} />
          ))
        ) : (
          <Empty description={false} />
        )}
      </div>
    </div>
  );
};

export default Dialogs;
