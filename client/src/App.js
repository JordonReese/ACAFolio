import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpSignIn from "./SignUpSignIn";
import TopNavbar from "./components/TopNavbar";
import PersonalViewContainer from "./containers/PersonalViewContainer";
import PublicViewContainer from "./containers/PublicViewContainer";
import {createProfile} from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signUpSignInError: "",
      authenticated: localStorage.getItem("token") || false
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(credentials, profile) {
    const { username, password, confirmPassword } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else if (password !== confirmPassword ) {
      this.setState({
        signUpSignInError: "Passwords do not match"
      });
    } else {

      fetch("/api/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        if(data.error){
          this.setState({
            signUpSignInError: data.error
          });
          return;
        }
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
      console.log("handleSignUp", profile);
      this.props.createProfile(profile);
    }
  }

  handleSignIn(credentials) {
    const { username, password } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {
      fetch("/api/signin", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        if (res.status === 401) {
          this.setState({
            signUpSignInError: "Invalid Login"
          });
        } else {
          return res.json();
        }
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    }
  }

  handleSignOut() {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }

  renderSignUpSignIn() {
    return (
      <SignUpSignIn
        error={this.state.signUpSignInError}
        onSignUp={this.handleSignUp}
        onSignIn={this.handleSignIn}
      />
    );
  }

  renderApp() {
    return (
      <div>
        <Switch>
          <Route path="/public" component={PublicViewContainer} />
          <Route path="/" component={PersonalViewContainer} />
          <Route render={() => <h1>NOT FOUND!</h1>} />
        </Switch>
      </div>
    );
  }

  render() {
    let whatToShow = "";
    if (this.state.authenticated) {
      whatToShow = this.renderApp();
    } else {
      whatToShow = this.renderSignUpSignIn();
    }

    return (
      <BrowserRouter>
        <div className="App">
          <TopNavbar
            showNavItems={this.state.authenticated}
            onSignOut={this.handleSignOut} />
          {whatToShow}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// () => <h1>I am protected!</h1>
