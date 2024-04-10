import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file for styling
import { db, auth } from './firebase'; //initialize Firebase
import { getDocs, collection, query, where, updateDoc, doc } from 'firebase/firestore';

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);   
    const [profileData, setProfileData] = useState(null);  
    const [addingPet, setAddingPet] = useState(false);     
    const [newPet, setNewPet] = useState({                 
        petName: '',
        petAge: '',
        petInfo: ''
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);                           
            if (user) {
                fetchUserData(user.email);
            }
        });
        return unsubscribe;                     
    }, []);

    const fetchUserData = async (email) => {        
        const q = query(collection(db, 'petOwnerData'), where('email', '==', email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            setProfileData({ ...userData, id: querySnapshot.docs[0].id });
        }
    };

    const handleAddPet = () => {
        setAddingPet(true);
    };

    const handleCancelAddPet = () => {
        setAddingPet(false);
    };

    const handleSavePet = async () => {
        const newPetObj = {
            [`pet${Date.now()}`]: newPet
        };

        try {
            await updateDoc(doc(db, 'petOwnerData', profileData.id), {
                pets: {
                    ...profileData.pets,
                    ...newPetObj
                }
            });
            setNewPet({ petName: '', petAge: '', petInfo: '' });
            setAddingPet(false);
            fetchUserData(currentUser.email); // Fetch user data again to reflect changes
        } catch (error) {
            console.error('Error adding pet:', error);
            // Handle error
        }
    };

    const handleDeletePet = async (petKey) => {
        // Create a copy of the pets object without the pet to be deleted
        const { [petKey]: deletedPet, ...updatedPets } = profileData.pets;

        try {
            await updateDoc(doc(db, 'petOwnerData', profileData.id), {
                pets: updatedPets
            });
            fetchUserData(currentUser.email); // Fetch user data again to reflect changes
        } catch (error) {
            console.error('Error deleting pet:', error);
            // Handle error
        }
    };

    const handleChangeNewPet = (e) => {
        const { name, value } = e.target;
        setNewPet(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            {currentUser ? (
                <div>
                    <p>Welcome, {currentUser.email}</p>
                    {profileData && (
                        <div className="profile-info">
                            {profileData.isPetOwner ? (
                                <>
        
                                    <p>Username: {profileData.username}</p>
                                    <p>Age: {profileData.age}</p>
                                    <p>Address: {profileData.location}</p>
                                    {Object.keys(profileData.pets).map((petKey, index) => (
                                        <div key={index}>
                                            <p>Pet Name: {profileData.pets[petKey].petName}</p>
                                            <p>Pet Age: {profileData.pets[petKey].petAge}</p>
                                            <p>Pet Info: {profileData.pets[petKey].petInfo}</p>
                                            <button onClick={() => handleDeletePet(petKey)}>Delete Pet</button>
                                        </div>
                                    ))}
                                    {addingPet ? (
                                        <div>
                                            <input type="text" name="petName" placeholder="Pet Name" value={newPet.petName} onChange={handleChangeNewPet} />
                                            <input type="number" name="petAge" placeholder="Pet Age" value={newPet.petAge} onChange={handleChangeNewPet} />
                                            <textarea type="text" name="petInfo" placeholder="Pet Info" value={newPet.petInfo} onChange={handleChangeNewPet} />
                                            <button onClick={handleSavePet}>Save Pet</button>
                                            <button onClick={handleCancelAddPet}>Cancel</button>
                                        </div>
                                    ) : (
                                        <button onClick={handleAddPet}>Add Pet</button>
                                    )}
                                </>
                            ) : (
                                <>
                                    <p>Username: {profileData.username}</p>
                                    <p>Age: {profileData.age}</p>
                                    <p>Address: {profileData.location}</p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
}

export default Profile;
