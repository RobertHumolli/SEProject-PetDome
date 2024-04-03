import React, { useState } from 'react';
import './Register.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const RegisterPage = () => {
    const [user, setUser] = useState({
        email: '', password: ''
    });
    const navigate = useNavigate(); // Use useNavigate to get the navigate function

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Create user with email and password
            const auth = getAuth();
            const { email, password } = user;
            const credential = await createUserWithEmailAndPassword(auth, email, password);

            if (credential.user) {
                // Redirect to CompleteRegisterScript.jsx upon successful registration
                navigate('/complete-register');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering the user. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <div className='form'>
                <div className='container'>
                    <form method='POST'>
                        <input type='text' name='email' placeholder='Email' value={user.email} required onChange={handleChange} />
                        <input type='password' name='password' placeholder='Password' value={user.password} required onChange={handleChange} />
                        <button onClick={handleRegister}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
