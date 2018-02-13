/*
Used to show detials on profile:
FirstName, LastName, Birthday, profileName, Email, ACAID, Password
*/
import React, {Component} from "react";

class ProfileDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = ()=> {
    const myEmail = localStorage.getItem("email")
    console.log("ProfileDetail.CDM.my email", myEmail);

    // if (myEmail) {
    //   this.props.getProfileByEmail(myEmail);
    //   console.log("ProfileDetail.CDM.afterGetProfile call", myEmail, this.props.currentProfile);
    // }  // if statement

    const email = localStorage.getItem("email");
    const userHandle = localStorage.getItem("userHandle");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const birthday = localStorage.getItem("birthday");
    const location = localStorage.getItem("location");
    const bio = localStorage.getItem("bio");
  }  // componentDidMount


// renderThis() {
//   console.log("renderThis", this.props.currentProfile);
//   return (
//     <div>{this.props.currentProfile.userHandle}</div>
//   );
// }

  render() {

    console.log("ProfileDetail.render", this.props.currentProfile);
    // const { userHandle, firstName, lastName, email, birthday, location, bio, notifications }  = this.props.currentProfile;

    const email = localStorage.getItem("email");
    const userHandle = localStorage.getItem("userHandle");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const birthday = localStorage.getItem("birthday");
    const location = localStorage.getItem("location");
    const bio = localStorage.getItem("bio");

    return (
      <div>
        <div>User Handle: {userHandle}</div>
        <div>First Name: {firstName}</div>
        <div>Last Name: {lastName}</div>
        <div>Email: {email}</div>
        <div>Birthday: {birthday}</div>
        <div>Location: {location}</div>
        <div>Bio: {bio}</div>
    </div>
    );

  }  // for render

}  // closure for the class

export default ProfileDetail;


// <div>{userHandle}</div>
// <div>{firstName}</div>
// <div>{lastName}</div>
// <div>{email}</div>
// <div>{birthday}</div>
// <div>{location}</div>
// <div>{bio}</div>

        // {this.renderThis()}
