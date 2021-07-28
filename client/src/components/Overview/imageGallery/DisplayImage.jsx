import React from 'react';
import styled from 'styled-components';

import data from '../dummyData.js';

const ImageContainer = styled.div`
  height: 700px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 875px;
`;

const DisplayImage = () => {
  return (
    <ImageContainer>
      <Image src={ data.styles.results[4].photos[0].url } />
    </ImageContainer>
  );
};

export default DisplayImage;