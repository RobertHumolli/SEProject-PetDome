//PROFILE FOR PET OWNER

import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file for styling
import { db, auth } from './firebase'; //initialize Firebase
import { getDocs, collection, query, where } from 'firebase/firestore';

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);   // Initialize  current user state
    const [profileData, setProfileData] = useState(null);  // Initialize  profile data state

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {       //use effect used to load this data instantly when te page is loaded and checks if a user is logged in
            setCurrentUser(user);                           
            if (user) {                                 //if user is logged in, fetch the user data
                fetchUserData(user.email);
            }
        });
        return unsubscribe;                     
    }, []);

    const fetchUserData = async (email) => {        
        const q = query(collection(db, 'petOwnerData'), where('email', '==', email)); //this is a firebase query to retrive user data from the database
        const querySnapshot = await getDocs(q);    //waits for the results of the query and matches the qurery with criteria
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();     //if the query is not empty, it fetches the data
            setProfileData(userData);       //sets the profile data at the top of this page to the fetched data
        }
    };

    return (                        //displays the outputs of the functions above
        <div className="profile-container">
            <h2>Profile</h2>
            {currentUser ? (
                <div>
                    <p>Welcome, {currentUser.email}</p>
                    {profileData && (
                        <div className="profile-info">
                            {profileData.isPetOwner ? (         //checks if the user is a pet owner or not and displays the respective data
                                <>
                                    <p>Pet Name: {profileData.petName}</p>
                                    <p>Pet Age: {profileData.petAge}</p>
                                    <p>Pet Info: {profileData.petInfo}</p>
                                </>
                            ) : (
                                <>
                                    <p>Username: {profileData.username}</p>
                                    <p>Age: {profileData.age}</p>
                                    <p>Location: {profileData.location}</p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <p>Please log in to view your profile.</p> //if logged out the user is prompted to log in to view the profile
            )}
        </div>
    );
}

export default Profile;
