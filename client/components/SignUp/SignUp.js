import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.updateLogin()
    e.preventDefault();
    fetch("/dev-server/signup", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value
      })
    })
      .then(() => this.props.updateLogin())
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form
        className="signup-form"
        onSubmit={this.handleSubmit}
        id="form"
      >
        <h2>Otis Sign Up</h2>

        <input type="text" name="name" placeholder="Name" required />
        <input type="text" placeholder="Email" name="email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignUp;
