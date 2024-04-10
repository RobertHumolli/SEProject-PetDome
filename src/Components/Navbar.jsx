import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from './firebase';
import './Navbar.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';






function Navbar() {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const location = useLocation();

    const navigate = useNavigate();



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setIsAuthenticated(!!user);
            if (user) {
                fetchUserData(user.email);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            setActive('nav__menu');
            setToggleIcon('nav__toggler toggle');
        }
    }, [isAuthenticated]);

    const navToggle = () => {
        setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
        setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsAuthenticated(false);
            navigate('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const fetchUserData = async (email) => {
        const q = query(collection(db, 'petOwnerData'), where('email', '==', email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            setProfileData(userData);
        }
    };

    return (
        <nav className="nav">
            <Link to="/about" className="nav__brand">PetDome</Link>
            <ul className={active}>
                {!isAuthenticated && (
                    <>
                        <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                        <li className="nav__item"><Link to="/login" className="nav__link">Login</Link></li>
                        <li className="nav__item"><Link to="/register" className="nav__link">Register</Link></li>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                        
                        {profileData && profileData.isPetOwner ? (
                            <li className="nav__item"><Link to="/review2" className="nav__link">Review</Link></li>
                            
                        ) : (
                            <>
                            <li className="nav__item"><Link to="/review" className="nav__link">Review</Link></li>
                            <li className="nav__item"><Link to="/qualifications" className="nav__link">Qualifications</Link></li>
                            </>
                        )}
                        <li className="nav__item"><Link to="/profile" className="nav__link">Profile</Link></li>
                        <li className="nav__item"><Link to="/search" className="nav__link"><img src="/searchicon.png" alt="Search" className='nav__image' /></Link></li>
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
