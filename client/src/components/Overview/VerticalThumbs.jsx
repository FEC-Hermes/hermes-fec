import React, { useState, useEffect } from 'react';

import { styles } from './dummyData.js';

const VerticalThumbs = () => {

  let maxIdx = styles.results.length - 1;
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    arrowVisibility();
  }, []);



  const arrowVisibility = () => {
    const arrowUp = document.getElementById('vThumb-arrow-up');
    const arrowDown = document.getElementById('vThumb-arrow-down');

    if (imageIdx === 0) {
      arrowUp.style.visibility = 'hidden';
    } else if (imageIdx === maxIdx) {
      arrowDown.style.visibility = 'hidden';
    } else {
      arrowUp.style.visibility = 'visible';
      arrowDown.style.visibility = 'visible';
    }
  };

  const onArrowClick = (arrow) => {
    if (arrow === 'up' && imageIdx > 0) {
      setImageIdx(imageIdx - 1);
    } else if (arrow === 'down' && imageIdx < maxIdx) {
      setImageIdx(imageIdx + 1);
    }
    console.log(imageIdx)
    arrowVisibility();
  };


  return (
    <div className="vThumb-container">
      <div
        id="vThumb-arrow-up"
        className="vThumb-arrow"
        onClick={ () => onArrowClick('up') }
      >$$</div>
      <div className="vThumb-img-container">
        {styles.results.map(style => (
          <img
            src={ style.photos[0].thumbnail_url }
            key={ style.style_id }
            className="vThumb-img"
          />
        ))}
      </div>
      <div
        id="vThumb-arrow-down"
        className="vThumb-arrow"
        onClick={ () => onArrowClick('down') }
      >$$</div>
    </div>
  );
};

export default VerticalThumbs;