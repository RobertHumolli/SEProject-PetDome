import React from 'react';
import './AboutPage.css';

const AboutPage = () => {

  const backgroundImageStyle = {
    backgroundImage: 'url(/Dog.jpg)', 
    backgroundSize: 'cover', // Change to 'cover' to fill the container
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Adjust as necessary
    width: '100vw', // Ensure the width is also covering the full viewport
  };

  return (
    <div style={backgroundImageStyle}> {/* Applied background style here */}
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat lacus eu ante scelerisque, et commodo nulla convallis. Proin congue felis non ligula dapibus, ac laoreet neque interdum. Fusce ac dapibus turpis. Integer lobortis mi quis sollicitudin aliquam.</p>
    </div>
  );
}

export default AboutPage;
