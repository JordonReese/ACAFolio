// Displays whole activiy feed
import React, {Component} from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

class ActivityFeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      editPost: false,
      post: ""
    }
  }
  //props activities exists, but empty...
  render(){

    let mapActivities = this.props.activities.map((activity, key) => {
      //let comments = activity.comments;
      let activityBody;
      if(this.state.editPost === false){
        activityBody = () => {
          return (
            <div key={key} className="activityPost">
              <a href='#' className="activityName">{activity.userHandle}</a>
              <h6 className="activityMessage">{activity.post}</h6>
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
              <textarea className="commentText" placeHolder="comment..."></textarea>
              <button className="commentSubmit" type="submit">Submit</button>
              <div className="commentWrap">
              </div>
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
                 this.props.updateActivity(activity._id, this.state.post);
                 this.setState({editPost: false, post:""});
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
              <textarea className="commentText" placeHolder="comment..."></textarea>
              <button className="commentSubmit" type="submit">Submit</button>
              <div className="commentWrap">
              </div>
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
