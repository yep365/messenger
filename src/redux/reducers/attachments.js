const initialState = {
  items: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ATTACHMENTS:SET_ITEMS":
      return {
        ...state,
        items: [...state.items, payload],
      };

    default:
      return state;
  }
};
