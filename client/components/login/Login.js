import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("/dev-server/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value
      })
    })
      .then(response => response.json())
      .then(function(body) {
        console.log(body);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form
        className="margin: auto; width: 50%; margin-top: 200;"
        onSubmit={this.handleSubmit}
        id="form"
      >
        <label htmlFor="email">Login</label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
