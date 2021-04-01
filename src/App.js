import React, { Component, Fragment } from "react";

import SpotifySlider from "./components/SliderComponents/Slider/SpotifySlider";
import SpotifyFooter from "./components/SliderComponents/SpotifyFooter/SpotifyFooter";
import SpotifyNavbar from "./HeaderComponents/SpotifyNavbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomeComponent/Home";

import PageNotFound from "./components/PageNotFound/404";
import Signup from "./components/SliderComponents/AuthComponenet/Signup";
import Signin from "./components/SliderComponents/AuthComponenet/Signin";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./firebase";
import PasswordReset from "./components/SliderComponents/AuthComponenet/PasswordReset";
import PhoneAuth from "./components/SliderComponents/AuthComponenet/PhoneAuth";

class App extends Component {
  state = {
    userInfo: "",
  };
  async componentDidMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userInfo: user });
      } else {
        this.setState({ userInfo: "" });
      }
    });
  }
  render() {
    console.log(this.state.userInfo);
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavbar user={this.state.userInfo} />
          </header>
          <ToastContainer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/password-reset" exact component={PasswordReset} />
            <Route path="/phone-auth" exact component={PhoneAuth} />
            <Route path="*" component={PageNotFound} />
          </Switch>
          <footer>
            <SpotifyFooter />
          </footer>
        </Router>
      </Fragment>
    );
  }
}

export default App;
