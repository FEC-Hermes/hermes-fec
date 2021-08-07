import React from 'react';
import ProductCard from './ProductCard/ProductCard.jsx';
import OutFitContainer from './OutfitCard/OutFitContainer.jsx';
import styled from 'styled-components';
const H1 = styled.h1`
   margin: 2rem 0 1rem 1rem;
`;
const RPContainer = styled.div`
  width: 1280px;
`;

const Related_Items_Comparison = ({relatedProductClicked}) => {
  return (
    <RPContainer className="Related_Products">
      <H1>Related Products</H1>
      <ProductCard relatedProductClicked={relatedProductClicked}/>
      <H1>Your Outfit</H1>
      <OutFitContainer />
    </RPContainer>
  );
};

export default Related_Items_Comparison;