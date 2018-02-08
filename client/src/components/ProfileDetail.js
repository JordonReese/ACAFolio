/*
Used to show detials on profile:
FirstName, LastName, Birthday, profileName, Email, ACAID, Password
*/
import React from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

function ProfileDetail(props) {

//   return (
//     <div className="ProfileInfo">
//       <div className="ProfilePicture">
//         Image
//       </div>
//       <div className="ProfileDetail">
//         smhandle
//       </div>
//       <div className="ProfileDetail">
//         firstName
//       </div>
//       <div className="ProfileDetail">
//         lastName
//       </div>
//       <div className="ProfileDetail">
//         email
//       </div>
//       <div className="ProfileDetail">
//         birthday
//       </div>
//       <div className="ProfileDetail">
//         cityState
//       </div>
//       <div className="ProfileDetail">
//         bio
//       </div>
//       <div className="ProfileDetail">
//         Attendedcampus
//       </div>
//     </div>
//
//   )
// }
const profileDivs = props.profiles.map(function(profile){
  return
  <div>
    <ul>
    <ol>{this.props.profile.smhandle}</ol>
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
