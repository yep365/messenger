import React from "react";

import { Modal, Button, Select, Input } from "antd";
import { TeamOutlined, EditOutlined } from "@ant-design/icons";
import { Dialogs } from "../../containers";

import "./Sidebar.scss";

const { Option } = Select;
const { TextArea } = Input;
const Sidebar = ({
  user,
  users,
  visible,
  onShow,
  onClose,
  onChangeInput,
  onSelectUser,
  onSearch,
  inputValue,
  isLoading,
  onModalOk,
  onChangeTextArea,
  messageText,
}) => {
  const options = users.map((user) => (
    <Option key={user._id}>{user.fullname}</Option>
  ));

  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div className="chat__info">
          <TeamOutlined />
          <span>Список диалогов</span>
        </div>
        <EditOutlined onClick={onShow} />
      </div>

      <div className="chat__sidebar-dialogs">
        <Dialogs userId={user && user._id} />
      </div>
      <Modal
        className="modal-create-dialog"
        title="Создание диалога"
        visible={visible}
        onOk={onModalOk}
        onCancel={onClose}
        confirmLoading={isLoading}
        footer={[
          <Button key="back" onClick={onClose}>
            Назад
          </Button>,
          <Button
            disabled={!messageText}
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={onModalOk}
          >
            Создать
          </Button>,
        ]}
      >
        <p style={{ fontWeight: "bold" }}>Введите имя пользователя</p>
        <Select
          placeholder="Введите имя пользователя"
          value={inputValue}
          onSelect={onSelectUser}
          onSearch={onSearch}
          onChange={onChangeInput}
          style={{ width: "100%" }}
          notFoundContent={null}
          defaultActiveFirstOption={true}
          showArrow={false}
          filterOption={false}
          showSearch
        >
          {options}
        </Select>

        <p style={{ fontWeight: "bold" }}>Введите сообщение</p>

        <TextArea
          autoSize={{ minRows: 2, maxRows: 6 }}
          value={messageText}
          onChange={onChangeTextArea}
        />
      </Modal>
    </div>
  );
};
Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
