import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';
import Profile from './Components/Profile';
import reviewPage from './Components/reviewPage';
import reviewPage2 from './Components/reviewPage2';
import Login from './Components/Login';
import Register from './Components/Register';
import Qualifications from './Components/QualPage';
import home from './Components/home';
import Profile2 from './Components/Profile 2';
import Search from './Components/Search';
import AppointmentForm from './Components/AppointmentForm';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

const ProfileDataContext = createContext();

function App() {
  const [profileData, setProfileData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = { email: 'example@example.com' };
    setCurrentUser(user);
    fetchUserData(user.email);
  }, []);

  const fetchUserData = async (email) => {
    const userData = {
      email: email,
      username: 'Example User',
      isPetOwner: true,
    };
    setProfileData(userData);
  };

  return (
    <Router>
      <ProfileDataContext.Provider value={{ profileData }}>
        <Navbar />
        <Routes>
            <Route path="/" exact Component={home} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/About" Component={AboutPage} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/review" Component={reviewPage} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/Login" Component={Login} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/register" Component={Register} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/Qualifications" Component={Qualifications} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/Profile" Component={Profile} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/Search" Component={Search} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/review2" Component={reviewPage2} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/Profile2" Component={Profile2} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/appointmentform" Component={AppointmentForm} /> {/* 'component' prop is replaced with 'element' */}
        </Routes>
      </ProfileDataContext.Provider>
    </Router>
  );
}

export default App;
