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
  setTimeout(1000);
}
export default Notifications;



// Name of poster
// time of posting
// date of posting
// post
// cam liked your post
// cam commented on your post
// you've been tagged in a post by cam
// someone liked your post - link to post that was liked
// has to have an ID associated with it

// someone have application rerender so that the activity feed and notifications are updated
// create a notification when someone creates an event?
// incriment a number in user profile and push that update to the user?
// set a time on the notifications to update every 1 min

//Timer
// create while(true) loop
// create timer component which doesn't return anything just calls NotificationsContainer
// set time at bottom of component
// call timerComponent in TopNavbar.js
