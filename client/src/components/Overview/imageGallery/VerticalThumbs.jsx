import React, { useState, useEffect } from 'react';

// import { styles } from '../dummyData.js';

const VerticalThumbs = ({ styles }) => {
  let maxIdx = styles.length - 7;

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

    if (maxIdx <= 7) {
      arrowUp.style.visibility = 'hidden';
      arrowDown.style.visibility = 'hidden';
    } else if (imageIdx === 0) {
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

    Array.from(images).forEach(img => {
      img.style.transform = `translateY(${yAxis}px)`;
      img.style.transitionTimingFunction = 'ease-in';
      img.style.transition = '.5s';
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
      <svg
        id="vThumb-arrow-up"
        className="vThumb-arrow"
        onClick={ () => onArrowClick('up') }
        width="30"
        height="30"

        aria-hidden="true"
        focusable="false"
        data-icon="chevron-up"
        viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
      <div className="vThumb-img-container">
        {
          styles.map(style => (
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
          ))
        }
      </div>
      <svg
        id="vThumb-arrow-down"
        className="vThumb-arrow-arrow"
        onClick={ () => onArrowClick('down') }
        width="30"
        height="30"

        aria-hidden="true"
        focusable="false"
        data-icon="chevron-down"
        viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
    </div>
  );
};

export default VerticalThumbs;