import React, { Component } from "react";

class Secret extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    this.setState({ message: "I tell no lies" });
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}

export default Secret;
