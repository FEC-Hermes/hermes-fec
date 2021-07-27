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

const ProductDesc = ({ description, slogan }) => {
  return (
    <Container>
      <DescriptionContainer>
        <Slogan><h2>{ slogan }</h2></Slogan>
        <Description>{ description }</Description>
      </DescriptionContainer>
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