import React, { useState, useEffect } from 'react';
import axios from 'axios';

import VerticalThumbs from './VerticalThumbs.jsx';

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
    <div>
      { Object.keys(styles).length ? <VerticalThumbs styles={ styles } /> : null }
      <div>ImageGallery</div>
    </div>
  );
};

export default ImageGallery;