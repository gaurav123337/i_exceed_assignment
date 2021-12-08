import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

import { userData } from "utiltiy/data";

const Login = (props) => {
  const [open, setOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { getFieldVal, formVal, resetInputs } = props;
  const navigate = useNavigate();

  const fetchData = (e) => {
    if (userData.id === formVal.name && userData.password === formVal.pwd) {
      setIsLogin(true);
      localStorage.setItem("isLogin", true);
      navigate("/home");
    } else {
      setErrMsg("Credentials are incorrect");
      setOpen(true);
    }

  }

  return (
    <>
      <Box component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <Input id="my-input" name="name" onChange={(e) => getFieldVal(e)} />

        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input-pwd">Password</InputLabel>
          <Input id="my-input-pwd" name="pwd" onChange={(e) => getFieldVal(e)} />
        </FormControl>
        <FormControl>
          <Button onClick={(e) => fetchData(e)}>Login</Button>
        </FormControl>
      </Box>

      {errMsg && (<Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert severity="error" variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {errMsg}
          </Alert>
        </Collapse>

      </Box>)}
    </>
  );
};

Login.propTypes = {};

export default Login;
