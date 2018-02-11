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

// let notificationMap = props.notifications.map(notification, ()=> {
//
// })

// Notification housed in user object as an array
// 1. @ sign generates action call
// 2. Query the database (findy by handle)
// 3. Generate notification "username ${_____} tagged you
// 4. Push message to the notifications array
// 5. Render notification

// 1.
// Event listener/Key listener - in createActivityFeed and CreateCommentsComponent
//


//Timer
// create while(true) loop
// create timer component which doesn't return anything just calls NotificationsContainer
// set time at bottom of component
// call timerComponent in TopNavbar.js
