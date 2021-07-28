import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import DisplayImage from './DisplayImage.jsx';
import VerticalThumbs from './VerticalThumbs.jsx';

const MainContainer = styled.main`
  width: 900px;
`;

const ImageGallery = ({ product_id }) => {

  const [styles, setStyles] = useState([]);

  useEffect(() => {
    getStyles(product_id);
  }, []);

  const getStyles = (product_id) => {
    if (product_id) {
      axios.get(`/products/${product_id}/styles`)
        .then(({ data }) => setStyles(data.results))
        .catch(err => console.log(err));
    }
  };

  return (
    <MainContainer>
      <DisplayImage />
      { Object.keys(styles).length ? <VerticalThumbs styles={ styles } /> : null }
    </MainContainer>
  );
};

export default ImageGallery;