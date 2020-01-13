import React from "react";
import ReactDOM, { render } from "react-dom";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      message: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };
  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/users/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json"
  //     },

  //     body: JSON.stringify({
  //       username: this.state.username,
  //       email: this.state.email,
  //       password: this.state.password
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(({ data }) => {
  //       console.log(data.token);
  //       if (data.success) {
  //         this.props.history.push("/sign-in");
  //       } else {
  //         this.setState({ message: data.message });
  //       }
  //     });
  // }

  handleChange = e => {
    console.log(this.state);
    // var user = {
    //   email: this.state.email,
    //   password: this.state.password,
    //   username: this.state.username
    // };
    e.preventDefault();
    fetch("https://conduit.productionready.io/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.user) {
          this.props.history.push("/signin");
          localStorage.setItem("token", data.user.token);
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
            <h1>Sign Up</h1>
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
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onChange}
                    name="username"
                  />
                </fieldset>
                <fieldset className="email">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                    name="email"
                  />
                </fieldset>
                <fieldset className="email">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                    name="password"
                  />
                </fieldset>
              </fieldset>
              <button className="btn_primary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
