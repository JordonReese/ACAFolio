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
    //this.props.loadProfile();
    this.timerID = setInterval(
      () => this.tick(),
      10000    // this is every 10 sec.
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
    this.props.loadProfile();
    return (
      <div>
        <div>Why isn't the public page working???</div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div>{this.props.date}</div>
              <div>Is there another div here somewhere?</div>
                {/* <ActivityFeedContainer /> */}
                {/* <EditProfileContainer /> */}
              </div>
              {/* <div className="col-md-6">
                <ProfileDetailContainer />
              </div> */}
            </div>
          </div>
         </div>
        );
      }
    }
export default (PublicView);
