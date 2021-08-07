import React, { useEffect } from 'react';
import styled from 'styled-components';

import DisplayImage from './DisplayImage.jsx';
import VerticalThumbs from './VerticalThumbs.jsx';
import ExpandIcons from './ExpandIcons.jsx';

import StylesContext from '../../contexts/StylesContext';

const MainContainer = styled.main`
  width: 880px;
  position: relative;
  transition-timing-function: 'ease-in';
  transition: '.3s';
`;

const ImageGallery = () => {

  const { expanded: [expand] } = React.useContext(StylesContext);

  useEffect(() => {
    const container = document.getElementById('image-gal-container');
    if (expand) {
      container.style.width = '1280px';
      container.style.height = '800px';
    } else {
      container.style.width = '880px';
      container.style.height = '';
    }

  }, [expand]);

  return (
    <MainContainer id="image-gal-container" >
      <DisplayImage />
      <VerticalThumbs />
      <ExpandIcons />
    </MainContainer>
  );
};

export default ImageGallery;