import React from 'react';
import ProductContext from '../contexts/ProductContext.js';
import NewReviewForm from './NewReviewForm.jsx';

const NewReviewModal = (props) => {
  return (
    <ProductContext.Consumer>
      {({reviewMeta}) => {
        return (
          <NewReviewForm reviewMeta={reviewMeta}/>
        )
      }}
    </ProductContext.Consumer>
  )
}

export default NewReviewModal;