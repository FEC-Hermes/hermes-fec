import React from 'react';
import styled from 'styled-components';

import ProductContext from '../contexts/ProductContext';
import StylesContext from '../contexts/StylesContext';

const MainContainer = styled.main`
`;

const StarRating = styled.div`
`;

const Category = styled.div`
`;

const ProductName = styled.div`
`;

const PriceContainer = styled.div`
`;

const Price = styled.div`
`;

const PriceSlash = styled.div`
`;

const SalePrice = styled.div`
`;

const ProductInfo = () => {

  //THIS IS NOT GOING TO WORK ONCE MERGED WITH MAIN
  //REFACTOR TO USE APP LEVEL DESTRUCT
  const { product, reviewMeta } = React.useContext(ProductContext);
  const { currStyle } = React.useContext(StylesContext);

  const [currProduct] = product;
  const [style] = currStyle;

  return (
    <MainContainer>
      <StarRating></StarRating>
      <Category>{ currProduct.category }</Category>
      <ProductName>{ currProduct.name }</ProductName>
      { !style.sale_price ?
        <Price>{ currProduct.default_price }</Price> :
        <PriceContainer>
          <PriceSlash>{ currProduct.default_price }</PriceSlash>
          <SalePrice>{ style.sale_price }</SalePrice>
        </PriceContainer>
      }
    </MainContainer>
  );
};

export default ProductInfo;