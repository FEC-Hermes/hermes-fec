import React from 'react';

import ProductContext from '../contexts/ProductContext.js';
import {
  Container,
  DescriptionContainer,
  Slogan,
  Description,
  Divider,
  Attributes
} from './ProductDesc.js';


const ProductDesc = () => {

  const { product: [currProduct] } = React.useContext(ProductContext);

  return (
    <Container>
      <DescriptionContainer>
        <Slogan><h3>{ currProduct.slogan }</h3></Slogan>
        <Description>{ currProduct.description }</Description>
      </DescriptionContainer>
      <Divider />
      <Attributes>
        {
          currProduct.features.map((attr, i) => (
            <div key={ i }>{ `> ${attr.value} ${attr.feature}` }</div>
          ))
        }
      </Attributes>
    </Container>
  );
};

export default ProductDesc;