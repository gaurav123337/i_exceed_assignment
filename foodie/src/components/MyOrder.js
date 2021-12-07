import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";
import { addCount } from "actions/action";


const MyOrder = (props) => {
  const { cartDesc, orderId } = props;
  console.log(cartDesc, "cartDesc");

  return (
    <>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {
          cartDesc ? (cartDesc.length > 0 && (cartDesc.map((item, index) => {
            return (
              <ListItem alignItems="flex-start" >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.imagePath} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.itemName}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.qty}
                      </Typography>
                      —{item.desc}
                    </React.Fragment>
                  }
                />
              </ListItem>
            )
          }))
          ) : null
        }
        {/* <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={cartDesc.itemName}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {cartDesc.qty}
                </Typography>
                {cartDesc.desc}
              </React.Fragment>
            }
          />
        </ListItem>
        {orderId}
        <Divider variant="inset" component="li" /> */}
        {/* <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem> */}

      </List>
    </>
  );
};

MyOrder.propTypes = {};

export default MyOrder;
