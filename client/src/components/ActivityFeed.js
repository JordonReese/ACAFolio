// Displays whole activiy feed
import React, {Component} from "react";
import CommentsContainer from "../containers/CommentsContainer";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

class ActivityFeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      editKey: -1,
      post: "",
    }
  }

  //props activities exists, but empty...
  render(){

    let mapActivities = this.props.activities.map((activity, key) => {
      //let comments = activity.comments;
      let activityBody;
      if(this.state.editKey !== key){
        activityBody = () => {
          return (
            <div key={key} className="activityPost">
              <a href='#' className="activityName">{activity.userHandle}</a>
              <h6 className="activityMessage">{activity.post}</h6>
              <p className="activityDate">{activity.dateTime} {activity.location}</p>
              <a className="activityEdit" onClick={(e) => {
                  e.preventDefault();
                  this.setState({editKey: key });
                }}>edit</a>
              <a className="activityDelete" onClick={(e)=>{
                  e.preventDefault();
                  if(this.props.deleteActivity){
                    this.props.deleteActivity(activity._id);
                  }
                }}>
              delete</a>
              <CommentsContainer
                activity={activity}
                actId={activity._id}
                comments={activity.comments}
                showComments={true}
               />
            </div>
          )
        }
      } else{
        activityBody = () => {
          return (
            <div key={key} className="activityPost">
              <a href='#' className="activityName">{activity.userHandle}</a>
                <textarea className="editPostArea" defaultValue={activity.post} onChange={(e)=> {
                 e.preventDefault();
                 this.setState({post: e.target.value});
               }}></textarea>
               <button className="editEntryButton" type='sumbit' onClick={(e)=> {
                 e.preventDefault();
                 activity.post = this.state.post;
                 this.props.updateActivity(activity._id, {"post":this.state.post});
                 this.setState({editKey: -1, post:""});
                 }
               }
               >Submit</button>
              <p className="activityDate">{activity.dateTime}</p>
              <a className="activityEdit" onClick={(e) => {
                  e.preventDefault();
                  this.setState({editPost: true});
                }}>edit</a>
              <a className="activityDelete" onClick={(e)=>{
                  e.preventDefault();
                  if(this.props.deleteActivity){
                    this.props.deleteActivity(activity._id);
                  }
                }}>
              delete</a>

              <CommentsContainer
                activity={activity}
                actId={activity._id}
                comments={activity.comments}
                showComments={true}
               />
            </div>
        )}
      }
      return (
          activityBody()
      )
    }).reverse()
    return (
      <div className="activityFeed">
        <div className="activityFeedWrap">{mapActivities}</div>
      </div>
    );
  }
}
export default ActivityFeed;

// Addresses.propTypes = {
//   addresses: PropTypes.array.isRequired
// }
