import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImageGallery from './imageGallery/ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductDesc from './ProductDesc.jsx';
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
  const { expanded:[expand] } = React.useContext(StylesContext);
  useEffect(() => {
    const container = document.getElementById('info-container');
    if (container) {
      expand ? container.style.display ='none' : container.style.display = 'flex';
    }
  }, [expand]);

  return (
    <div>
      <MainContainer>
        <ImageGallery />
        <InfoContainer id='info-container'>
          <ProductInfo />
          <StyleSelector />
          <AddToCart />
        </InfoContainer>
        <ProductDesc />
      </MainContainer>
    </div>
  );
};

export default Overview;