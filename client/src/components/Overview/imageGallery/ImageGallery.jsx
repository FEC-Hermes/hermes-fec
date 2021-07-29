import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DisplayImage from './DisplayImage.jsx';
import VerticalThumbs from './VerticalThumbs.jsx';

import StylesContext from '../../contexts/StylesContext.js';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const MainContainer = styled.main`
  width: 880px;
  position: relative;

  ${'' /* border: 5px solid orange; */}
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const ImageGallery = () => {

  const { currStyle } = React.useContext(StylesContext);
  const [style] = currStyle;

  const [currImage, setCurrImage] = useState();

  useEffect(() => {
    setCurrImage(style.photos[0].url);
  }, [currStyle]);

  return (
    <MainContainer>
      <DisplayImage currImage={ currImage } />
      <VerticalThumbs setCurrImage={ setCurrImage }/>
    </MainContainer>
  );
};

export default ImageGallery;