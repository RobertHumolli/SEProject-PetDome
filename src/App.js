import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';

function App() {




  return (
    <Router>
      <div> {/* Applied background style here */}
        <Navbar />
        <Routes>
          <Route path="/about" element={<AboutPage />} /> {/* 'component' prop is replaced with 'element' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
