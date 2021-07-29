import React from 'react';
import styled from 'styled-components';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const ImageContainer = styled.div`
  height: 700px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 875px;
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const DisplayImage = ({ currImage }) => {
  return (
    <ImageContainer>
      <Image src={ currImage } />
    </ImageContainer>
  );
};

export default DisplayImage;