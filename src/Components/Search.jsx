import React, { useState } from 'react';
import './Search.css'; // Make sure to create an App.css file with the styles you want
import {data} from './data.js';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

console.log(data)
  return (
    <div className="container">
      <h1 className='text-center mt-4'>Find A Pet Minder</h1>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder='Search Pet Minders'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='table-container'>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>City</th>
            
          </tr>
        </thead>
        <tbody>
          {contacts
            .filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.first_name.toLowerCase().includes(search.toLowerCase())
                    ||  item.city.toLowerCase().includes(search.toLowerCase());
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td><button onClick={() => navigate('/appointmentform')}>Book</button></td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Search;