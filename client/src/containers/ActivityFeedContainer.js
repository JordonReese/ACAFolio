import { connect } from "react-redux";
import ActivityFeed from "../components/ActivityFeed";
<<<<<<< HEAD
=======
import {deleteActivity} from "../actions";
// import { deleteAddress } from "../actions";
>>>>>>> d3186928b000dfbd9444d1e2a53753a6d7c5006b

function mapStateToProps(state) {

  //sees state object properly but state is empty.

  return {
    activities: state.activities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteActivity: function(id){
      dispatch(deleteActivity(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivityFeed);
