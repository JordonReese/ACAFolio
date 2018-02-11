// Used to show detail on activity entry and allow for a comment or like

import React, {Component} from "react";


class CreateActivity extends Component {
  constructor(props) {
    super(props);
    console.log("constructor props",this.props);
    this.state = {
      userHandle: "Cam G",
      post:"",
      dateTime: '',
      location:"Austin",
      likesCount: 0,
      handleTags: [],
      profileId: null
    }
  }

  formatDate(date) {
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

  handleNotifications(){
    let stringSplit = this.state.post.split(" ");
    console.log(stringSplit);
    let handleTags = [];
    stringSplit.map(word => {
      if(word[0]=== "@"){
        handleTags.push({
          toUserHandle: word.toLowerCase().replace(/[^@0-9a-z]/gi, ''),
          // fromuserHandle: this.props.currentProfile.userHandle,
          notification: "has tagged you in an activity",
          dateTime: this.formatDate(new Date())
        });
      }
    });
    console.log("handleTags", handleTags);
    for(let i=0; i<handleTags.length; i++) {
      // console.log("handle tag test",handleTags[i].toUserHandle);
      this.props.getProfileByUserHandle(handleTags[i].toUserHandle)
      .then(profile => {
        let copyNotify = [...profile.notifications];
        copyNotify.push(handleTags[i]);
        console.log("componentNOTINtrender",profile);
        this.props.updateNotifications(profile._id, copyNotify);
        return profile;
      })

    }
  }
  render() {
    console.log("componentINrender",this.props.toUserProfile)
    // let handleNotifications = () =>{
    //   console.log(this.state);
    //   let stringSplit = this.state.post.split(" ");
    //   console.log(stringSplit);
    //   let handleTags = [];
    //   stringSplit.map(word => {
    //     if(word[0]=== "@"){
    //       handleTags.push({
    //         toUserHandle: word.toLowerCase().replace(/[^@0-9a-z]/gi, ''),
    //         // fromuserHandle: this.props.currentProfile.userHandle,
    //         notification: "has tagged you in an activity",
    //         dateTime: this.formatDate(new Date())
    //       });
    //     }
    //   });
    //   console.log("handleTags", handleTags);
    //   for(let i=0; i<handleTags.length; i++) {
    //     console.log("handle tag test",handleTags[i].toUserHandle);
    //     this.props.getProfileByUserHandle(handleTags[i].toUserHandle);
    //     console.log("toUserProfile", this.props.toUserHandle);
    //
    //     // this.props.updateNotifications();
    //   }
    // }
    console.log("componentToUserProfileinRender", this.props.toUserProfile);
    return (
      <div className="createActivity">

        <textarea
          value={this.state.post}
          className="activityInput"
          type='text'
          placeholder="What's Good...?"
          onChange={(e) => {this.setState({post:e.target.value, dateTime: this.formatDate(new Date())})}}
        />
        <button className="activityEntryButton" type='sumbit' onClick={(e)=> {
            e.preventDefault();
            this.props.createActivity(this.state);
            this.handleNotifications();
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

// this.props.createNotification(this.state.handleTags);
export default CreateActivity;
