// Displays whole activiy feed
import React from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

function ActivityFeed(props) {

  //props activities exists, but empty...

  console.log("ActivityFeed",props);
  let mapActivities = props.activities.reverse().map(activity => {
    //let comments = activity.comments;

    return (
      <div className="activityPost">
        <a href='#' className="activityName">{activity.userId}</a>
        <p className="activityHandle">{activity.handle}</p>
          <h6 className="activityMessage">{activity.post}</h6>
          <p className="activityDate">{activity.dateTime}</p>
        <a className="activityEdit" href="#">edit</a>
        <a className="activityDelete" onClick={(e)=>{
            e.preventDefault();
            if(props.deleteActivity){
              console.log("Component activity._id", activity._id);
              props.deleteActivity(activity._id);
            }}}
        >delete</a>
        <textarea className="commentText" placeholder="comment..."></textarea>
        <button className="commentSubmit" type="sumbit">Submit</button>
        <div className="commentWrap">

        </div>
      </div>
    )
  })
  return (
    <div className="activityFeed">
      <div className="activityFeedWrap">{mapActivities}</div>
    </div>
  );
}
export default ActivityFeed;

// Addresses.propTypes = {
//   addresses: PropTypes.array.isRequired
// }
