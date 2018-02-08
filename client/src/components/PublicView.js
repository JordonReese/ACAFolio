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
    this.props.loadProfile();
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
    // this.props.loadProfile();
        return (
            <div>
              <div>Why isn't the public page working???</div>
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
