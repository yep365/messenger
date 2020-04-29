import React, { useEffect } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { EllipsisOutlined } from "@ant-design/icons";
import { Popover, Button } from "antd";
import { Messages, ChatInput, Status, Sidebar } from "../../containers";

import "./Home.scss";

import { dialogsActions } from "redux/actions";

const Home = (props) => {
  useEffect(() => {
    const {
      location: { pathname },
    } = props;
    const dialogsId = pathname.split("/").pop();
    console.log(dialogsId);
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <Status />

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

export default withRouter(
  connect(({ dialogs }) => dialogs, dialogsActions)(Home)
);
