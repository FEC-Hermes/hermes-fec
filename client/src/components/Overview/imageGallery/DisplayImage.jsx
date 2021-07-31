import React, { useEffect } from 'react';
import styled from 'styled-components';

import StylesContext from '../../contexts/StylesContext.js';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const ImageContainer = styled.div`
  height: 750px;
  width: 850px;
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
  z-index: 10;
  background-color: grey;
`;

const Image = styled.img`
  height: 100%;

    :hover{
      cursor: pointer;
    }
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const DisplayImage = () => {

  const { currStyle, imgIndex, expanded } = React.useContext(StylesContext);
  const [style]  = currStyle;
  const [currIdx] = imgIndex;
  const [expand, setExpand] = expanded;

  useEffect(() => {
    const container = document.getElementById('display-img-container');

    if (expand) {
      container.style.transitionTimingFunction = 'ease-in';
      container.style.transition = '.3s';
      container.style.width = '1280px';
      container.style.height = '800px';
    } else {
      container.style.transitionTimingFunction = 'ease-in';
      container.style.transition = '.3s';
      container.style.width = '850px';
      container.style.height = '750px';
    }
  }, [expand]);

  return (
    <ImageContainer id='display-img-container'>
      <Image
        id='display-img'
        src={ style.photos[currIdx].url }
        onClick={ () => setExpand(!expand) }
      />
    </ImageContainer>
  );
};

export default DisplayImage;