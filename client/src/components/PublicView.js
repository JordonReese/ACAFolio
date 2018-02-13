//Comparing to PersonalView

import React, { Component } from "react";
import ProfileDetailContainer from "../containers/ProfileDetailContainer";
import EditProfileContainer from "../containers/ProfileDetailContainer";
import ActivityFeedContainer from "../containers/ActivityFeedContainer";


class PublicView extends Component {

  constructor(props) {
    super(props);
    this.state = {
    currentProfile:{},
    date: new Date()
  }
}

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      20000    // this is every 1 min.
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    // console.log("PublicView.render.currentProfile", this.props.currentProfile);
    // this.props.loadProfile();
        return (
            <div>
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-6">

              <div><h1>{this.props.currentProfile.firstName+"'s Profile"}</h1></div>

              <div className="activityPost"><a href='#' className="activityName">User ID</a>
              <p className="commentMessage">{this.props.currentProfile._id}</p></div>

              <div className="activityPost"><a href='#' className="activityName">Email</a>
              <p className="commentMessage">{this.props.currentProfile.email}</p></div>

              <div className="activityPost"><a href='#' className="activityName">First Name</a>
              <p className="commentMessage">{this.props.currentProfile.firstName}</p></div>

              <div className="activityPost"><a href='#' className="activityName">Last Name</a>
              <p className="commentMessage">{this.props.currentProfile.lastName}</p></div>

              <div className="activityPost"><a href='#' className="activityName">User Handle</a>
            <p className="commentMessage">{this.props.currentProfile.userHandle}</p></div>
              {/* <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6"> */}
                    <div>{this.props.date}</div>
                  {/* <EditProfileContainer /> */}
                    {/* <ActivityFeedContainer /> */}
                  </div>
                  {/* <div className="col-md-6">
                    <ProfileDetailContainer />
                  </div> */}
                </div>
              </div>
              <div className="col-md-6">
                <ProfileDetailContainer />
              </div>
            </div>
        );
      }
    }

export default (PublicView);


// <div>{this.props.currentProfile._id}</div>
// <div>{this.props.currentProfile.email}</div>
// <div>{this.props.currentProfile.firstName}</div>
// <div>{this.props.currentProfile.lastName}</div>
// <div>{this.props.currentProfile.userHandle}</div>

// <div>{this.props.date}</div>
