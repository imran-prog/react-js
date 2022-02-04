import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Components
import Home from "./components/Home";
import Shop from "./components/Shop";
import Header from "./components/header";
import Signin from "./components/Signin";
// Firebase
import { auth } from "./firebase";
// Connect to redux
import { connect } from "react-redux";
// Redux Actions
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({ currentUser: user });
      } else {
        setCurrentUser({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
