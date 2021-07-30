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

  const { currStyle, expanded } = React.useContext(StylesContext);
  const [expand, setExpand] = expanded;
  const [style]  = currStyle;

  const [currImage, setCurrImage] = useState();

  useEffect(() => {
    setCurrImage(style.photos[0].url);

  }, [currStyle]);

  return (
    <MainContainer >
      <DisplayImage currImage={ currImage } />
      <VerticalThumbs setCurrImage={ setCurrImage } />
    </MainContainer>
  );
};

export default ImageGallery;