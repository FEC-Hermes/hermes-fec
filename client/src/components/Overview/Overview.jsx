import React from 'react';
import axios from 'axios';

import ImageGallery from './imageGallery/ImageGallery.jsx';
import AddToCart from './addToCart/AddToCart.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductDesc from './ProductDesc.jsx';


const Overview = ({ product }) => {
  return (
    <div>
      { Object.keys(product).length ?
        <div id="overview-container">
              =======================
          <h3>Overview Component</h3>
          <ImageGallery
            product_id={ product.id }
          />
          <ProductInfo />
          <StyleSelector />
          <AddToCart />
          <ProductDesc />
              =======================
        </div>
        : null
      }

    </div>
  );
};

export default Overview;