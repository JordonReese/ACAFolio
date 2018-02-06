import React from "react";
// import "./App.css";
// import Main from "./components/Main";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import AddressContainer from "./containers/AddressContainer";
import ActivityFeedContainer from "../containers/ActivityFeedContainer";
import ProfileDetailContainer from "../containers/ProfileDetailContainer";

function PublicView() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <ActivityFeedContainer meOnly="true"/>
          </div>
          <div className="col-md-6">
            <ProfileDetailContainer />
          </div>
        </div>
      </div>
  );

}
export default (PublicView);
