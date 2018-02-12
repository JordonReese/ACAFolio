import PersonalView from "../components/PersonalView";
// import "./App.css";
import { connect } from "react-redux";

// Activity Feed test
import { loadActivities, getProfileByEmail } from "../actions";

function mapStateToProps(state) {
  return {
    currentProfile: state.currentProfile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadActivities: function (activity) {
      dispatch(loadActivities(activity));
    },
    getProfileByEmail: function (email) {
    dispatch(getProfileByEmail(email));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonalView);
