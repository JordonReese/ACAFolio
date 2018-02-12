import {connect} from "react-redux";
import {createActivity, updateNotifications, getProfileByUserHandle, getProfileByEmail } from "../actions";
import CreateActivity from "../components/CreateActivity.js"

function mapStateToProps(state){
  // console.log("Container Test", state.toUserProfile)
  return {
    currentProfile: state.currentProfile
  };
}

function mapDispatchToProps(dispatch){
  return {
    createActivity: (activity)=> {
      dispatch(createActivity(activity));
    },
    createNotification: (tags) => {
      console.log(tags);
      // distpatch(createNotification(notification));
    },
    getProfileByEmail: function (email) {
    dispatch(getProfileByEmail(email));
    },
    getProfileByUserHandle: (userHandle)=>{
      return dispatch(getProfileByUserHandle(userHandle));
    },
    updateNotifications: (profileId, arrNotifications)=>{
      dispatch(updateNotifications(profileId, arrNotifications));
    }

    // createNotification: (tags) => {
    //   console.log(tags);
      // distpatch(createNotification(notification));
  };
}
    // createActivity: function(activity => {
    //   // console.log("createContainer", activity);
    //   // return {
    //   //   dispatch(createActivity(activity));
    //   }
    // })


export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity);
