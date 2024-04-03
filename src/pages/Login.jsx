import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Assuming this is the path to your firebase.js file

const LoginPage = () => {
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
           
        } catch (error) {
            alert('Invalid credentials. Please try again.');
            
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <div className="form">
                <div className="container">
                    <form method="POST">
                        <input type="text" name="email" placeholder="Email" value={loginData.email} required onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" value={loginData.password} required onChange={handleChange} />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
