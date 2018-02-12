import {connect} from "react-redux";
import { createActivity, getProfileByEmail } from "../actions";
import CreateActivity from "../components/CreateActivity.js"

function mapStateToProps(state) {
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
    }
  };
}
    // createActivity: function(activity => {
    //   // console.log("createContainer", activity);
    //   // return {
    //   //   dispatch(createActivity(activity));
    //   }
    // })


export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity);
