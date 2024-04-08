import React, { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';

function Register() {
    const [newUsername, setNewUsername] = useState('');           //intialzie all the states to be used to store data
    const [newPetName, setNewPetName] = useState('');
    const [newPetAge, setNewPetAge] = useState(0);
    const [newPetInfo, setNewPetInfo] = useState('');
    const [newisPetOwner, setNewisPetOwner] = useState(true);
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newAge, setNewAge] = useState(0);
    const [newLocation, setNewLocation] = useState('');

    const profileDataRef = collection(db, 'petOwnerData');         //reference to the collection in the databas

    const onSubmitProfileData = async (e) => {                //function to submit the data to the database when registered
        try {
            if (newisPetOwner) {                     //if pet owner is true then it adds ther pet details else it will add the pet minder details
                await addDoc(profileDataRef, {
                    username: newUsername,
                    petName: newPetName,
                    petAge: newPetAge,
                    petInfo: newPetInfo,
                    isPetOwner: newisPetOwner,
                    email: newEmail,
                    password: newPassword
                });
            } else {
                await addDoc(profileDataRef, {                 //add doc is used in firestore to add to a the database
                    username: newUsername,
                    age: newAge,
                    location: newLocation,
                    isPetOwner: newisPetOwner,
                    email: newEmail,
                    password: newPassword
                });
            }
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    const navigate = useNavigate();               //useNavigate is used to navigate to the another page

    const handleChange = (e) => {                   //function to handle the change in the input fields
        const { name, value } = e.target;
        if (name === "email") {
            setNewEmail(value);
        } else if (name === "password") {
            setNewPassword(value);
        } else {
            setNewUsername(value);
        }
    };

    const handleRegister = async (e) => {               //this stores the email and password in firebase authentication where as the other data is in firestore
                                                       
        e.preventDefault();

        try {
            const auth = getAuth();          
            const credential = await createUserWithEmailAndPassword(auth, newEmail, newPassword);

            if (credential.user) {
                navigate('/');                                //if successful, it navigates to the home page
            }
        } catch (error) {
            
            alert('Make sure the email is not in use and or the password is at least 6 characters long.');
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
                    <form className="register-form" onSubmit={handleRegister}>
                        <h2>Register</h2>
                        <input type="text" name="email" placeholder="Email *" value={newEmail} required onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password *" value={newPassword} required onChange={handleChange} />
                        <input placeholder='Username' type='text' name='username' required onChange={(e) => setNewUsername(e.target.value)} />
                        {newisPetOwner &&
                            <>
                                <input placeholder='Pet Name' type='text' name='petName' required onChange={(e) => setNewPetName(e.target.value)} />
                                <input placeholder='Pet Age' type='number' name='petAge' required onChange={(e) => setNewPetAge(Number(e.target.value))} />
                                <textarea placeholder='Pet Info' type='text' name='petInfo' required onChange={(e) => setNewPetInfo(e.target.value)} />
                            </>
                        }
                        {!newisPetOwner &&
                            <>
                                <input placeholder='Age' type='number' name='age' required onChange={(e) => setNewAge(Number(e.target.value))} />
                                <input placeholder='Location' type='text' name='location' required onChange={(e) => setNewLocation(e.target.value)} />
                            </>
                        }
                        <label htmlFor='isPetOwner'>Pet Minder? Uncheck This Box</label>
                        <input type='checkbox' defaultChecked='true' name='isPetOwner' onChange={(e) => setNewisPetOwner(e.target.checked)} />
                        <button type="submit" className="btn" onClick={onSubmitProfileData}>
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
