import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ImageGallery from './imageGallery/ImageGallery.jsx';
import AddToCart from './addToCart/AddToCart.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductDesc from './ProductDesc.jsx';

const MainContainer = styled.main`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 1280px;

  display: flex;
  flex-wrap: wrap;
  background-color: grey;
`;

const InfoContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const Overview = ({ product }) => {
  return (
    <div>
      {
        Object.keys(product).length ?
          <MainContainer>
            <ImageGallery product_id={ product.id } />
            <InfoContainer>
              <ProductInfo />
              <StyleSelector product_id={ product.id } />
              <AddToCart />
            </InfoContainer>
            <ProductDesc product={ product } />
          </MainContainer>
          : null
      }
    </div>
  );
};

export default Overview;