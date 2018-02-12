import { connect } from "react-redux";
import App from "./App.js";
import { createProfile, getUserByEmail, getProfileByEmail, getProfileDone } from "./actions";

// import { deleteAddress } from "../actions";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    currentProfile: state.currentProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProfile: function(profile) {
      dispatch(createProfile(profile));
    },
    getUserByEmail: function (email) {
    dispatch(getUserByEmail(email));
    },
    getProfileByEmail: function (email) {
    dispatch(getProfileByEmail(email));
    },
    getProfileDone: function (profile) {
    dispatch(getProfileDone(profile));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
