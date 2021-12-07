import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";

import { userData } from "utiltiy/data";

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const { getFieldVal, formVal, resetInputs } = props;
  const navigate = useNavigate();

  const fetchData = (e) => {
    if (userData.id === formVal.name && userData.password === formVal.pwd) {
      setIsLogin(true);
      localStorage.setItem("isLogin", true);
      navigate("/home");
    }
  }

  return (
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
  );
};

Login.propTypes = {};

export default Login;
