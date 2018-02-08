import React from "react";
import React, { Component } from "react";
// import { editProfile } from "../actions";

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      smhandle:"",
      firstName: "",
      lastName: "",
      email: "",
      birthday:"",
      cityState:"",
      bio:""
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
          smhandle: <input onChange={(e) => {
              this.setState({
                smhandle: e.target.value
              });
            }} />
          firstName: <input onChange={(e) => {
              this.setState({
                firstName: e.target.value
              });
            }} />
          lastName: <input onChange={(e) => {
              this.setState({
                lastName: e.target.value
              });
            }} />
          email: <input onChange={(e) => {
              this.setState({
                email: e.target.value
              });
            }} />
          birthday: <input onChange={(e) => {
              this.setState({
              birthday: e.target.value
              });
            }} />
          cityState: <input onChange={(e) => {
              this.setState({
                cityState: e.target.value
              });
            }} />
          bio: <input onChange={(e) => {
              this.setState({
                bio: e.target.value
              });
            }} />
          </div>
        <button type="submit" >Edit</button>
        </form>
      </div>
    );
  }
}

export default EditProfile;
