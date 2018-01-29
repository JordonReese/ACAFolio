import PersonalView from "../components/PersonalView";
// import "./App.css";
import { connect } from "react-redux";

// Activity Feed test
import { loadRemarks } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadRemarks: function () {
      dispatch(loadRemarks());
    }
  };
}

export default connect(null,mapDispatchToProps)(PersonalView);
