import React from 'react';
import ReviewCount from './ReviewCount.jsx';
import ReviewList from './ReviewList.jsx';
import AdditionalReviewOptions from './AdditionalReviewOptions.jsx';
import ProductContext, {reviews, reviewMeta} from '../contexts/ProductContext.js';

const Reviews = () => {
  return (
    <ProductContext.Consumer>
      {({reviews, reviewMeta}) => {
        var reviewCount = 0;
        for (var rating in reviewMeta.ratings) {
          reviewCount += Number(reviewMeta.ratings[rating]);
        }
        return (
          <div id="reviews">
            <ReviewCount reviewCount={reviewCount}/>
            <ReviewList reviews={reviews.results}/>
            <AdditionalReviewOptions />
          </div>
        )
      }}
    </ProductContext.Consumer>
  );
};

export default Reviews;