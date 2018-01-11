// Showing user's notifications
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { NavDropdown, MenuItem } from "react-bootstrap";

function Notifications(props) {

  return (
      <NavDropdown title="Notifications">
        <MenuItem href="#">Notif 1</MenuItem>
        <MenuItem divider />
        <MenuItem href="#">Notif 2</MenuItem>
      </NavDropdown>
  );
}
export default Notifications;
