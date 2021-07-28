import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD

import VerticalThumbs from './VerticalThumbs.jsx';

=======
import styled from 'styled-components';

import DisplayImage from './DisplayImage.jsx';
import VerticalThumbs from './VerticalThumbs.jsx';

const MainContainer = styled.main`
  width: 900px;
`;

>>>>>>> 9620e0ee69c76b188c7d402362d85bc927e41161
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
<<<<<<< HEAD
    <div>
      { Object.keys(styles).length ? <VerticalThumbs styles={ styles } /> : null }
      <div>ImageGallery</div>
    </div>
=======
    <MainContainer>
      <DisplayImage />
      { Object.keys(styles).length ? <VerticalThumbs styles={ styles } /> : null }
    </MainContainer>
>>>>>>> 9620e0ee69c76b188c7d402362d85bc927e41161
  );
};

export default ImageGallery;