import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from './imageGallery/ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';
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

  border: 1px solid red;
`;

const InfoContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 370px;
  max-height: 750px;
  margin-left: 20px;
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const Overview = () => {

  const { product } = React.useContext(ProductContext);
  const [currProduct] = product;

  const [allStyles, setAllStyles] = useState([]);
  const [currStyle, setCurrStyle] = useState({});
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);


  const getStyles = (product_id) => {
    axios.get(`/products/${product_id}/styles`)
      .then(({ data }) => {
        setAllStyles(data.results);
        setCurrStyle(data.results[0]);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getStyles(currProduct.id);
  }, [product]);

  return (
    <div>
      {/* NOTHING WILL RENDER UNTIL CURR STYLE IS SET */}

      {
        Object.keys(currStyle).length ?
          <StylesContext.Provider value={{
            allStyles: [allStyles, setAllStyles],
            currStyle: [currStyle, setCurrStyle],
            imgIndex:  [currImgIdx, setCurrImgIdx],
            expanded:  [expanded, setExpanded]
          }}>
            <MainContainer>
              <ImageGallery />
              <InfoContainer>
                <ProductInfo />
                <StyleSelector />
                <AddToCart />
              </InfoContainer>
              <ProductDesc />
            </MainContainer>
          </StylesContext.Provider>
          : null
      }
    </div>
  );
};

export default Overview;