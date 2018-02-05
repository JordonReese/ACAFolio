// Used to show detail on activity entry and allow for a comment or like

import React, {Component} from "react";


class ActivityEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "Cameron Gottschall",
      post:"",
      dateTime: '',
      location:"Austin",
      likesCount: 0,
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
        />
        <button className="activityEntryButton" type='sumbit' onClick={(e)=> {
            e.preventDefault();
            this.setState({dateTime: "hello" });
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


// if(this.props.createActivity) {
//   this.setState({
//     dateTime: new Date(),
//   });
//   this.props.createActivity(this.state);

export default ActivityEntry;
