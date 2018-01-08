/*

Used to create profile

Required fields - FirstName, LastName, Email, Birthday, UserName, Password, ACAID

*/


import React from "react";
import React, { Component } from "react";
import { createProfile } from "../actions";

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      FirstName:"",
      LastName:"",
      Email:"",
      Birthday:"",
      UserName:"",
      Password:"",
      ACAID:""
    }
  }

  componentDidMount() {
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(this.props);
            createProfile(this.state);
          }}>
          <div>
          FirstName: <input onChange={(e) => {
              this.setState({
                FirstName: e.target.value
              });
            }} />
          LastName: <input onChange={(e) => {
              this.setState({
                LastName: e.target.value
              });
            }} />
          Email: <input onChange={(e) => {
              this.setState({
                Email: e.target.value
              });
            }} />
          Birthday: <input onChange={(e) => {
              this.setState({
                birthday: e.target.value
              });
            }} />
          UserName: <input onChange={(e) => {
              this.setState({
              UserName: e.target.value
              });
            }} />
          Password: <input onChange={(e) => {
              this.setState({
                Password: e.target.value
              });
            }} />
          ACAID: <input onChange={(e) => {
              this.setState({
                ACAID: e.target.value
              });
            }} />
          </div>
        <button type="submit" >Create Profile</button>
        </form>
      </div>
    );
  }
}

export default CreateProfile;
