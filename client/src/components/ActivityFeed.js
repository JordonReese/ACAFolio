// Displays whole activiy feed
import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

import CommentsContainer from "../containers/CommentsContainer";
// function ActivityFeed(props) {
class ActivityFeed extends Component {
  //props activities exists, but empty...
  constructor(props) {
    super(props);
    // this.state = {date: new Date()};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    console.log("ActivityFeed",this.props);
    let mapActivities = this.props.activities.reverse().map(activity => {
      //let comments = activity.comments;

      // this.props.populateComments(activity.comments);
      // console.lsog("activity comments", activity.comments);
      return (
        <div className="activityPost">
          <a href='#' className="activityName">{activity.userHandle}</a>
            <h6 className="activityMessage">{activity.post}</h6>
            <p className="activityDate">{activity.dateTime}</p>
          <a className="activityEdit" href="#">edit</a>
          <button className="activityDelete" onClick={(e)=>{
              e.preventDefault();
              if(this.props.deleteActivity){
                console.log("Component activity._id", activity._id);
                this.props.deleteActivity(activity._id);
              }}}
          >delete</button>
        <CommentsContainer
          activity={activity}
          actId={activity._id}
          comments={activity.comments}
          showComments={true}
        />

        </div>
      )
    })
    return (
      <div>
        <div className="activityFeed">
          <div className="activityFeedWrap">{mapActivities}</div>
        </div>
      </div>
    );
  }  // render
}
export default ActivityFeed;

// Addresses.propTypes = {
//   addresses: PropTypes.array.isRequired
// }
