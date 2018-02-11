// Showing user's notifications
import React, { Component } from "react";
import { NavDropdown, MenuItem } from "react-bootstrap";


class Notifications extends Component {
    constructor(props){
      super(props);
      this.state = {
        fromUserHandle: "Jordon",
        notification: "has commented on your post!",
        dateTime: new Date(),
        visible: true,
        notificationNumber: 4
      }
    }

    handleClick(event, ACTION, notificationArray, notificationId) {
      event.preventDefault();
      switch(ACTION) {
        case "DELETE":
          notificationArray.splice(notificationId, 1);
          this.props.updateNotifications(this.props.notificationId)
    }



  }





    render(){
    function displayNotifications() {
      while(this.state.notificationNumber > 0){
          <NavDropdown title="Notifications">
            <MenuItem href="#">Notif 1</MenuItem>
            <MenuItem divider />
            <MenuItem href="#">Notif 2</MenuItem>
          </NavDropdown>
        }
      }


      return (
        {displayNotifications}
        )
      }


}



export default Notifications;

/*

display, delete yours, add others
display - go to currentProfile(part of Global State - not built), which will contain notifications array and display
delete - delete only your notifications - (passed into props) create new array with all notificaitons isnce you cant edit props - pass new array to update function (which updates profile) update the specific object in profile, notifications, done in the notifications component and only effects your personal array
add - get a list of all user handles[array that I'll loop on], use the handle found from createactivity to find profile by handle, take notifications element - add notification by array.push, update the profile by passing the notifications array back using the updateNotifications function,

create fake notifications array and build the funcations to visible, add, delete



*/

// Notification housed in user object as an array
// 1. @ sign generates action call
// 2. Query the database (findy by handle)
// 3. Generate notification "username ${_____} tagged you
// 4. Push message to the notifications array
// 5. Render notification
