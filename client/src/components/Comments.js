// Comments rendering.  This block shows for each activity.
import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userHandle: "",
      text:"",
      dateTime: '',
      likesCount: 0
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleClick(event, ACTION, arrComments, commentId) {

    event.preventDefault();

    switch(ACTION) {
      case "ADD":
        const newComment = { ...this.state };
        newComment.userId = "5a52dd681d88ee122c48510a";
        newComment.userHandle = "Craig C.";
        newComment.dateTime = new Date();
        newComment.likesCount = this.state.likesCount + 1;

        this.setState( newComment, ()=> {
          console.log("onclick", this.state);
          console.log("onclick", newComment);
        } );

        arrComments.push(newComment);
        let updatedActivity =  { ...this.props.activity };
        updatedActivity.comments = arrComments;
        console.log("handleClick", updatedActivity);

        this.props.updateComments(this.props.actId, arrComments);
        // this.props.update(this.props.activity);
        this.setState( {text: ""} );
        break;

      case "UPDATE":
        arrComments[commentId].text = this.state.text;
        this.props.updateComments(this.props.actId, arrComments);

        this.setState( {text: ""} );
        break;

      case "DELETE":
        arrComments.splice(commentId, 1);
        this.props.updateComments(this.props.actId, arrComments);
        break;
      default:
        break;
    }
  }

  render() {
    // console.log("Comments Props",this.props, this.state);

    let activityComments = this.props.comments.slice(0);  // making copy of array.

    let mapComments = [];

    if (this.props.showComments && activityComments.length > 0) {

      mapComments = activityComments.reverse().map((comment, id) => {
        return (
          <div key={id} className="commentPost">
            <a className="commentUser" href="#">{comment.userHandle}</a>
            <p className="commentMessage">{comment.text}</p>
            <p className="commentDate">{comment.dateTime}</p>
            <p className="commentDate">{comment.likesCount}</p>
            <button
              className="activityDelete"
              onClick={(click) => this.handleClick(click, "DELETE", activityComments, id)}>
               delete
            </button>

          </div>
        )
      });

    }  // if statement

    return (
      <div>
        <textarea
          value={this.state.text}
          className="commentText"
          type="text"
          placeholder="comment..."
          onChange={(e) => {
            this.setState( { text:e.target.value } )
          }} ></textarea>

        <button
          className="commentSubmit"
          type="sumbit"
          onClick={(click) => this.handleClick(click, "ADD", activityComments)}>
           Submit
        </button>

          <div className="commentWrap">
            {mapComments}
          </div>

      </div>
    );

  }  // render
}

export default Comments;

// <a className="activityEdit" href="#">edit</a>
// <button
//   className="activityEdit"
//   onClick={(click) => this.handleClick(click, "UPDATE", activityComments, id)}>
//    Edit
// </button>
