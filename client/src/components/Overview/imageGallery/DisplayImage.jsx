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

  const { expanded } = React.useContext(StylesContext);
  const [expand, setExpand] = expanded;

  return (
    <ImageContainer>
      <Image src={ currImage } onClick={ () => setExpand(!expand) }/>
    </ImageContainer>
  );
};

export default DisplayImage;