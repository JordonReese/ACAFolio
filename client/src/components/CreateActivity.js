// Used to show detail on activity entry and allow for a comment or like

import React, {Component} from "react";


class ActivityEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userHandle: "Cam G",
      post:"",
      dateTime: '',
      location:"Austin",
      likesCount: 0,
      notifications: {
        handleTags: []
      }
    }
  }
  render() {


    return (
      <div className="createActivity">

        <textarea
          value={this.state.post}
          className="activityInput"
          type='text'
          placeholder="What's Good...?"
          onChange={(e) => {this.setState({post:e.target.value, dateTime: new Date()})}}
          onInput={(e)=>{
            let splitString = e.target.value.split(" ");
            let handleTags=[];
            splitString.map(word => {
              if(word[0] === "@"){
                handleTags.push(word);
              }
            });
            this.setState({"notifications": handleTags})
          }}
        />
        <button className="activityEntryButton" type='sumbit' onClick={(e)=> {
            e.preventDefault();
            this.props.createActivity(this.state);
            this.setState({post:""});
            }
          }
        >
        Submit</button>
      </div>
    )

  }
}

export default ActivityEntry;
