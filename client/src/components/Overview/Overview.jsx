import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ImageGallery from './imageGallery/ImageGallery.jsx';
import AddToCart from './addToCart/AddToCart.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductDesc from './ProductDesc.jsx';

import ProductContext from '../contexts/ProductContext';
import StylesContext from '../contexts/StylesContext';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
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

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const Overview = () => {

  const [allStyles, setAllStyles] = useState({});
  const [currStyle, setCurrStyle] = useState({});

  const { product } = React.useContext(ProductContext);
  const [currProduct] = product;

  const getStyles = (product_id) => {
    if (product_id) {
      axios.get(`/products/${product_id}/styles`)
        .then(({ data }) => setAllStyles(data.results))
        .then(() => setCurrStyle(allStyles[0]))
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    console.log(currProduct)
    getStyles(currProduct.id);
  }, [product]);

  return (
    <div>

      <StylesContext.Provider value={{
        allStyles: [allStyles, setAllStyles],
        currStyle: [currStyle, setCurrStyle]
      }}>
        <MainContainer>
          <ImageGallery />
          {/* <InfoContainer>
                <ProductInfo />
                <StyleSelector product_id={ product.id } />
                <AddToCart />
                </InfoContainer>
                <ProductDesc product={ product } /> */}
        </MainContainer>
      </StylesContext.Provider>
    </div>
  );
};

export default Overview;