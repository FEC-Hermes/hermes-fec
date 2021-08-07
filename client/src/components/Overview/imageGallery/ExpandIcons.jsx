import React, { useEffect } from 'react';

import StylesContext from '../../contexts/StylesContext';
import { IconContainer, IconFrame, Icon } from './ExpandIcons.js';

const ExpandIcons = () => {

  const {
    currStyle: [style],
    imgIndex:  [imageIndex, setImageIndex],
    expanded:  [expand]
  } = React.useContext(StylesContext);

  useEffect(() => {
    const images = document.getElementById('icon-container');
    expand ? images.style.display ='flex' : images.style.display = 'none';
  }, [expand]);

  useEffect(() => {
    toggleIcon();
  }, [imageIndex]);


  const toggleIcon = () => {
    const icons = document.getElementsByClassName('icon-img');

    Array.from(icons).forEach(icon => {
      icon.parentNode.style.boxShadow = '0px 0px 3px #000';
      icon.parentNode.style.border = '1px solid #000';
      icon.style.filter = 'grayscale(100%)';
    });
    document.getElementById(`vIcon${imageIndex}`).parentNode.style.boxShadow = '0px 0px 8px #fff';
    document.getElementById(`vIcon${imageIndex}`).parentNode.style.border = '1px solid #fff';
    document.getElementById(`vIcon${imageIndex}`).style.filter = 'grayscale(0%)';
  };

  return (
    <IconContainer id='icon-container'>
      {
        style.photos.map((photo, i) => (
          <IconFrame key={ i } className="icon-frame">
            <Icon
              src={ photo.thumbnail_url }
              id={ `vIcon${i}` }
              alt={ `icon number ${i}` }
              className="icon-img"
              onClick={ () => {
                setImageIndex(i);
              }}
            />
          </IconFrame>
        ))
      }
    </IconContainer>
  );
};

export default ExpandIcons;