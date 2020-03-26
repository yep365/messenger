import React from "react";
import {
  TeamOutlined,
  EditOutlined,
  EllipsisOutlined
} from "@ant-design/icons";

import "./Home.scss";

import { ChatInput } from "../../components/";
import { Messages, Dialogs } from "../../containers";

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div className="chat__info">
              <TeamOutlined />
              <span>Список диалогов</span>
            </div>
            <EditOutlined />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs userId={0} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-fullname">Александр Пушкин</b>
              <div className="chat__dialog-status">
                <div className="status status--online">online</div>
              </div>
            </div>
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
