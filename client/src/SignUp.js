import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      firstName:"",
      lastName:"",
      username: "",
      password: "",
      confirmPassword: "",
      userHandle:"",
      location: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp({
      username: this.state.username.toLowerCase(),
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }, {
      userId: this.state.userID||"",
      userHandle: this.state.userHandle,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.username,
      birthday: "",
      location: this.state.location,
      bio: "",
      photo: this.state.photo,
      notifications: []
    }
  );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            name="firstName"
            onChange={e => {
              this.setState({firstName: e.target.value, userHandle:"@"+e.target.value.toLowerCase()+this.state.lastName[0].toLowerCase()});
              //this.setState({userHandle: e.target.value});
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
              this.setState({lastName: e.target.value, userHandle: "@"+this.state.firstName.toLowerCase()+e.target.value[0].toLowerCase()});
            }}
            placeholder="Enter last name"
            value={this.state.lastName}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Email/Username</ControlLabel>
          <FormControl
            type="email"
            name="username"
            onChange={e => {
              this.setState({username: e.target.value});
            }}
            placeholder="Enter Username"
            value={this.state.username}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            onChange={e => {
              this.setState({password: e.target.value});
            }}
            placeholder="Enter Password"
            value={this.state.password}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            name="confirmPassword"
            onChange={e => {
              this.setState({confirmPassword: e.target.value});
            }}
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Location</ControlLabel>
          <FormControl
            type="text"
            name="location"
            onChange={e => {
              this.setState({location: e.target.value});
            }}
            placeholder="Enter Location"
            value={this.state.location}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Photo</ControlLabel>
          <FormControl
            type="text"
            name="photo"
            onChange={e => {
              this.setState({photo: e.target.value});
            }}
            placeholder="Paste Photo Link"
            value={this.state.photo}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Social Media Handle</ControlLabel>
          <FormControl
            type="text"
            name="userHandle"
            placeholder="auto-generated social media handle"
            value={this.state.userHandle}
            disabled
          />
        </FormGroup>

        <Button type="submit">
         Sign Up
       </Button>
      </form>
    );
  }
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default SignUp;
