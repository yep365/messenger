import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Popover, Button } from "antd";
import { Messages, ChatInput, Status, Sidebar } from "../../containers";

import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <Status online />
            <Popover
              className="chat__dialog-header-action"
              content={
                <div>
                  <Button>Удалить диалог</Button>
                </div>
              }
              trigger="click"
            >
              <div>
                <EllipsisOutlined style={{ fontSize: "23px", color: "#08c" }} />
              </div>
            </Popover>
          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <ChatInput />
        </div>
      </div>
    </section>
  );
};

export default Home;
