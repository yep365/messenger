import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import { Link } from "react-router-dom";

import { IconReaded, Avatar } from "../";

const getMessageTime = (createdAt) => {
  if (isToday(createdAt)) {
    return format(createdAt, "HH:mm");
  } else {
    return format(createdAt, "dd.MM.yyyy");
  }
};

const DialogItem = ({
  _id,
  message,
  text,
  unreaded,
  isMe,
  created_at,
  currentDialogId,
  lastMessage,
  partner,
  userId,
}) => (
  <Link to={`/dialog/${_id}`}>
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": partner.isOnline,
        "dialogs__item--selected": currentDialogId === _id,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={partner} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{partner.fullname}</b>
          <span>{getMessageTime(new Date(lastMessage.createdAt))}</span>
        </div>
        <div className="dialogs__item-info-buttom">
          <p>
            {lastMessage.user._id === userId
              ? `Вы: ${lastMessage.text}`
              : lastMessage.text}
          </p>
          {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed} />}
          {lastMessage.unreaded > 0 && (
            <div className="dialogs__item-unread-count">
              {lastMessage.unreaded > 9 ? "+9" : lastMessage.unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
