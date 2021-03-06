import React, { Component } from "react";

// import "./App.css";
// import Main from "./components/Main";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import AddressContainer from "./containers/AddressContainer";
import ActivityFeedContainer from "../containers/ActivityFeedContainer";
import DashboardContainer from "../containers/DashboardContainer";
import CreateActivityContainer from "../containers/CreateActivityContainer";

// import RemarksContainer from "../containers/RemarksContainer";

class PersonalView extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      20000    // this is every 10 sec.
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
    this.props.loadActivities();
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div>{this.props.date}</div>
              <CreateActivityContainer />
              <ActivityFeedContainer />
            </div>
            <div className="col-md-6">
              <DashboardContainer />

            </div>
          </div>
        </div>
    );
  }
}
export default (PersonalView);
