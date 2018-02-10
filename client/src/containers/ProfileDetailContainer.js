import { connect } from "react-redux";
import ProfileDetail from "../components/ProfileDetail";
import {deleteProfile} from "../actions";

// import { deleteAddress } from "../actions";

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProfile: function(id){
      dispatch(deleteProfile(id));
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDetail);
