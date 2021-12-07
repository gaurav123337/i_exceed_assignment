import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import uniqid from "uniqid";

import MyOrder from "components/MyOrder";

import { useDispatch, useSelector } from "react-redux";
import { addCount } from "actions/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  console.log(uniqid());
  // const cartItems = useSelector(state => state);

  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [orderId, setOrderId] = useState(0);
  const [qty, setQty] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const generateOrder = () => {
    let orderId = uniqid();
    setOrderId(orderId)
    handleOpen();
  };

  console.log(cartItems, "Cart Items")

  useEffect(() => {
    //console.log(count, "caount value");
    dispatch(addCount(count));
  }, [count]);

  const increaseItem = (item) => {

    // console.log(item);
    setCount(count + 1);
    setPrice(price + +item.price);
    item.qty = item.qty + 1;
  }

  const decreaseItem = (item) => {
    if (item.qty > 0) {
      item.qty = item.qty - 1;
      setCount(count - 1);
      setPrice(price - +item.price);
    }
  }

  return (
    <>
      {/* <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
              <th scope="col">Qty</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems ? (cartItems.length > 0 && cartItems.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row" >{index}</th>
                    <td>{item.itemName}</td>
                    <td>{item.price}</td>
                    <td><button onClick={(e) => increaseItem(item)} className="btn btn-primary">+</button>
                      <button onClick={(e) => decreaseItem(item)} className="btn btn-danger">-</button></td>
                    <td>{item.qty}</td>
                  </tr>
                )
              })) : null
            }
          </tbody>
        </table>
        <p>
          Item count: {count}
          <span>Total : {price}</span>
        </p>
      </div> */}

      {/* <p>
        Item count: {count}
        <span>Total : {price}</span>
      </p> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>Total Cart Price: {price} - Item Quantity: {count}</caption>
          <TableHead>
            <TableRow>
              <TableCell align="right">Item Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
              <TableCell align="right">Qty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.length > 0 && cartItems.map((item, index) => (
              <TableRow key={item.id} >
                <TableCell align="right" component="th" scope="row">
                  {item.itemName}
                </TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right"><button onClick={(e) => increaseItem(item)} className="btn btn-primary">+</button>
                  <button onClick={(e) => decreaseItem(item)} className="btn btn-danger">-</button>
                </TableCell>

                <TableCell align="right">{item.qty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {cartItems.length > 0 && <Button onClick={generateOrder}>Place my order</Button>}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Your Order Id - {orderId}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You destination to amazing food.

              {
                cartItems ? (cartItems.length > 0 && (<MyOrder cartDesc={cartItems} orderId={orderId} />)) : null
              }
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

Cart.propTypes = {};

export default Cart;
