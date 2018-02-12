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
      authenticated: localStorage.getItem("token") || false,
      email:localStorage.getItem("email") || false,
      userHandle: localStorage.getItem("userHandle")||"",
      firstName: localStorage.getItem("firstName")||"",
      lastName: localStorage.getItem("lastName")||"",
      birthday: localStorage.getItem("birthday")||"",
      location: localStorage.getItem("location")||"",
      bio: localStorage.getItem("bio")||""

    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

  }

  componentDidMount() {
    console.log("App.CDM.local storage email", this.state.userEmail);
    // if (localStorage.getItem("profile")) {
    //   this.props.getProfileDone(localStorage.getItem("profile"))
    // }
    // if (this.state.userEmail) {
    //   this.props.getProfileByEmail(this.state.userEmail);
    //   console.log("CDM.if stmt", this.props.currentProfile);
    //
    // }
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
        console.log("data is", data);
        if(data.error){
          this.setState({
            signUpSignInError: data.error
          });
          return;
        }
        const { token } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("email", username);
        localStorage.setItem("userHandle", profile.userHandle);
        localStorage.setItem("firstName", profile.firstName);
        localStorage.setItem("lastName", profile.lastName);
        localStorage.setItem("birthday", "");
        localStorage.setItem("location", "Austin, TX");
        localStorage.setItem("bio", "");
        this.setState({
          signUpSignInError: "",
          authenticated: token,
          userEmail: username
        });
      })
        .then(()=> {
          // this.props.getUserByEmail(profile.email);
          // console.log("currentUser", this.props.currentUser);
          // profile.UserId = this.props.currentUser._id;
          console.log("handleSignUp", profile);
          this.props.createProfile(profile);
      })
        .then(()=> {
          // getProfileByEmail sets currentProfile in application state
          this.props.getProfileByEmail(username);
          // .then((profile)=> {console.log("in .then", profile);});
      }).then(()=> {
        console.log("handleSignUp", this.props.currentProfile);
        // localStorage.setItem("profile", this.props.currentProfile);
      });
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
        localStorage.setItem("email", username);
        this.setState({
          signUpSignInError: "",
          authenticated: token,
          userEmail: username
        });
      }).then(()=> {
          // getProfileByEmail sets currentProfile in application state
          this.props.getProfileByEmail(username);
      }).then(()=> {
        console.log("currentProfile", this.props.currentProfile);
        localStorage.setItem("userHandle", this.props.currentProfile.userHandle);
        localStorage.setItem("firstName", this.props.currentProfile.firstName);
        localStorage.setItem("lastName", this.props.currentProfile.lastName);
        localStorage.setItem("birthday", "");
        localStorage.setItem("location", "Austin, TX");
        localStorage.setItem("bio", "");
      });
    }
  }

  handleSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
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
          <Route path="/public" render={()=> <PublicViewContainer email={this.props.currentProfile.email} />} />
          <Route path="/" render={()=> <PersonalViewContainer email={this.props.currentProfile.email} />} />
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

// <Route path="/public" component={PublicViewContainer} />
// <Route path="/" component={PersonalViewContainer} />
