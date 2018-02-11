import { connect } from "react-redux";
import Notifications from "../components/Notifications";

function mapStateToProps(state) {
  return {
    currentprofile: state.currentProfile
  }
}


function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Notifications);
