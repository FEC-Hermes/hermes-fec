import React, { useState, useEffect } from 'react';

import { styles } from '../dummyData.js';

const VerticalThumbs = () => {

  let maxIdx = styles.results.length - 7;
  const [imageIdx, setImageIdx] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  useEffect(() => {
    arrowVisibility();
  }, []);

  useEffect(() => {
    slideThumbs();
    arrowVisibility();
  }, [imageIdx]);


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

  const slideThumbs = () => {
    const images = document.getElementsByClassName('vThumb-img-frame');

    //comse back to this and adjust eas in and out

    Array.from(images).forEach(img => {
      img.style.transform = `translateY(${yAxis}px)`;
    });
  };

  const onArrowClick = (arrow) => {

    if (arrow === 'up' && imageIdx > 0) {
      setYAxis(yAxis + 100);
      setImageIdx(imageIdx - 1);
    } else if (arrow === 'down' && imageIdx < maxIdx) {
      setYAxis(yAxis - 100);
      setImageIdx(imageIdx + 1);
    }
  };

  const onImageClick = (id) => {
    const images = document.getElementsByClassName('vThumb-img');
    Array.from(images).forEach(img => {
      img.classList.remove('vThumb-img-active');
    });

    document.getElementById(id).classList.add('vThumb-img-active');
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
          <div
            key={ style.style_id }
            className="vThumb-img-frame" >
            <img
              src={ style.photos[0].thumbnail_url }
              id={ style.style_id }
              className="vThumb-img"
              onClick={ () => onImageClick(style.style_id)}
            />
          </div>
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