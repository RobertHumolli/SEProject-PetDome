import React, { useState } from 'react';
import './completeRegister.css';
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const [user, setUser] = useState({
        Name: '', isPetMinder: false, petName: '', petAge: '', petDescription: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setUser({ ...user, [name]: val });
    };

    const getdata = async (e) => {
        e.preventDefault();

        const { Name, isPetMinder, petName, petAge, petDescription } = user;

        const dataToStore = {
            Name,
            isPetMinder,
            ...(isPetMinder ? {} : { petName, petAge, petDescription })
        };

        try {
            const response = await fetch('https://pet-domedb-default-rtdb.europe-west1.firebasedatabase.app/UserData.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToStore)
            });

            if (response.ok) {
                alert('Data saved');
                navigate('/about');
            } else {
                alert('Data not saved');
            }
        } catch (error) {
            console.error('Error saving data:', error);
            alert('An error occurred while saving the data. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <div className='form'>
                <div className='container'>
                    <form method='POST'>
                        <input type='text' name='Name' placeholder='Username' value={user.Name} required onChange={handleChange} />
                        
                        {!user.isPetMinder && (
                            <>
                                <input type='text' name='petName' placeholder='PetName' value={user.petName} required onChange={handleChange} />
                                <input type='text' name='petAge' placeholder='PetAge' value={user.petAge} required onChange={handleChange} />
                                <textarea name='petDescription' placeholder='PetDescription' value={user.petDescription} required onChange={handleChange} />
                            </>
                        )}
                        <label>
                            <input type='checkbox' name='isPetMinder' checked={user.isPetMinder} onChange={handleChange} />
                            Are you a pet minder?
                        </label>
                        <button onClick={getdata}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
