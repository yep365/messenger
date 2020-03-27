import React, { useEffect } from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions";
import { Messages as BaseMessages } from "../components";

const Dialogs = ({ currentDialogId, fetchMessages, items }) => {
  console.log(items, 333);
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  return <BaseMessages items={items} />;
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items
  }),
  messagesActions
)(Dialogs);
