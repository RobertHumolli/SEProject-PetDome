import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';

function App() {

  const backgroundImageStyle = {
    backgroundImage: 'url(/Dog.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Router>
      <div style={backgroundImageStyle}> {/* Applied background style here */}
        <Navbar />
        <Routes>
          <Route path="/about" element={<AboutPage />} /> {/* 'component' prop is replaced with 'element' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
