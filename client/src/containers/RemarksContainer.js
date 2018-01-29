import { connect } from "react-redux";
import Remarks from "../components/Remarks";

function mapStateToProps(state) {
  return {
    remarks: state.remarks
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Remarks);
