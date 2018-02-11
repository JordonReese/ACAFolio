import { connect } from "react-redux";
import ProfileDetail from "../components/ProfileDetail";
import {deleteProfile} from "../actions";

// import { deleteAddress } from "../actions";

function mapStateToProps(state) {
  return {
    currentprofile: state.currentProfile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProfile: function(id){
      dispatch(deleteProfile(id));
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDetail);
