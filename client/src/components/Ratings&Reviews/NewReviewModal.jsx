import React from 'react';
import ProductContext from '../contexts/ProductContext.js';
import NewReviewForm from './NewReviewForm.jsx';

const NewReviewModal = (props) => {
  return (
    <ProductContext.Consumer>
      {({reviewMeta, product}) => {
        return (
          <NewReviewForm reviewMeta={reviewMeta} productName={product[0].name}/>
        )
      }}
    </ProductContext.Consumer>
  );
};

export default NewReviewModal;