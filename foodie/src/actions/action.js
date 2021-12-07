export const addToCart = (data) => {
  console.log(data, "In action");
  return {
    type: "GET_CART_ITEM",
    payload: data
  }
}

export const addCount = (data) => {
  console.log(data, "In action");
  return {
    type: "GET_COUNT",
    payload: data
  }
}
