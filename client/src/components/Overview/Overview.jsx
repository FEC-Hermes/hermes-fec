import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ImageGallery from './imageGallery/ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
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
    <Container>
      =======================
      <h3>Overview Component</h3>
      <ImageGallery />
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
      <ProductDesc
        description={ product.description }
        slogan={ product.slogan }
      />
      =======================
    </Container>
  );
};

export default Overview;