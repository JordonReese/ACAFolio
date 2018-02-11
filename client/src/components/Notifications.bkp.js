// Showing user's notifications
import React, { Component } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Notifications extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        <div isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h2>Notifications</h2>
          <div>Notif 1</div>
          <div>Notif 2</div>
          <div><button onClick={() => this.closeModal()}>Close</button></div>
        </div>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

// <button onClick={() => this.openModal()}>Open modal</button>
// <div isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
//   <h2>Notifications</h2>
//   <div>Notif 1</div>
//   <div>Notif 2</div>
//   <div><button onClick={() => this.closeModal()}>Close</button></div>
// </div>
export default Notifications;
