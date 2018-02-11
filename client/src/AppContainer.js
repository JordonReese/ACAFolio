import { connect } from "react-redux";
import App from "./App.js";
import { createProfile, getUserByEmail, getProfileByEmail } from "./actions";

// import { deleteAddress } from "../actions";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    currentProfile: state.currentProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProfile: function(profile){
      dispatch(createProfile(profile));
    },
    getUserByEmail: function (email) {
    dispatch(getUserByEmail(email));
  },
    getProfileByEmail: function (email) {
    dispatch(getProfileByEmail(email));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
