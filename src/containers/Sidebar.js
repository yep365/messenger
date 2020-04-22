import React, { useState } from "react";
import { connect } from "react-redux";

import { Sidebar } from "components";

const SidebarContainer = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onClose = () => {
    setVisible(false);
  };
  const onShow = () => {
    setVisible(true);
  };
  const onSearch = () => {};
  const handleChangeInput = (value) => {
    setInputValue(value);
  };

  return (
    <Sidebar
      inputValue={inputValue}
      onClose={onClose}
      visible={visible}
      onShow={onShow}
      onSearch={onSearch}
      onChangeInput={handleChangeInput}
      user={user}
    />
  );
};

export default connect(({ user }) => ({ user: user.data }))(SidebarContainer);
