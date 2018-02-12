//Comparing to ActivityFeed.js


import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

function ProfileDetail(props) {

const profileDivs = props.profiles.map(function(profile){
  return
  <div>
    <ul>
    <ol>{this.props.profile.userHandle}</ol>
    <ol>{this.props.profile.firstName}</ol>
    <ol>{this.props.profile.lastName}</ol>
    <ol>{this.props.profile.email}</ol>
    <ol>{this.props.profile.birthday}</ol>
    <ol>{this.props.profile.cityState}</ol>
    <ol>{this.props.profile.bio}</ol>
  </ul>
 {/* <Link to={"/users/" + user._id}>View</Link> */}
 {/* <button onClick={(e) => props.deleteUser(user._id)}>Delete</button> */}
    </div>;
});
// return (
// <div>
//   {profileDivs}
// </div>);
}

export default ProfileDetail;
