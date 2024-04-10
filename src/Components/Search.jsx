import React, { useState, useEffect } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import { db, auth } from './firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

function Search() {
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const q = query(collection(db, 'petOwnerData'), where('isPetOwner', '==', false));
        try {
            const querySnapshot = await getDocs(q);
            const fetchedContacts = querySnapshot.docs.map(doc => doc.data());
            setContacts(fetchedContacts);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    return (
        <div className="container">
            <h1 className='text-center mt-4'>Find A Pet Minder</h1>
            <div className="form-group my-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder='Search Pet Minders'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className='table-container'>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts
                            .filter(item =>
                                item.username.toLowerCase().includes(search.toLowerCase()) ||
                                item.email.toLowerCase().includes(search.toLowerCase()) ||
                                item.location.toLowerCase().includes(search.toLowerCase())
                            )
                            
                            .map((item, index) => (
                                <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.location}</td>
                                    <td>
                                        <button onClick={() => navigate('/appointmentform')}>Book</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Search;
