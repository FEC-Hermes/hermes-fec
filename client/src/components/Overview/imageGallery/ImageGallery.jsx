import React from 'react';
import styled from 'styled-components';

import DisplayImage from './DisplayImage.jsx';
import VerticalThumbs from './VerticalThumbs.jsx';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const MainContainer = styled.main`
  width: 880px;
  position: relative;
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const ImageGallery = () => {

  return (
    <MainContainer >
      <DisplayImage />
      <VerticalThumbs />
    </MainContainer>
  );
};

export default ImageGallery;