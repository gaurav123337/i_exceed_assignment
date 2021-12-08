import React from "react";
import ItemList from "components/ItemList";

import EnhanceListItemHOC from "HOC/EnhanceListItemHOC";

const ProductListHOC = EnhanceListItemHOC(ItemList);

const ShowProducts = () => {
  return (
    <>
      <ProductListHOC />
    </>
  )
}

export default ShowProducts;
