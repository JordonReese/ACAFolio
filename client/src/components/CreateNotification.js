// Used to create a custome post on the activity feed


import React, {Component} from "react";

class NotificationEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      actor: "Jordon",    // The creator of the notification
      verb: "liked",      // The action being made by the creator
      object: "comment",  // The object for which they are performing the action on
      target: "Craig",    // Whose notification array is updated
      visible: true,      // Have notifications been hovered over?
    }
  }


  render() {
    return (
      

    )
  }
}

















export default CreateNotification;
