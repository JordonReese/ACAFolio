// Used to show detail on activity entry and allow for a comment or like

import React, {Component} from "react";
import createNotification from "../actions";


class ActivityEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userHandle: "Cam G",
      post:"",
      dateTime: '',
      location:"Austin",
      likesCount: 0,
      handleTags: []
    }
  }
  render() {
    function formatDate(date) {
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }


    return (
      <div className="createActivity">

        <textarea
          value={this.state.post}
          className="activityInput"
          type='text'
          placeholder="What's Good...?"
          onChange={(e) => {this.setState({post:e.target.value, dateTime: formatDate(new Date())})}}
          onInput={(e)=>{
            let splitString = e.target.value.split(" ");
            let handleTags=[];
            splitString.map(word => {
              if(word[0] === "@"){
                handleTags.push(word.toLowerCase());
              }
            });
            this.setState({"handleTags": handleTags})
            console.log("state.handleTags", this.state.handleTags);
          }}
        />
        <button className="activityEntryButton" type='sumbit' onClick={(e)=> {
            e.preventDefault();
            this.props.createActivity(this.state);
            this.props.createNotification(this.state.handleTags);
            this.setState({post:""});
            }
          }
        >
        Submit</button>
      </div>
    )

  }
}
// if the tag

// if(this.props.createActivity) {
//   this.setState({
//     dateTime: new Date(),
//   });
//   this.props.createActivity(this.state);

export default ActivityEntry;
