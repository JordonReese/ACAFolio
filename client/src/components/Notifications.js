// Showing user's notifications
import React from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";
import { NavDropdown, MenuItem } from "react-bootstrap";


function Notifications(props) {

while(true){
  return (
        <NavDropdown title="Notifications">
          <MenuItem href="#">Notif 1</MenuItem>
          <MenuItem divider />
          <MenuItem href="#">Notif 2</MenuItem>
        </NavDropdown>
    );
  }
}

export default Notifications;


// Notification housed in user object as an array
// 1. @ sign generates action call
// 2. Query the database (findy by handle)
// 3. Generate notification "username ${_____} tagged you
// 4. Push message to the notifications array
// 5. Render notification
