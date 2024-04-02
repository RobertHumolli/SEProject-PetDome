import React from 'react';
import './Login.css';

function Profile() {
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reg</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <div className="login-page">
        <div className="form">
            <form className="register-form" method="POST">
                <h2>Register</h2>
                <input type="text" placeholder="Pet Name *" required />
                <input type="text" placeholder="Age *" required />
                <input type="text" placeholder="Breed *" required />
                <input type="text" placeholder="Gender *" required />
                <input type="text" placeholder="Bio *" required />
                <a className="btn" href="#">
                    <span />
                    <span />
                    <span />
                    <span />
                    Create
                </a>
                <p className="message">Already registered? <a href="#">Sign In</a></p>
            </form>
        </div>
        </div>
    </div>

}

export default Profile;