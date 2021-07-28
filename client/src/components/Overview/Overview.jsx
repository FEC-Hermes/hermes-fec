import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ImageGallery from './imageGallery/ImageGallery.jsx';
import AddToCart from './addToCart/AddToCart.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductDesc from './ProductDesc.jsx';

const Container = styled.main`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 1280px;

  background-color: rgb(202, 224, 233);
`;

const Overview = ({ product }) => {
  return (
    <div>
      { Object.keys(product).length ?
        <Container>
          <h3>Overview Component</h3>
          <ImageGallery product_id={ product.id } />
          <ProductInfo />
          <StyleSelector />
          <AddToCart />
          <ProductDesc product={ product } />
        </Container>
        : null
      }
    </div>
  );
};

export default Overview;