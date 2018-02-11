import PersonalView from "../components/PersonalView";
// import "./App.css";
import { connect } from "react-redux";

// Activity Feed test
import { loadActivities } from "../actions";

function mapStateToProps(state) {
  return {
    currentProfile: state.currentProfile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadActivities: function (activity) {
      dispatch(loadActivities(activity));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonalView);
