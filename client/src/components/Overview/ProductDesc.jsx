import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  width: 1024px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
`;

const Description = styled.article`
  flex-grow: 5;
  padding: 30px;
  max-width: 700px;
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

const ProductDesc = ({ description }) => {
  return (
    <Container>
      <Description>{ description }</Description>
      <Divider></Divider>
      <Social>
        <icon>$$</icon>
        <icon>%%</icon>
        <icon>&&</icon>
      </Social>
    </Container>
  );
};

export default ProductDesc;