import React, { useEffect } from 'react';
import styled from 'styled-components';

import StylesContext from '../../contexts/StylesContext.js';

const ImageContainer = styled.div`
  height: 750px;
  width: 850px;
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
  z-index: 10;
  background-color: grey;
  transition-timing-function: ease-in;
  transition: .3s;
`;

const Image = styled.img`
  height: 100%;
    :hover{
      cursor: ${ prop => prop.expand ? 'zoom-out' : 'zoom-in' };
    }
`;

const DisplayImage = () => {

  const {
    currStyle: [style],
    imgIndex:  [currIdx],
    expanded:  [expand, setExpand]
  } = React.useContext(StylesContext);

  useEffect(() => {
    const container = document.getElementById('display-img-container');

    if (expand) {
      container.style.width = '1280px';
      container.style.height = '800px';
    } else {
      container.style.width = '850px';
      container.style.height = '750px';
    }
  }, [expand]);

  return (
    <ImageContainer id='display-img-container'>
      <Image
        id='display-img'
        alt={ style.name }
        expand={ expand }
        src={ style.photos[currIdx].url}
        onClick={ () => setExpand(!expand) }
      />
    </ImageContainer>
  );
};

export default DisplayImage;