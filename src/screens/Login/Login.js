import "./Login.css";

import React from "react";
import { Auth } from "aws-amplify";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
          />
          <br />
          <label>Password</label>
          <input
            value={this.state.password}
            id="password"
            onChange={this.handleChange}
            type="password"
          />
          <button disabled={!this.validateForm()} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
