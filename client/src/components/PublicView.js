//Comparing to PersonalView

import React, { Component } from "react";
import ProfileDetailContainer from "../containers/ProfileDetailContainer";
import EditProfileContainer from "../containers/ProfileDetailContainer";
// import ActivityFeedContainer from "../containers/ActivityFeedContainer";


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

    return (
        <div>
          <div className="container-fluid">
            <div className="row">

              <div className="col-md-6">
                <ActivityFeedContainer />
              </div>
              <div className="col-md-6">
                <ProfileDetailContainer />
              </div>
            </div>
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
