import { connect } from "react-redux";
import Comments from "../components/Comments";

import { update, updateComments } from "../actions";

function mapStateToProps(state) {
  return {
    currentprofile: state.currentProfile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update: (activity)=> {
      dispatch(update(activity));
    },
    updateComments: (actId, arrComments)=> {
      dispatch(updateComments(actId, arrComments));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);

// date: state.date,
// actId: state.actId,
// showComments: state.showComments,
// currentUser: state.currentUser

// ,
// createComment: (comment)=> {
//   dispatch(createComment(comment));
// },
// deleteComment: (id)=> {
//   dispatch(deleteComment(id));
