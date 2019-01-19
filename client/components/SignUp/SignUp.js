import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
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
      .then(response => {
        e.target.elements.reset();
        response.json();
      })
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
        <div>
          <label className="display: block;">Sign Up</label>
        </div>

        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label>Password</label>
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

export default SignUp;
