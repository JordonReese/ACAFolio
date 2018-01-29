import {connect} from "react-redux";
import {createActivity} from "../actions";
import CreateActivity from "../components/CreateActivity.js"

function mapDispatchToProps(dispatch){
  return {
    createActivity: (activity)=> {
      dispatch(createActivity(activity));
    }
  };
}
    // createActivity: function(activity => {
    //   // console.log("createContainer", activity);
    //   // return {
    //   //   dispatch(createActivity(activity));
    //   }
    // })


export default connect(null, mapDispatchToProps)(CreateActivity);
