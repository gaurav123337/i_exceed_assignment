import React from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { itemData } from "utiltiy/data";

const ItemList = () => {
  console.log(itemData, "itemData")
  return (
    <>
      <ul>
        {
          itemData ? (itemData.length > 0 && itemData.map((product, index) => {
            return (
              <li key={index}>
                <div style={{ width: "200px" }} className="border-around">
                  <label>Product Name: {product.itemName}</label>
                  <img alt="my product" src={product.imagePath} height={100} width={100} />
                  <p className="text-center w-100">
                    Description : <span>{product.desc}</span>
                  </p>
                  <p className="text-center w-100">
                    Price : <span>{product.price}</span>
                  </p>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>

                    <IconButton color="primary" aria-label="add to shopping cart">
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Stack>
                </div>
              </li>
            )
          })) : null
        }
      </ul>
    </>
  );
};

ItemList.propTypes = {};

export default ItemList;
