import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    const [isAuthenticated, setIsAuthenticated] = useState(false);        //initialize the state to be used to know if the user is logged in
    const location = useLocation();

    useEffect(() => {       //use effect to check if the user is logged in and set the state accordingly
        const unsubscribe = onAuthStateChanged(auth, (user) => {   
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {           //use effect to check if the user is logged in and display the navigation bar accordingly
        if (isAuthenticated) {
            setActive('nav__menu');
            setToggleIcon('nav__toggler toggle');
        }
    }, [isAuthenticated]);

    const navToggle = () => {          //function to toggle the navigation bar 
        setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
        setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
    };

    const handleLogout = async () => {               //logout function
        try {
            await signOut(auth);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <nav className="nav">
            <Link to="/about" className="nav__brand">PetDome</Link>
            <ul className={active}>
                
                {!isAuthenticated && (               //if the user is not logged in, display the login and register buttons
                    <>
                        <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                        <li className="nav__item"><Link to="/qualifications" className="nav__link">Qualifications</Link></li>
                        <li className="nav__item"><Link to="/login" className="nav__link">Login</Link></li>
                        <li className="nav__item"><Link to="/register" className="nav__link">Register</Link></li>
                        
                    </>
                )}
                {isAuthenticated && (          //if the user is logged in, display the review, profile and logout buttons
                    <>
                        <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                        <li className="nav__item"><Link to="/qualifications" className="nav__link">Qualifications</Link></li>
                        <li className="nav__item"><Link to="/review" className="nav__link">Review</Link></li>
                        <li className="nav__item"><Link to="/profile" className="nav__link">Profile</Link></li>
                        <li className="nav__item"><Link to="/search" className="nav__link">Search</Link></li>
                        <li className="nav__item"><button onClick={handleLogout} className="nav__link">Logout</button></li>
                    </>
                )}
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
