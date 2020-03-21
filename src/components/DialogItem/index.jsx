import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import { generateAvatarFromHash } from "../../utils/helpers";
import { IconReaded } from "../";
import "./DialogItem.scss";

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd.MM.yyyy");
  }
};

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        alt=""
      />
    );
  } else {
    console.log(generateAvatarFromHash("49c666cc830c8f66ca0eb4c29a76bbd6"));
  }
};

const DialogItem = ({
  user,
  message,
  text,
  date,
  unreaded,
  isMe,
  created_at
}) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline
    })}
  >
    <div className="dialogs__item-avatar">
      {/* <img src="{user.avatar}" alt={`${user.fullname} avatar`} /> */}
      {getAvatar(user.avatar)}
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
