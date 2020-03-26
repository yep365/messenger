import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import { IconReaded, Avatar } from "../";

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd.MM.yyyy");
  }
};

const DialogItem = ({
  _id,
  user,
  message,
  text,
  date,
  unreaded,
  isMe,
  created_at,
  onSelect
}) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline
    })}
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar">
      {/* <img src="{user.avatar}" alt={`${user.fullname} avatar`} /> */}
      {/* {getAvatar(user.avatar)} */}
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          {/* <Time date={message.created_at} /> */}

          {getMessageTime(new Date(created_at))}
        </span>
      </div>
      <div className="dialogs__item-info-buttom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={true} />}
        {unreaded > 0 && (
          <div className="dialogs__item-unread-count">
            {unreaded > 9 ? "+9" : unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
