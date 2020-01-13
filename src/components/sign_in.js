import React from "react";
import ReactDOM, { render } from "react-dom";
import { withRouter } from "react-router-dom";
import Home from "../components/home_main";
// import Navbar from "../src/components/navbar";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleChange = e => {
    e.preventDefault();
    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);

        if (localStorage.token) {
          this.props.history.push("/home");
        } else {
          this.setState({ message: data.message });
        }
      });
  };

  render() {
    return (
      <div>
        <div className="main-container">
          <div className="rows">
            <h1>Sign In</h1>
            <p className="text-center">
              <a className="account" href="#register">
                Need an account?
              </a>
            </p>
            <form onSubmit={this.handleChange}>
              <fieldset>
                <fieldset className="email">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.onChange}
                  />
                </fieldset>
                <fieldset className="email">
                  <input
                    onChange={this.onChange}
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </fieldset>
              </fieldset>
              <button className="btn_primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
