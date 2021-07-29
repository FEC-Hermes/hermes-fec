import React, { useState, useEffect } from 'react';
import { MainContainer, ImgContainer, ImgFrame, Img } from './styles.js';

import StylesContext from '../../contexts/StylesContext.js';

const VerticalThumbs = ({ setCurrImage }) => {

  const { currStyle } = React.useContext(StylesContext);
  const [style] = currStyle;

  let maxIdx = style.photos.length - 7;
  const [imageIdx, setImageIdx] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  useEffect(() => {
    slideThumbs();
    arrowVisibility();
  }, [imageIdx]);

  const arrowVisibility = () => {
    const arrowUp = document.getElementById('vThumb-arrow-up');
    const arrowDown = document.getElementById('vThumb-arrow-down');

    if (style.photos.length <= 7) {
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
    const images = document.getElementsByClassName('imgFrame');

    Array.from(images).forEach(img => {
      img.style.transform = `translateY(${yAxis}px)`;
      img.style.transitionTimingFunction = 'ease-in';
      img.style.transition = '.3s';
    });
  };

  const onArrowClick = (arrow) => {
    if (arrow === 'up' && imageIdx > 0) {
      setYAxis(yAxis + 89);
      setImageIdx(imageIdx - 1);
    } else if (arrow === 'down' && imageIdx < maxIdx) {
      setYAxis(yAxis - 89);
      setImageIdx(imageIdx + 1);
    }
  };

  const onImageClick = (id) => { /* id is set to image url */
    const images = document.getElementsByClassName('thumbImg');

    Array.from(images).forEach(img => {
      img.parentNode.style.boxShadow = '0px 0px 3px #000';
      img.parentNode.style.border = '1px solid #000';
    });

    document.getElementById(id).parentNode.style.boxShadow = '0px 0px 8px #fff';
    document.getElementById(id).parentNode.style.border = '3px solid #fff';

    setCurrImage(id);
  };

  return (
    <MainContainer>
      <svg
        id="vThumb-arrow-up"
        onClick={ () => onArrowClick('up') }
        width="30"
        height="30"

        aria-hidden="true"
        focusable="false"
        data-icon="chevron-up"
        viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
      <ImgContainer>
        {
          style.photos.map(photo => (
            <ImgFrame key={ photo.url } className="imgFrame">
              <Img
                src={ photo.thumbnail_url }
                id={ photo.url }
                className="thumbImg"
                onClick={ () => onImageClick(photo.url)}
              />
            </ImgFrame>
          ))
        }
      </ImgContainer>
      <svg
        id="vThumb-arrow-down"
        onClick={ () => onArrowClick('down') }
        width="30"
        height="30"

        aria-hidden="true"
        focusable="false"
        data-icon="chevron-down"
        viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
    </MainContainer>
  );
};

export default VerticalThumbs;