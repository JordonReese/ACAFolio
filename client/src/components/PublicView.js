import React, { Component } from "react";
// import "./App.css";
// import Main from "./components/Main";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import AddressContainer from "./containers/AddressContainer";
// import ActivityFeedContainer from "../containers/ActivityFeedContainer";
import ProfileDetailContainer from "../containers/ProfileDetailContainer";
import EditProfileContainer from "../containers/ProfileDetailContainer";
import ActivityFeedContainer from "../containers/ActivityFeedContainer";


class PublicView extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log("PublicView.CDM.currentProfile", this.props.currentProfile);

    // this.props.loadProfile();
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
    console.log("PublicView.render.currentProfile", this.props.currentProfile);

    // this.props.loadProfile();
        return (
            <div>
              <div>{this.props.currentProfile._id}</div>
              <div>{this.props.currentProfile.email}</div>
              <div>{this.props.currentProfile.firstName}</div>
              <div>{this.props.currentProfile.lastName}</div>
              <div>{this.props.currentProfile.userHandle}</div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <div>{this.props.date}</div>
                  {/* <EditProfileContainer /> */}
                    <ActivityFeedContainer />
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
