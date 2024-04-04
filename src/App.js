import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';

import reviewPage from './pages/reviewPage';
import Login from './Login';
import Register from './Register';
import Qualifications from './Components/QualPage';
import home from './pages/home';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

}

function App() {

 




  return (
    <Router>
        <Navbar />

          <Routes>
            <Route path="/" exact Component={home} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/About" Component={AboutPage} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/review" Component={reviewPage} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/Login" Component={Login} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/Register" Component={Register} /> {/* 'component' prop is replaced with 'element' */}
            <Route path="/Qualifications" Component={Qualifications} /> {/* 'component' prop is replaced with 'element' */}
          </Routes>
        
    </Router>
  );
  



}

export default App;
