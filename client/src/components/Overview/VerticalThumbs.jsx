import React from 'react';

import { styles } from './dummyData.js';

const VerticalThumbs = () => {
  return (
    <div className="vThumb-container">
      <div className="vThumb-arrow">$$</div>
      {styles.results.map(style => (
        <img
          src={ style.photos[0].thumbnail_url }
          key={ style.style_id }
          className="vThumb-img"
        />

      ))}
      <div className="vThumb-arrow">$$</div>
    </div>
  );
};

export default VerticalThumbs;