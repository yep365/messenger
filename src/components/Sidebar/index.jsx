import React from "react";

import { Modal, Button, Select } from "antd";
import { TeamOutlined, EditOutlined } from "@ant-design/icons";
import { Dialogs } from "../../containers";

const { Option } = Select;
const Sidebar = ({
  user,
  users,
  visible,
  onShow,
  onClose,
  onChangeInput,
  onSearch,
  inputValue,
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
        title="Создание диалога"
        visible={visible}
        onOk={onClose}
        onCancel={onClose}
      >
        <Select
          placeholder="Введите имя пользователя"
          value={inputValue}
          onSearch={onSearch}
          onChange={onChangeInput}
          style={{ width: "100%" }}
          notFoundContent={null}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          showSearch
        >
          {options}
        </Select>
      </Modal>
    </div>
  );
};
Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
