import React, { useState, useEffect } from 'react';
import axios from 'axios';

import data from '../dummyData.js';

const AddToCart = () => {

  let currStyle = data.styles.results[0];
  const currQty = 

  const [style, setStyle] = useState({});

  useEffect(() => {
    getStyle();
  }, []);

  const getStyle = (product_id) => {
    if (product_id) {
      axios.get(`/products/${product_id}/styles`)
        .then(({ data }) => setStyles(data.results))
        .catch(err => console.log(err));
    }
  };

  // const setCurrentStyle = (style_id) => (styles.filter(style =>
  //   style.style_id === style_id)
  // );

  return (

    <div className="cart-container">
      <select>
        {
          Object.keys(currStyle.skus).map(sku => (
            <option key="sku">{}</option>
          ))
        }
      </select>

      <select>
      </select>

      <button>ADD TO BAG</button>
    </div>
  );
};

export default AddToCart;