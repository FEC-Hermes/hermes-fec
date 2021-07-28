import React from 'react';
import styled from 'styled-components';

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

const ProductDesc = ({ product }) => {
  return (
    <Container>
      <DescriptionContainer>
        <Slogan><h3>{ product.slogan }</h3></Slogan>
        <Description>{ product.description }</Description>
      </DescriptionContainer>
      <Divider></Divider>
      <Attributes>
        <div>Some information</div>
        <div>More information</div>
        <div>Again, more information</div>
        <div>Last information</div>
      </Attributes>
    </Container>
  );
};

export default ProductDesc;