import React from "react";
import orderBy from "lodash/orderBy";
import isToday from "date-fns/isToday";

import DialogItem from "../DialogItem";

import "./Dialogs.scss";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["asc"]).map(item => (
      <DialogItem key={item._id} isMe={item._id === userId} {...item} />
    ))}
  </div>
);

export default Dialogs;
