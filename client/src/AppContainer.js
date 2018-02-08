import { connect } from "react-redux";
import App from "./App.js";
import {createProfile} from "./actions";

// import { deleteAddress } from "../actions";

function mapStateToProps(state) {
  return {
    currentProfile: state.currentProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProfile: function(profile){
      dispatch(createProfile(profile));
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
