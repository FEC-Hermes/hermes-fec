import React from 'react';
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

  return (
    <ImageContainer>
      <Image src={ style.photos[currIdx].url } onClick={ () => setExpand(!expand) }/>
    </ImageContainer>
  );
};

export default DisplayImage;