import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../../components";

const Messages = ({ items }) => {
  console.log(items, 123);
  return items && items.length > 0 ? (
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
