import React from 'react';
import ProductCard from './ProductCard/ProductCard.jsx';
import OutFitContainer from './OutfitCard/OutFitContainer.jsx';
import styled from 'styled-components';
const H1 = styled.h1`
   margin: 2rem 0 1rem 1rem;
`;

const Related_Items_Comparison = () => {
  return (
    <div className="Related_Products">
      <H1>Related Products</H1>
      <ProductCard />
      <H1>Your Outfit</H1>
      <OutFitContainer />
    </div>
  )
};

export default Related_Items_Comparison;