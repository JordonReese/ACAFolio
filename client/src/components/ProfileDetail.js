/*
Used to show detials on profile:
FirstName, LastName, Birthday, UserName, Email, ACAID, Password
*/
import React from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

function ProfileDetail() {

  return (
    <div className="ProfileInfo">
      <h2>Profile Detail</h2>
      <div className="ProfilePicture">
        Image
      </div>
      <div className="ProfileDetail">
        FirstName
      </div>
      <div className="ProfileDetail">
        LastName
      </div>
      <div className="ProfileDetail">
        Birthday
      </div>
      <div className="ProfileDetail">
        PhoneNumber
      </div>
      <div className="ProfileDetail">
        Address Line1
      </div>
      <div className="ProfileDetail">
        Address Line2
      </div>
      <div className="ProfileDetail">
        City
      </div>
      <div className="ProfileDetail">
        Zip
      </div>
      <div className="ProfileDetail">
        Aca id
      </div>
      <div className="ProfileDetail">
        Attended
      </div>
    </div>

  )
}

export default ProfileDetail;
