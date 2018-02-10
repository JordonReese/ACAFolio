import { connect } from "react-redux";
import Notifications from "../components/Notifications";

function mapStateToProps(state) {
  return {
    notifications:[
      {
        fromUserHandle:"CamG",
        notification: "You have been tagged",
        dateTime: "dateTime"
      },
      {
        fromUserHandle:"CamG",
        notification: "You have been tagged",
        dateTime: "dateTime"
      }
    ]

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Notifications);
