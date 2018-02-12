import { connect } from "react-redux";
import ProfileDetail from "../components/ProfileDetail";
import { deleteProfile, updateProfile, getProfileByEmail } from "../actions";

function mapStateToProps(state) {
  return {
    currentprofile: state.currentProfile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProfile: function(id){
      dispatch(deleteProfile(id));
    },
    getProfileByEmail: function (email) {
      dispatch(getProfileByEmail(email));
    },
    updateProfile: function(id, post) {
      dispatch(updateProfile(id, post));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDetail);
