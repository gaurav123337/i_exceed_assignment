import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
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



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
  console.log(uniqid(), cartItems, "In cart js");

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

  useEffect(() => {
    dispatch(addCount(count));

  }, [count]);

  const increaseItem = (item) => {
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <caption>Total Cart Price: {price} - Item Quantity: {count}</caption>
          <TableHead>
            <TableRow>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
              <StyledTableCell align="right">Qty</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.length > 0 && cartItems.map((item, index) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.itemName}
                </StyledTableCell>
                <StyledTableCell align="right">{item.price}</StyledTableCell>
                <StyledTableCell align="right"><button onClick={(e) => increaseItem(item)} className="btn btn-primary">+</button>
                  <button onClick={(e) => decreaseItem(item)} className="btn btn-danger">-</button></StyledTableCell>
                <StyledTableCell align="right">{item.qty}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {cartItems.length > 0 && <Button variant="contained" onClick={generateOrder}>Place my order</Button>}

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
