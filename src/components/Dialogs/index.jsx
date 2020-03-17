import React from "react";
import orderBy from "lodash/orderBy";
import isToday from "date-fns/isToday";

import DialogItem from "../DialogItem";

import "./Dialogs.scss";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desc"]).map(item => (
      <DialogItem
        key={item._id}
        user={item.message.user}
        message={item.message}
        unreaded={0}
        isMe={item.message._id === userId}
      />
    ))}
  </div>
);

export default Dialogs;
