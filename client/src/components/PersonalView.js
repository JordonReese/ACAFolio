import React from "react";
// import "./App.css";
// import Main from "./components/Main";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import AddressContainer from "./containers/AddressContainer";
import ActivityFeedContainer from "../containers/ActivityFeedContainer";
import DashboardContainer from "../containers/DashboardContainer";

function PersonalView() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ActivityFeedContainer />
          </div>
          <div className="col-md-6">
            <DashboardContainer />
          </div>
        </div>
      </div>
  );

}
export default (PersonalView);
