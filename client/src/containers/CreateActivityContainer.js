import {connect} from "react-redux";
import {createActivity} from "../actions";
import CreateActivity from "../components/CreateActivity.js"

function mapStateToProps(state) {
  return {
    currentprofile: state.currentProfile
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
