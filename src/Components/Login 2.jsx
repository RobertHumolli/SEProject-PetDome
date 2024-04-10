import React, { useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Assuming this is the path to your firebase.js file

function Login() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
            alert('Logged in!');
            // Redirect to dashboard or another page upon successful login
        } catch (error) {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login</title>
            <link rel="stylesheet" href="/css/styles.css" />
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <input type="text" name="email" placeholder="Email" value={loginData.email} required onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" value={loginData.password} required onChange={handleChange} />
                        <button type="submit" className="btn">
                            <span />
                            <span />
                            <span />
                            <span />
                            Sign in
                        </button>
                        <p className="message">Not registered? <a href="./register">Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;