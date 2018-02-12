//Comparing to CreateActivity.js

import React, { Component } from "react";
// import { createProfile } from "../actions";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProfile:{
      userHandle:"@CodeIsC",
      firstName: "CodeIs",
      lastName: "Cool",
      email: "codeiscool@gmail.com",
      birthday:"2/14/2000",
      cityState:"Austin, TX",
      bio:"#CodeIsLife"
    }
  };
}

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp({
      userHandle: this.state.userHandle,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      birthday: this.state.birthday,
      cityState: this.state.cityState,
      bio: this.state.bio
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <FormGroup>
        <ControlLabel>First Name</ControlLabel>
        <FormControl
          type="text"
          name="firstName"
          onChange={e => {
            this.setState({[e.target.name]: e.target.value});
          }}
          placeholder="Enter first name"
          value={this.state.firstName}
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Last Name</ControlLabel>
        <FormControl
          type="text"
          name="lastName"
          onChange={e => {
            this.setState({[e.target.name]: e.target.value});
          }}
          placeholder="Enter last name"
          value={this.state.lastName}
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Social Media Handle</ControlLabel>
        <FormControl
          type="text"
          name="userHandle"
          onChange={e => {
            this.setState({[e.target.name]: e.target.value});
          }}
          placeholder="Enter handle, Ex: @CodingRocks"
          value={this.state.userHandle}
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Birthday</ControlLabel>
        <FormControl
          type="date"
          name="birthday"
          onChange={e => {
            this.setState({[e.target.name]: e.target.value});
          }}
          placeholder="Enter birthday"
          value={this.state.birthday}
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>City, State</ControlLabel>
        <FormControl
          type="text"
          name="cityState"
          onChange={e => {
            this.setState({[e.target.name]: e.target.value});
          }}
          placeholder="Enter city, state"
          value={this.state.cityState}
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Short Bio</ControlLabel>
        <FormControl
          type="text"
          name="bio"
          onChange={e => {
            this.setState({[e.target.name]: e.target.value});
          }}
          placeholder="Enter short bio"
          value={this.state.bio}
        />
      </FormGroup>

      <Button type="submit">
       Save
      </Button>
      </form>
    </div>
  );
  }
}

export default EditProfile;
