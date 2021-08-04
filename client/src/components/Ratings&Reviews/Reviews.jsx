import React from 'react';
import ReviewCount from './ReviewCount.jsx';
import ReviewList from './ReviewList.jsx';
import AdditionalReviewOptions from './AdditionalReviewOptions.jsx';
import ProductContext, {reviews, reviewMeta} from '../contexts/ProductContext.js';
import styled from 'styled-components';

const Reviews_Container = styled.div`
   margin: 3rem 0 0 8rem;
`;

const Reviews = () => {
  return (
    <ProductContext.Consumer>
      {({reviews, reviewMeta}) => {
        var reviewCount = 0;
        for (var rating in reviewMeta.ratings) {
          reviewCount += Number(reviewMeta.ratings[rating]);
        }
        return (
          <Reviews_Container>
            <ReviewCount reviewCount={reviewCount}/>
            <ReviewList reviews={reviews.results}/>
            <AdditionalReviewOptions />
          </Reviews_Container>
        )
      }}
    </ProductContext.Consumer>
  );
};

export default Reviews;