import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "actions/action";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";


import { itemData } from "utiltiy/data";

const useStyles = makeStyles({
  root: {
    listStyle: "none",
    padding: "10px 30px",
    display: "inline-block",
    float: "left"
  },
});

const ItemList = (props) => {
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
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

              <li key={index} className={classes.root}>
                <Card sx={{ width: 300 }} elevation={3}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.imagePath}
                    alt={product.itemName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.itemName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => dispatch(addToCart(product, { type: "GET_CART_ITEM" }))}>Add to cart</Button>
                  </CardActions>
                </Card>
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
