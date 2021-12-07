import React from "react";
import ItemList from "components/ItemList";
// import Products from "components/Products";
import EnhanceListItemHOC from "HOC/EnhanceListItemHOC";
// import Cart from "components/Cart";

const ProductListHOC = EnhanceListItemHOC(ItemList);

const ShowProducts = () => {
  return (
    <>
      <ProductListHOC />
      {/* <Cart /> */}
    </>
  )
}

export default ShowProducts;
