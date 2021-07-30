import React from 'react';
import styled from 'styled-components';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const ImageContainer = styled.div`
  height: 750px;
  width: 850px;
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;

  ${'' /* border: 5px solid green; */}

`;

const Image = styled.img`
  ${'' /* width: 875px; */}
  height: 100%;

    :hover{
      cursor: pointer;
    }

  ${'' /* border: 5px solid red; */}
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