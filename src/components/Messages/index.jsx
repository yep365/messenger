import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../../components";

const Messages = ({ items }) => {
  return items && items.length ? (
    <div>
      {items.map(item => (
        <Message {...item} />
      ))}
    </div>
  ) : (
    <Empty description={"Нет сообщений!"} />
  );
};

Messages.propTypes = {
  items: PropTypes.array
};
export default Messages;
