import React, { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

function Register() {
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newAge, setNewAge] = useState(0);
    const [newLocation, setNewLocation] = useState('');
    const [newisPetOwner, setNewisPetOwner] = useState(true);
    const [newPetData, setNewPetData] = useState({
        petName: '',
        petAge: 0,
        petInfo: ''
    });

    const profileDataRef = collection(db, 'petOwnerData');

    const onSubmitProfileData = async (e) => {
        e.preventDefault();

        // Check if the username is already in use
        const q = query(profileDataRef, where('username', '==', newUsername));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            // The username is not in use, so we can proceed with registration
            try {
                const auth = getAuth();
                const credential = await createUserWithEmailAndPassword(auth, newEmail, newPassword);

                if (credential.user) {
                    let userData = {
                        username: newUsername,
                        age: newAge,
                        location: newLocation,
                        isPetOwner: newisPetOwner,
                        email: newEmail,
                        password: newPassword
                    };

                    if (newisPetOwner) {
                        // Create a unique identifier for the pet
                        const petId = `pet${Date.now()}`;

                        // Create the pet object
                        const newPet = {
                            petName: newPetData.petName,
                            petAge: newPetData.petAge,
                            petInfo: newPetData.petInfo
                        };

                        // Add the pet to the user data
                        userData = {
                            ...userData,
                            pets: {
                                ...userData.pets,
                                [petId]: newPet
                            }
                        };
                    }

                    await addDoc(profileDataRef, userData);

                    navigate('/');
                }
            } catch (error) {
                console.error('Error registering user:', error);
                alert('Email already in use. Please choose a different email.');
            }
        } else {
            // The username is already in use, so we display an error message
            alert('Username is already in use. Please choose a different username.');
        }
    };

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setNewEmail(value);
        } else if (name === "password") {
            setNewPassword(value);
        } else {
            setNewUsername(value);
        }
    };

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Register</title>
            <link rel="stylesheet" href="/css/styles.css" />
            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={onSubmitProfileData}>
                        <h2>Register</h2>
                        <input type="text" name="email" placeholder="Email *" value={newEmail} required onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password *" value={newPassword} required onChange={handleChange} />
                        <input placeholder='Username' type='text' name='username' required onChange={(e) => setNewUsername(e.target.value)} />
                        {newisPetOwner &&
                            <>
                                <input placeholder='Age' type='number' name='age' required onChange={(e) => setNewAge(Number(e.target.value))} />
                                <input placeholder='Address' type='text' name='Address' required onChange={(e) => setNewLocation(e.target.value)} />
                                <input placeholder='Pet Name' type='text' name='petName' required onChange={(e) => setNewPetData({ ...newPetData, petName: e.target.value })} />
                                <input placeholder='Pet Age' type='number' name='petAge' required onChange={(e) => setNewPetData({ ...newPetData, petAge: Number(e.target.value) })} />
                                <textarea placeholder='Pet Info' type='text' name='petInfo' required onChange={(e) => setNewPetData({ ...newPetData, petInfo: e.target.value })} />
                            </>
                        }
                        {!newisPetOwner &&
                            <>
                                <input placeholder='Age' type='number' name='age' required onChange={(e) => setNewAge(Number(e.target.value))} />
                                <input placeholder='Address' type='text' name='address' required onChange={(e) => setNewLocation(e.target.value)} />
                            </>
                        }
                        <label htmlFor='isPetOwner'>Pet Minder? Uncheck This Box</label>
                        <input type='checkbox' defaultChecked='true' name='isPetOwner' onChange={(e) => setNewisPetOwner(e.target.checked)} />
                        <button type="submit" className="btn">
                            <span />
                            <span />
                            <span />
                            <span />
                            Create
                        </button>
                        <p className="message">Already registered? <a href="./login">Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
