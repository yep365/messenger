import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import { IconReaded, Avatar } from "../";

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd.MM.yyyy");
  }
};

const DialogItem = ({
  _id,
  message,
  text,
  unreaded,
  isMe,
  created_at,
  onSelect,
  currentDialogId,
  lastMessage,
}) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": lastMessage.user.isOnline,
      "dialogs__item--selected": currentDialogId === _id,
    })}
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={lastMessage.user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{lastMessage.user.fullname}</b>
        <span>{getMessageTime(new Date(lastMessage.created_at))}</span>
      </div>
      <div className="dialogs__item-info-buttom">
        <p>{lastMessage.text}</p>
        {isMe && <IconReaded isMe={true} isReaded={true} />}
        {lastMessage.unreaded > 0 && (
          <div className="dialogs__item-unread-count">
            {lastMessage.unreaded > 9 ? "+9" : lastMessage.unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
