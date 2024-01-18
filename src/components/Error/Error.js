import React from 'react';
import './Error.css';
import errorImage from './error_img_trans.png';

function Error() {
  return (
    <div>
      <div className="error-page">
        <img src={errorImage} alt="Description" className="error-image" />
        <h1>Page currently under construction</h1>
      </div>
    </div>
  );
}

export default Error;