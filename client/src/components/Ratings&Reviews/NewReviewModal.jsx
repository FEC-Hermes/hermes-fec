import React from 'react';
import ProductContext from '../contexts/ProductContext.js';
import NewReviewForm from './NewReviewForm.jsx';
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    margin: auto 0;
`;

const NewReviewModal = ({toggleModalShown}) => {

  return (
    <ProductContext.Consumer>
      {({reviewMeta, product}) => {
        return (
          <ModalContainer onClick={toggleModalShown}>
            <NewReviewForm reviewMeta={reviewMeta} productName={product[0].name}/>
          </ModalContainer>
        )
      }}
    </ProductContext.Consumer>
  );
};

export default NewReviewModal;