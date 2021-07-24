import React from 'react';
import axios from 'axios';
import StyledComponents from 'styled-components';

import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductDesc from './ProductDesc.jsx';

import { product, styles, related } from './dummyData';


const Overview = () => {
  console.log(product);
  console.log(styles);
  console.log(related);
  return (
    <div>
          =======================
      <h3>Overview Component</h3>
      <ImageGallery />
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
      <ProductDesc />
          =======================
    </div>
  );
};

export default Overview;