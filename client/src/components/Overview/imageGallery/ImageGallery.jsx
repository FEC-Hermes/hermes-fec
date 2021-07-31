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
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const ImageGallery = () => {

  // const { currStyle, expanded } = React.useContext(StylesContext);

  return (
    <MainContainer >
      <DisplayImage />
      <VerticalThumbs />
    </MainContainer>
  );
};

export default ImageGallery;