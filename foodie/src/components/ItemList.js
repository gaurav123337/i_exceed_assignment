import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "actions/action";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";

import { itemData } from "utiltiy/data";

const ItemList = (props) => {
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(count, "caount value");
  //   dispatch(addToCart(count));
  // }, [count]);

  // const increaseCount = (item) => {
  //   setCount(count + 1);
  //   setPrice(price + item.price);
  //   item.qty = item.qty + 1;
  // }

  // const decreaseCount = (item) => {
  //   if (item.qty > 0) {
  //     item.qty = item.qty - 1;
  //     setCount(count - 1);
  //     setPrice(price - item.price);
  //   }
  // }

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

                    {/* <IconButton aria-label="delete" size="small" onClick={(e) => decreaseCount(product)}>
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>

                    <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => increaseCount(product)}>
                      <AddShoppingCartIcon />
                    </IconButton> */}

                    {/* <p>
                      <span>Count: {product.qty}</span>
                      <span>Total Item Price: {product.price * product.qty}</span>
                    </p> */}
                    <p>
                      <Button onClick={() => dispatch(addToCart(product, { type: "GET_CART_ITEM" }))}>Add to cart</Button>
                    </p>
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
