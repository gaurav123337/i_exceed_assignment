import React from "react";
import PropTypes from "prop-types";

import Login from "components/Login";
import AddItemHOC from "HOC/AddItemHOC";

const LoginHOC = AddItemHOC(Login);

const Entry = () => {
  return (
    <div>
      <LoginHOC />
    </div>
  );
};

Entry.propTypes = {};

export default Entry;
