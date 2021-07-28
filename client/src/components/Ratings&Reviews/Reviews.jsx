import React from 'react';
import ReviewCount from './ReviewCount.jsx';
import ReviewList from './ReviewList.jsx';
import AdditionalReviewOptions from './AdditionalReviewOptions.jsx';

const Reviews = ({reviews}) => {
  return (
    <div id="reviews">
      <ReviewCount reviewCount={reviews.results.length}/>
      <ReviewList reviews={reviews.results}/>
      <AdditionalReviewOptions />
    </div>
  );
};

export default Reviews;