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
      smhandle:""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp({
      username: this.state.username.toLowerCase(),
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }, {
      userId: this.state.userID,
      smhandle: this.state.smhandle,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      birthday: "",
      cityState: "",
      bio: "",
      notifications:[]
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
              this.setState({firstName: e.target.value, smhandle:"@"+e.target.value+this.state.lastName[0]});
              //this.setState({smhandle: e.target.value});
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
              this.setState({lastName: e.target.value, smhandle: "@"+this.state.firstName+e.target.value[0].toUpperCase()});
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
          <ControlLabel>Social Media Handle</ControlLabel>
          <FormControl
            type="text"
            name="smhandle"
            placeholder="auto-generated social media handle"
            value={this.state.smhandle}
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
