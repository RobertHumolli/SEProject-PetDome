import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../pages/firebase';
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    const navToggle = () => {
        setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
        setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
    };

    const handleLogout = async () => {
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
                {location.pathname !== '/complete-register' && (
                    <>
                        <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                        <li className="nav__item"><a href="/qualifications" className="nav__link">Qualifications</a></li>
                        
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <li className="nav__item"><a href="/login" className="nav__link">Login</a></li>
                        <li className="nav__item"><a href="/register" className="nav__link">Register</a></li>
                        <li className="nav__item"><a href="/review" className="nav__link">Review</a></li>
                    </>
                )}
                {isAuthenticated && location.pathname !== '/complete-register' && (
                    <li className="nav__item"><button onClick={handleLogout} className="nav__link">Logout</button></li>
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
