import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";

import { userData } from "utiltiy/data";

const Login = (props) => {
  const { getFieldVal, formVal, resetInputs } = props;
  const navigate = useNavigate();

  const fetchData = (e) => {
    console.log(formVal);
    if (userData.id === formVal.name && userData.password === formVal.pwd) {
      navigate("/home");
    }
    resetInputs();

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
        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input-pwd">Email address</InputLabel>
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
