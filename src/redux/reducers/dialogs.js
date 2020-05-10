const initialState = {
  items: [],
  currentDialogId: window.location.pathname.split("dialog/")[1],
  isLoading: true,
  errorLoading: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "DIALOGS:SET_ITEMS":
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case "DIALOGS:FAILURE":
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };

    case "DIALOGS:LAST_MESSAGE_READED_STATUS":
      return {
        ...state,
        items: state.items.map((dialog) => {
          if (dialog._id === payload.dialogId) {
            dialog.lastMessage.readed = true;
          }
          return dialog;
        }),
      };
    case "DIALOGS:SET_CURRENT_DIALOG_ID":
      return {
        ...state,
        currentDialogId: payload,
      };
    default:
      return state;
  }
};
