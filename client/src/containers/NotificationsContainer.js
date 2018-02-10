import { connect } from "react-redux";
import Notifications from "../components/Notifications";
import { updateNotification } from "../actions";

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNotification:function(notification){
      const action = updateNotification(notification);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Notifications);
