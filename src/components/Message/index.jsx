import React from "react";
import PropTypes from "prop-types";
// import formatDistanceToNow from "date-fns";
// import * as formatDistanceToNow from "date-fns/format_Distance_To_Now";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import { Button as BaseButton } from "antd";
import classNames from "classnames";

import "./Message.scss";

const Message = ({ avatar, user, text, date }) => (
  <div className="message">
    <div className="message__avatar">
      <img src={avatar} alt={`User ${user.fullname}`} />
    </div>
    <div className="message__content">
      <div className="message__bubble">
        <p className="message__text">{text}</p>
      </div>
      <span className="message__date">
        {formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}
      </span>
    </div>
  </div>
);

Message.defaultProps = {
  user: {}
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object
};
export default Message;
