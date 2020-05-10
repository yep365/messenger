import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import { parseEmojis } from "utils/helpers";

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
  isMe,
  currentDialogId,
  lastMessage,
  partner,
  userId,
  isLoading,
}) => {
  const renderLastMessage = (message, userId) => {
    let text = "";
    if (!message.text && message.attachments.length) {
      text = "прикреплённый файл";
    } else {
      text = message.text;
    }
    return `${message.user.id === userId ? "Вы: " : ""}${parseEmojis(text)}`;
  };
  return (
    <Link to={`${isLoading ? `#` : `/dialog/${_id}`}`}>
      <div
        className={classNames("dialogs__item", {
          "dialogs__item--online": partner && partner.isOnline,
          "dialogs__item--selected": partner && currentDialogId === _id,
        })}
      >
        <div className="dialogs__item-avatar">
          {isLoading ? (
            <Skeleton.Avatar active="true" size="default" shape="circle" />
          ) : (
            <Avatar user={partner} />
          )}
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            {isLoading ? (
              <Skeleton.Input
                style={{ width: "168px", height: "14px" }}
                active="true"
                size="1"
              />
            ) : (
              <b>{partner && partner.fullname}</b>
            )}
            <span>
              {lastMessage && getMessageTime(new Date(lastMessage.createdAt))}
            </span>
          </div>
          <div className="dialogs__item-info-buttom">
            {isLoading ? (
              <Skeleton.Input
                style={{ width: "236px", height: "16px" }}
                active="true"
                size="1"
              />
            ) : (
              <div>
                <p>{renderLastMessage(lastMessage, userId)}</p>
                {isMe && (
                  <IconReaded isMe={isMe} isReaded={lastMessage.readed} />
                )}
                {lastMessage.unread > 0 && (
                  <div className="dialogs__item-unread-count">
                    {lastMessage.unread > 9 ? "+9" : lastMessage.unread}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DialogItem;
