import { connect } from "react-redux";
import ActivityFeed from "../components/ActivityFeed";
import {deleteActivity, updateActivity, populateComments, createNotification} from "../actions";
// import { deleteAddress } from "../actions";

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
    },
    updateActivity: function(id, post) {
      dispatch(updateActivity(id, post));
    },
    populateComments: function(comments) {
      dispatch(populateComments(comments));
    }
    // createNotification: function(notification) {
    //   console.log("container", notification);
    //   dispatch(createNotification(notification));
    // }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ActivityFeed);
