import { connect } from "react-redux";
import Comments from "../components/Comments";

import { update, updateComments } from "../actions";

function mapStateToProps(state) {

  //sees state object properly but state is empty.

  return {

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
