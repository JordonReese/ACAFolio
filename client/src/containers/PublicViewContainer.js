import PublicView from "../components/PublicView";
// import "./App.css";
import { connect } from "react-redux";

// Activity Feed test
import { loadProfile } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadProfile: function (profile) {
      dispatch(loadProfile(profile));
    }
  };
}

export default connect(null,mapDispatchToProps)(PublicView);
