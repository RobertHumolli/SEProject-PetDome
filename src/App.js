import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';
import Login from './Login';
import Register from './Register';
import Qualifications from './Components/QualPage';

function App() {

  const backgroundImageStyle = {
    backgroundImage: 'url(/Dog.jpg)', 
    backgroundSize: 'cover', // Change to 'cover' to fill the container
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Adjust as necessary
    width: '100vw', // Ensure the width is also covering the full viewport
  };
  

  return (
    <Router>
      <div style={backgroundImageStyle}> {/* Applied background style here */}
        <Navbar />
        <Routes>
          <Route path="/about" element={<AboutPage />} /> {/* 'component' prop is replaced with 'element' */}
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
