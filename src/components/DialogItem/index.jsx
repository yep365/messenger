import React from "react";

import { Time, IconReaded } from "../";
import "./DialogItem.scss";

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        alt=""
      />
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, date }) => (
  <div className="dialogs__item">
    <div className="dialogs__item-avatar">
      {/* <img src="{user.avatar}" alt={`${user.fullname} avatar`} /> */}
      {getAvatar(
        "https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Фёдор Достаевский</b>
        <span>
          {/* <Time date={date} /> */}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-buttom">
        <p>
          Мы все свидетельствуем все свидетельствуемвсе свидетельствуемвсе
          свидетельствуем
        </p>
        {/* <IconReaded isMe={true} isReaded={false} /> */}
        <div className="dialogs__item-unread-count">3</div>
      </div>
    </div>
  </div>
);

export default DialogItem;
