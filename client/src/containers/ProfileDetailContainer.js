// Container does data fetching and then redners its cooresponding sub component.

// regular components are data agnostic and only render markup/styles/UI etc.
import { connect } from "react-redux";
import ProfileDetail from "../components/ProfileDetail";
// import { deleteAddress } from "../actions";

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDetail);
