import React, { useEffect } from 'react';
import styled from 'styled-components';

import StylesContext from '../../contexts/StylesContext';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const IconContainer = styled.div`
  height: auto;
  width: 60px;

  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 4rem;
  left: 20px;
`;

const IconFrame = styled.div`
  width: 45px;
  height: 45px;
  margin: 4px;
  overflow: hidden;
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 70px;
  object-fit: cover;
  filter: grayscale(100%);
  cursor: pointer;
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const ExpandIcons = () => {

  const { currStyle, imgIndex, expanded } = React.useContext(StylesContext);
  const [style] = currStyle;
  const [imageIndex, setImageIndex] = imgIndex;
  const [expand] = expanded;

  useEffect(() => {
    toggleIcon(imageIndex);
  }, [imageIndex]);

  useEffect(() => {
    const images = document.getElementById('icon-container');
    expand ? images.style.display ='flex' : images.style.display = 'none';
  }, [expand]);

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
              className="icon-img"
              onClick={ () => setImageIndex(i)}
            />
          </IconFrame>
        ))
      }
    </IconContainer>
  );
};

export default ExpandIcons;