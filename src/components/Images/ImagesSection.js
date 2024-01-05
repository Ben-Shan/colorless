import React from 'react';
import './ImagesSection.css';
import colorlessImage from './colorless_image.png';


function ImagesSection() {

return (
    <div className="images-container">
      <img src={colorlessImage} alt="Description" className="large-image" />
      <div className="images-title">
        <h1>Imagery</h1>
      </div>
      <p>
      Imagery can effectively highlight key sections or components. Placing relevant, eye-catching images near important features can draw user attention and enhance interaction. Imagery creates a visual hierarchy, attracting the eye and improving the interface's overall usability and appeal. Simple yet impactful, the right images make navigating a website or app more intuitive and engaging.
        </p>
    </div>
  );
}

export default ImagesSection;