import React, { useEffect } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { EllipsisOutlined } from "@ant-design/icons";
import { Popover, Button } from "antd";
import { Messages, ChatInput, Status, Sidebar } from "../../containers";

import "./Home.scss";

import { dialogsActions } from "redux/actions";

const Home = (props) => {
  const { setCurrentDialogId, user } = props;
  useEffect(() => {
    const {
      location: { pathname },
    } = props;

    if (pathname === "/") {
      setCurrentDialogId(null);
    } else {
      const dialogId = pathname.split("/").pop();
      if (dialogId) {
        setCurrentDialogId(dialogId);
      }
    } //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        {user && (
          <div className="chat__dialog">
            <div className="chat__dialog-header">
              <div className="chat__dialog-header-empty" />
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
                  <EllipsisOutlined
                    style={{ fontSize: "23px", color: "#08c" }}
                  />
                </div>
              </Popover>
            </div>
            <Messages />
            <ChatInput />
          </div>
        )}
      </div>
    </section>
  );
};

export default withRouter(
  connect(
    ({ user }) => ({
      user: user.data,
    }),
    dialogsActions
  )(Home)
);
