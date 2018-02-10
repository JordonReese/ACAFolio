// Container does data fetching and then redners its cooresponding sub component.

// regular components are data agnostic and only render markup/styles/UI etc.
import { connect } from "react-redux";
import EditProfile from "../components/EditProfile";
import {createProfile} from "../actions";

// function mapStateToProps(state) {
//   return {
//
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    createProfile: (profile)=> {
      dispatch(createProfile(profile));
    }
  };
}

export default connect(null,mapDispatchToProps)(ProfileCreation);
