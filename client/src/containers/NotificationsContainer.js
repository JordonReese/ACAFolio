import { connect } from "react-redux";
import Notifications from "../components/Notifications.js";
import { updateNotification } from "../actions";

function mapStateToProps(state) {
  return {
    notifications: [{
                      "userHandle" : "CraigC",
                      "dateTime" : "Today",
                      "notification" : " tagged you in a post!"
                   },
                   {
                     "userHandle" : "CamG",
                      "dateTime" : "Tomorrow",
                      "notification" : " liked your post!"

                   },
                   {
                     "userHandle" : "RenataE",
                      "dateTime" : "Yesterday",
                      "notification" : " sent you a message!"

                   }]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // updateNotification:function(notification){
    //   const action = updateNotification(notification);
    //   dispatch(action);
    // }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Notifications);
