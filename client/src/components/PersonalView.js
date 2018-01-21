import React from "react";
// import "./App.css";
// import Main from "./components/Main";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import AddressContainer from "./containers/AddressContainer";
import ActivityFeedContainer from "../containers/ActivityFeedContainer";
import DashboardContainer from "../containers/DashboardContainer";
import ActivityEntry from "../components/ActivityEntry";
import PreWork from "../components/PreWork.js";

function PersonalView() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <ActivityEntry />
            <ActivityFeedContainer />

          </div>
          <div className="col-md-6">
            <PreWork folderImage={'../../public/90376_227958_folder_vector.png'} />
            <DashboardContainer />

          </div>
        </div>
      </div>
  );

}
export default (PersonalView);
