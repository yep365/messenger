import React, { useState } from "react";
import { connect } from "react-redux";
import { userApi, dialogsApi } from "utils/api";

import { Sidebar } from "components";

const SidebarContainer = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("Преподователь или студент");
  const [messageText, setMessageText] = useState("Привет!");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const onShow = () => {
    setVisible(true);
  };

  const onSearch = (value) => {
    setIsLoading(true);
    userApi
      .findUsers(value)
      .then(({ data }) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onAddDialog = () => {
    dialogsApi
      .create({
        partner: selectedUserId,
        text: messageText,
      })
      .then(onClose)
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleChangeInput = (value) => {
    setInputValue(value);
  };
  const onSelectUser = (userId) => {
    console.log(userId);
    setSelectedUserId(userId);
  };
  const onChangeTextArea = (e) => {
    setMessageText(e.target.value);
  };
  return (
    <Sidebar
      inputValue={inputValue}
      onClose={onClose}
      visible={visible}
      onShow={onShow}
      onSelectUser={onSelectUser}
      onSearch={onSearch}
      onChangeInput={handleChangeInput}
      user={user}
      onModalOk={onAddDialog}
      users={users}
      messageText={messageText}
      onChangeTextArea={onChangeTextArea}
      isLoading={isLoading}
    />
  );
};

export default connect(({ user }) => ({ user: user.data }))(SidebarContainer);
