const cartReducer = (state = "", action) => {
  console.log(action, "action", state, "state", "In reducer");
  switch (action.type) {
    case "GET_COUNT":
      console.log({ ...state, count: action.payload })
      return { ...state, count: action.payload };
    case "GET_CART_ITEM":
      console.log({ ...state, items: [action.payload] });
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}

export default cartReducer;
