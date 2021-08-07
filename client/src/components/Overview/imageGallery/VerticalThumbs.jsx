import React, { useState, useEffect } from 'react';
import { MainContainer, ImgContainer, ImgFrame, Img } from './styles.js';

import StylesContext from '../../contexts/StylesContext.js';


const VerticalThumbs = () => {

  const {
    currStyle: [style],
    imgIndex:  [imageIndex, setImageIndex],
    expanded:  [expand]
  } = React.useContext(StylesContext);

  const [lowIndex, setLowIndex] = useState(0);
  const [highIndex, setHighIndex] = useState(6);
  const [yAxis, setYAxis] = useState(0);

  const maxIndex = style.photos.length - 7;


  useEffect(() => {
    toggleThumb(0);
    arrowVisibility();
  }, []);

  useEffect(() => {
    slideThumbs();
    toggleThumb(imageIndex);
    arrowVisibility();
  }, [yAxis, expand]);

  useEffect(() => {
    const images = document.getElementById('vThumb-container');
    expand ? images.style.display ='none' : images.style.display = 'flex';
  }, [expand]);


  const arrowVisibility = () => {
    const arrowUp = document.getElementById('vThumb-arrow-up');
    const arrowDown = document.getElementById('vThumb-arrow-down');

    if (style.photos.length <= 7) {
      arrowUp.style.visibility = 'hidden';
      arrowDown.style.visibility = 'hidden';
    } else if (lowIndex === 0) {
      arrowUp.style.visibility = 'hidden';
    } else if (lowIndex === maxIndex) {
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

    if (arrow === 'up') {
      setYAxis((yAxis + 90));
      setLowIndex((lowIndex - 1));
      setHighIndex(highIndex - 1);
      if (maxIndex === highIndex || imageIndex === highIndex) {
        setImageIndex(imageIndex - 1);
      }
    } else if (arrow === 'down') {
      setYAxis((yAxis - 90));
      setLowIndex(lowIndex + 1);
      setHighIndex(highIndex + 1);
      if (maxIndex === lowIndex || imageIndex === lowIndex) {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  const toggleThumb = (index) => {
    const images = document.getElementsByClassName('thumbImg');

    Array.from(images).forEach(img => {
      img.parentNode.style.boxShadow = '0px 0px 3px #000';
      img.parentNode.style.border = '1px solid #000';
    });

    document.getElementById(`vThumb${index}`).parentNode.style.boxShadow = '0px 0px 8px #fff';
    document.getElementById(`vThumb${index}`).parentNode.style.border = '1px solid #fff';

    setImageIndex(index);
  };

  return (
    <MainContainer id="vThumb-container">
      <svg
        id="vThumb-arrow-up"
        alt="arrow up"
        onClick={ () => onArrowClick('up') }
        width="30"
        height="30"

        aria-hidden="true"
        focusable="false"
        data-icon="chevron-up"
        viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
      <ImgContainer>
        {
          style.photos.map((photo, i) => (
            <ImgFrame key={ i } className="imgFrame">
              <Img
                src={ photo.thumbnail_url }
                id={ `vThumb${i}` }
                alt={ `thumbnail number ${i}` }
                className="thumbImg"
                onClick={ () => toggleThumb(i)}
              />
            </ImgFrame>
          ))
        }
      </ImgContainer>
      <svg
        id="vThumb-arrow-down"
        alt="arrow down"
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




/*

[0, 1, 2, 3, 4, 5, 6], 7, 8, 9, 10, 11]
lowIndex       :0
highIndex      :6
maxIndex       :5
currImageIndex :0

0, [1, 2, 3, 4, 5, 6, 7], 8, 9, 10, 11]
lowIndex       :1
highIndex      :7
maxIndex       :5
currImageIndex :1

0, 1, [2, 3, 4, 5, 6, 7, 8], 9, 10, 11]
lowIndex       :2
highIndex      :8
maxIndex       :5
currImageIndex :2

0, 1, 2, [3, 4, 5, 6, 7, 8, 9], 10, 11]
lowIndex       :3
highIndex      :9
maxIndex       :5
currImageIndex :3

0, 1, 2, 3, [4, 5, 6, 7, 8, 9, 10], 11]
lowIndex       :4
highIndex      :10
maxIndex       :5
currImageIndex :4

0, 1, 2, 3, 4, [5, 6, 7, 8, 9, 10, 11]]
lowIndex       :5
highIndex      :11
maxIndex       :5
currImageIndex :5

*/

