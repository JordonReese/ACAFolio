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
    const photo = localStorage.getItem("photo");

    return (
      <div className="profileDetail">

        <img src={photo} alt="a photo" height="250px"/>

        <p className="italics">Give us your mug!</p>

        <h1>{firstName+"'s Profile"}</h1>

        <div className="activityPost"><a href='#' className="activityName">User Handle:</a>
        <p className="commentMessage">{userHandle}</p></div>

        <div className="activityPost"><a href='#' className="activityName">First Name:</a>
        <p className="commentMessage">{firstName}</p></div>

        <div className="activityPost"><a href='#' className="activityName">Last Name:</a>
        <p className="commentMessage">{lastName}</p></div>

        <div className="activityPost"><a href='#' className="activityName">Email:</a>
        <p className="commentMessage">{email}</p></div>

        <div className="activityPost"><a href='#' className="activityName">Birthday:</a>
        <p className="commentMessage">{birthday}</p></div>

        <div className="activityPost"><a href='#' className="activityName">Location:</a>
        <p className="commentMessage">{location}</p></div>

        <div className="activityPost"><a href='#' className="activityName">Bio:</a>
      <p className="commentMessage">Canadian rapper, singer, songwriter, record producer, actor, and entrepreneur. Also dedicated Austin Coding Academy student since Jan 2018.{bio}</p></div>
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

/* <div><h1>{this.props.currentProfile.firstName+"'s Profile"}</h1></div> */

// <img src="https://a.wattpad.com/useravatar/DrakeFanfics.128.262725.jpg" alt="Drake" />
// <img src="https://i.imgur.com/EdMMB83.jpg" alt="mug" height="300px"/>
