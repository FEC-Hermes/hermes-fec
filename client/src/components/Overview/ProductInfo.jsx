import React from 'react';
import styled from 'styled-components';

import Stars from '../Shared/StarAverageRating.jsx';

import ProductContext from '../contexts/ProductContext';
import StylesContext from '../contexts/StylesContext';

const MainContainer = styled.main`
  width: 340px;
  height: 200px;
  top-margin: 30px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
`;

const StarRating = styled.div`
  margin-top: 10px;
  display: flex;
`;

const ReviewLink = styled.a`
  margin-left: 20px;
`;

const Category = styled.div`
`;

const ProductName = styled.div`
  margin-bottom: 40px;
`;

const Social = styled.div`
  height: 60px;
  width: 340px;
  margin-bottom: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Pinterest = styled.div`
  :hover{
    color: green;
    cursor: pointer;
  }
`;

const Insta = styled.div`
  :hover{
    color: green;
    cursor: pointer;
  }
`;

const Twitter = styled.div`
  :hover{
    color: green;
    cursor: pointer;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  ${'' /* margin-top: 35px; */}
`;

const Price = styled.div`
  ${'' /* margin-top: 35px; */}
`;

const PriceSlash = styled.div`
  text-decoration: line-through;
`;

const SalePrice = styled.div`
  color: red;
`;

const ProductInfo = () => {

  //THIS IS NOT GOING TO WORK ONCE MERGED WITH MAIN
  //REFACTOR TO USE APP LEVEL DESTRUCT
  const { product, reviewMeta:{ ratings } } = React.useContext(ProductContext);
  const { currStyle } = React.useContext(StylesContext);

  const [currProduct] = product;
  const [style] = currStyle;

  return (
    <MainContainer>
      <StarRating>
        <Stars ratings={ ratings } />
        <ReviewLink href="#rating-review" Read all reviews>Read all reviews</ReviewLink>
      </StarRating>
      <Category>{ currProduct.category }</Category>
      <ProductName>{ currProduct.name }</ProductName>
      <Social>
        <Pinterest>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 448 512"
            height="50px"
            width="50px">
            <path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
          </svg>
        </Pinterest>
        <Insta>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 448 512"
            height="50px"
            width="50px">
            <path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
          </svg>
        </Insta>
        <Twitter>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 448 512"
            height="50px"
            width="50px">
            <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path>
          </svg>
        </Twitter>
      </Social>
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