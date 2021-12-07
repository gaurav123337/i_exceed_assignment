const cartReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_COUNT":
      console.log({ ...state, count: action.payload })
      return { ...state, count: action.payload };
    case "GET_CART_ITEM":
      console.log({ ...state, items: [action.payload] });
      let x = { ...state, items: [...state.items, action.payload] };
      let uniqueData = [];
      uniqueData = x.items.filter((val, index) => x.items.indexOf(val) === index);
      console.log(uniqueData, "uniqueData");
      return { ...state, items: [...uniqueData] };
    default:
      return state;
  }
}

export default cartReducer;
