import React from 'react';
import ProductContext from '../contexts/ProductContext.js';
import NewReviewForm from './NewReviewForm.jsx';

const NewReviewModal = (props) => {
  return (
    <ProductContext.Consumer>
      {({product}) => {
        var product_id = product[0].id;
        return (
          <NewReviewForm productId={product_id} />
        )
      }}
    </ProductContext.Consumer>
  )
}

export default NewReviewModal;