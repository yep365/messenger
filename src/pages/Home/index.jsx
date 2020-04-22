import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
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

            <EllipsisOutlined style={{ fontSize: "23px", color: "#08c" }} />
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
