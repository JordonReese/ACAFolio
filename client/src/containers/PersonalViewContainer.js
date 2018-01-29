import PersonalView from "../components/PersonalView";
// import "./App.css";
import { connect } from "react-redux";

// Activity Feed test
import { loadActivities } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadActivities: function () {
      dispatch(loadActivities());
    }
  };
}

export default connect(null,mapDispatchToProps)(PersonalView);
