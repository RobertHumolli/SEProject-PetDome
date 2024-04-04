import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import "./Navbar.css";

function Navbar(props) {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState("nav__toggler"); // Corrected state value

    const navToggle = () => {
        setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
        setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler'); // Corrected state value
        
    }

    return (
        <nav className='nav'>
            <Link to="/" className="nav__brand">PetDome</Link> {/* Use Link component for the brand */}
            <ul className={active}>
                {/* Use Link component with the 'to' prop set to the path of the AboutPage */}
                <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                <li className="nav__item"><Link to="/qualifications" className="nav__link">Qualifications</Link></li>

                <li className="nav__item"><Link to="/login" className="nav__link">Login</Link></li>
                <li className="nav__item"><Link to="/register" className="nav__link">Register</Link></li>
                <li className="nav__item"><Link to="/review" className="nav__link">Review</Link></li>

            </ul>
            <div onClick={navToggle} className={toggleIcon ? 'nav__toggler toggle' : 'nav__toggler'}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
            </div>
        </nav>
    )
}

export default Navbar;

