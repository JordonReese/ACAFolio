// Displays whole activiy feed
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function ActivityFeed(props) {

  //props activities exists, but empty...

  console.log("ActivityFeed",props);
  let mapActivities = props.activities.map(activity => {
    console.log("activity map", activity);
    let comments = activity.comments;



    // const commentsRender = comments.map(comment => {
    //   if(comments.length > 0) {
    //     return (
    //       <div className="commentPost">
    //         <a className="commentUser" href="#">{comment.user}</a>
    //         <p className="commentHandle">{comment.handle}</p>
    //         <p className="commentMessage">{comment.message}</p>
    //         <p className="commentDate">{comment.date} at {comment.time}</p>
    //         <a className="activityEdit" href="#">edit</a>
    //         <a className="activityDelete" href="">delete</a>
    //       </div>
    //     )
    //   } else {
    //     return null;
    //   }
    // });

    return (
      <div className="activityPost">
        <a href='#' className="activityName">{activity.userId}</a>
        <p className="activityHandle">{activity.handle}</p>
        <h6 className="activityMessage">{activity.post}</h6>
        <p className="activityDate">{activity.dateTime}</p>
        <a className="activityEdit" href="#">edit</a>
        <a className="activityDelete" href="">delete</a>
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


// Example of address card.
// const AddressList = props.addresses.map((addr, id) => {
//   return (
//     <div key={id}>
//     <address className="card text-center" key={id}>
//       <div className="row no-margin-left">
//         <strong className="col-md-9 text-uppercase">{addr.address1}</strong>
//         <strong className="col-md-3"><Link to={`/addresses/${addr._id}`}> details </Link></strong><br></br>
//       </div>
//       {addr.jobNumber}<br></br>
//       {addr.client}<br></br>
//     <div className="row button-section">
//         <button className=""
//           onClick={(e) => {
//           e.preventDefault();
//           if (props.deleteAddress) {
//             props.deleteAddress(addr._id);
//           }}}
//         > Delete </button>
//       </div>
//     </address>
//   </div>
//   )
// });
