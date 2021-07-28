import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD

const Container = styled.main`
  width: 1024px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
`;

const DescriptionContainer = styled.div`
  flex-grow: 5;
  padding: 10px 30px 10px;
  max-width: 700px;

  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled.div`
`;

const Description = styled.article`
`;

const Divider = styled.div`
  height: 150px;
  border-left: 3px solid black;
`;

const Social = styled.article`
  flex-grow: 1;
  padding: 15px;

  display:flex;
  justify-content: center;
  align-items: center;
`;

const ProductDesc = ({ product }) => {
  return (
    <Container>
      <DescriptionContainer>
        <Slogan><h3>{ product.slogan }</h3></Slogan>
        <Description>{ product.description }</Description>
      </DescriptionContainer>
      <Divider></Divider>
      <Social>
        <icon>$$</icon>
        <icon>%%</icon>
        <icon>&&</icon>
      </Social>
=======

import ProductContext from '../contexts/ProductContext.js';

const Container = styled.main`
  width: 1024px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 130px;
`;

const DescriptionContainer = styled.div`
  flex-grow: 5;
  padding: 10px 30px 10px;
  max-width: 700px;

  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled.div`
`;

const Description = styled.article`
`;

const Divider = styled.div`
  height: 150px;
  border-left: 3px solid black;
`;

const Attributes = styled.article`
  flex-grow: 1;
  padding-left: 20px;
  height: 135px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ProductDesc = () => {

  const { product } = React.useContext(ProductContext);
  const [productObj] = product;

  return (
    <Container>
      <DescriptionContainer>
        <Slogan><h3>{ productObj.slogan }</h3></Slogan>
        <Description>{ productObj.description }</Description>
      </DescriptionContainer>
      <Divider></Divider>
      <Attributes>
        <div>Some information</div>
        <div>More information</div>
        <div>Again, more information</div>
        <div>Last information</div>
      </Attributes>
>>>>>>> 9620e0ee69c76b188c7d402362d85bc927e41161
    </Container>
  );
};

export default ProductDesc;