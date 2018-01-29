import { connect } from "react-redux";
import ActivityFeed from "../components/ActivityFeed";
// import { deleteAddress } from "../actions";

function mapStateToProps(state) {

  //sees state object properly but state is empty.

  return {
    activities: state.activities
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivityFeed);
