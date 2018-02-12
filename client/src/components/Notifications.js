// Showing user's notifications
import React from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";
import { NavDropdown, MenuItem } from "react-bootstrap";
// import CreateNotification from "./CreateNotification";

function Notifications(props) {
  let notifTitle = `Notifications (${props.notifications.length})`
  console.log(props.notifications)
  let mapNotifications = props.notifications.map(notification => {
    return (
          <MenuItem className="navDropDown" href="#">
            <h6>From: {notification.fromUserHandle}</h6>
            <p>{notification.notification}</p>
            <MenuItem divider />
          </MenuItem>
      )
  })
  
  console.log(mapNotifications)

while(true){
  return (
        <NavDropdown title={notifTitle}>
          {mapNotifications}
        </NavDropdown>
    );
  }
  // setTimeout(1000);
}

export default Notifications;

