import { connect } from "react-redux";
import ActivityFeed from "../components/ActivityFeed";
import {deleteActivity, updateActivity, populateComments, createNotification, getProfileByEmail } from "../actions";
// import { deleteAddress } from "../actions";

function mapStateToProps(state) {
  return {
    activities: state.activities,
    currentProfile: state.currentProfile
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
    // createNotification: function(id, notifications) {
    //   dispatch(createNotification(id, notifications));
    // }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ActivityFeed);
