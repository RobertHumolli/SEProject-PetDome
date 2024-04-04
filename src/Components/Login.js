import React from 'react';
import './Login.css';

function Login() {
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Log</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <div className="login-page">
          <div className="form">
            <form className="login-form" method="post">
              <h2> Login</h2>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <a className="btn" href="#">
                <span />
                <span />
                <span />
                <span />
                Sign in
              </a>
              <p className="message">Not registered? <a href="./register">Create an account</a></p>
            </form>
          </div>
        </div>
        </div>
      );
}

export default Login;