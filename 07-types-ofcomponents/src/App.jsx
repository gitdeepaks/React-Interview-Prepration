import React, { useState } from "react";

import "./App.css";

const withLogin = (WrapComponent) => {
  return class extends React.Component {
    logIn() {
      console.log("Logged In");
    }
    logOut() {
      console.log("Logged Out");
    }
    render() {
      return <WrapComponent login={this.logIn()} logOut={this.logOut()} />;
    }
  };
};

class FeatureComponents extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.logIn()}>LogIn</button>
        <button onClick={() => this.props.logOut()}>LogOut</button>
      </div>
    );
  }
}

const FeatureWithAuth = withLogin(FeatureComponents);

function App() {
  return (
    <div>
      <h2>Diff b/w Types of components</h2>
      <h3>Q1: WHat is Smart/Stateful/Container components ?</h3>
      <h3>What is Higher Order Components ?</h3>
      <p>
        Functions that takes a components and return a new enhanced component.
      </p>
      <p>
        used for code reuse, logic sharing and adding additional functionalities
        to components .
      </p>
      {/* <FeatureWithAuth /> */}
      <h3>What are Pure conponents ?</h3>
    </div>
  );
}

export default App;
