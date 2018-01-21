import React from "react";
// import "./App.css";
// import Main from "./components/Main";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import AddressContainer from "./containers/AddressContainer";
import ActivityFeedContainer from "../containers/ActivityFeedContainer";
import DashboardContainer from "../containers/DashboardContainer";
import ActivityEntry from "../components/ActivityEntry";
import PreWorkSection from "../components/PreWorkSection.js";
import VideoSection from "../components/VideoSection.js";

function PersonalView() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <ActivityEntry />
            <ActivityFeedContainer />

          </div>
          <div className="col-md-6">
            <PreWorkSection />
            <VideoSection />
            <DashboardContainer />

          </div>
        </div>
      </div>
  );

}
export default (PersonalView);
