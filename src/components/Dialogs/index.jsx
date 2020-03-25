import React from "react";
import orderBy from "lodash/orderBy";

import DialogItem from "../DialogItem";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desc"]).map(item => (
      <DialogItem key={item._id} isMe={item._id === userId} {...item} />
    ))}
  </div>
);

export default Dialogs;
