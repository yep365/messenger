import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import { Link } from "react-router-dom";

import { isAudio } from "../../utils/helpers";

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
}) => {
  const renderLastMessage = (message, userId) => {
    let text = "";
    //TODO: see how isAduio works and make it work there
    if ((!message.text && isAudio(message.attachments)) === 0) {
      text = "аудиозапись";
    } else if (!message.text && message.attachments.length) {
      text = "прикреплённый файл";
    } else {
      text = message.text;
    }
    return `${message.user.id === userId ? "Вы: " : ""}${text}`;
  };
  return (
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
            <p>{renderLastMessage(lastMessage, userId)}</p>
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
};

export default DialogItem;
