import "./App.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = event => {
    this.userHasAuthenticated(false);
  };

  render() {
    const auth = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App">
        <header className="App-header">
          <Link to="/" className="App-link">
            Home
          </Link>
          {this.state.isAuthenticated ? (
            <span onClick={this.handleLogout} className="App-link">
              Logout
            </span>
          ) : (
            <>
              <Link to="/signup" className="App-link">
                Signup
              </Link>
              <Link to="/login" className="App-link">
                Login
              </Link>
            </>
          )}
        </header>
        <main>
          <Routes auth={auth} />
        </main>
      </div>
    );
  }
}

export default App;
