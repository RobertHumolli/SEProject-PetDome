import React from 'react';
import './reviewPage.css';

const reviewPage = () => {

  const backgroundImageStyle = {
    backgroundImage: 'url(/Dog.jpg)', 
    backgroundSize: 'cover', // Change to 'cover' to fill the container
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat', //background position
    minHeight: '100vh', // Adjust as necessary
    width: '100vw', // Ensure the width is also covering the full viewport
  };

  return (
    <div style={backgroundImageStyle}> {/* Applied background style here */}
      <h1>About Us</h1>
      <p>Review pAGW</p>
    </div>
  );
}

export default reviewPage;
