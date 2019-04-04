import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
       <legend>Login Screen</legend>
        <form className="form">
          <input type="text" placeholder=" Login ID" className="form-control" />
          <br />
          <input type="password" placeholder=" Password" className="form-control" />
          <br />
          <button type="submit">Login</button>
        </form> 
      </div>
    )
  }
}
export default Login