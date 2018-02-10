import { connect } from "react-redux";
import ProfileDetail from "../components/ProfileDetail";
import {deleteProfile, updateProfile} from "../actions";


function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProfile: function(id){
      dispatch(deleteProfile(id));
  },
    updateProfile: function(id, post) {
      dispatch(updateProfile(id, post));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDetail);
