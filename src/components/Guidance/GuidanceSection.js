import React from 'react';
import './GuidanceSection.css';


function GuidanceSection() {

return (
    <div className="guidance-container">
      <div className="top-triangle"></div>
      <div className='guidance-text-container'>
          <div className="guidance-title">
            <h1>Guidance</h1>
          </div>
          <p>
          Guiding lines, both direct (like arrows and borders) and subtle (such as the arrangement of images and text), are a practical solution for focusing attention in UX design. They not only ensure clear and easy navigation but also enhance the overall user experience by making the interface more organized and intuitive. Simple yet effective, these lines are fundamental in guiding the user's journey through a website or app, contributing to a seamless interaction
          </p>
        </div>
        <div className="bottom-triangle"></div>
    </div>
  );
}

export default GuidanceSection;