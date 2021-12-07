import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const MyOrder = (props) => {
  const { cartDesc } = props;
  console.log(cartDesc, "cartDesc");

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {
          cartDesc ? (cartDesc.length > 0 && (cartDesc.map((item, index) => {
            return (
              <>
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
                <Divider variant="inset" component="li" />
              </>
            )
          }))
          ) : null
        }
      </List>
    </>
  );
};

MyOrder.propTypes = {};

export default MyOrder;
