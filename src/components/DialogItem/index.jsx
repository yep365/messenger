import React from "react";

import { Time, IconReaded } from "../";
import "./DialogItem.scss";

const DialogItem = ({ user, message, date }) => (
  <div className="dialogs__item">
    <div className="dialogs__item-avatar">
      {/* <img src="{user.avatar}" alt={`${user.fullname} avatar`} /> */}

      <img
        src="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        alt=""
      />
    </div>
    <div className="dialog__item-info">
      <div className="dialog__item-info-top">
        <b>Фёдор Достаевский</b>
        <span>
          <Time date={date} />
        </span>
      </div>
      <div className="dialog__item-info-buttom">
        <p>
          Мы все свидетельствуем Вам глуюочайшее наше почтение и целуем Ваши
          ручкиб дражащий паенька: Михайла, Фёдор, Варвара и Андрюша
        </p>
        <IconReaded idMe={true} isReaded={false} />
      </div>
    </div>
  </div>
);

export default DialogItem;
