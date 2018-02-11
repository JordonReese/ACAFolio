import { connect } from "react-redux";
import Notifications from "../components/Notifications.js";
import { updateNotification } from "../actions";

function mapStateToProps(state) {
  return {
    notifications:state.currentProfile.notifications

  };
}
//     notifications:[
//       {
//         fromUserHandle:"CamG",
//         notification: "You have been tagged",
//         dateTime: "dateTime"
//       },
//       {
//         fromUserHandle:"CamG",
//         notification: "You have been tagged",
//         dateTime: "dateTime"
//       }
//     ]

//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    // updateNotification:function(notification){
    //   const action = updateNotification(notification);
    //   dispatch(action);
    // }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Notifications);
