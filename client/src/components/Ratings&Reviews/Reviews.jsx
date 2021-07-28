import React from 'react';
import ReviewCount from './ReviewCount.jsx';
import ReviewList from './ReviewList.jsx';
import AdditionalReviewOptions from './AdditionalReviewOptions.jsx';

const Reviews = (props) => {
  return (
    <div id="reviews">
      <ReviewCount />
      <ReviewList />
      <AdditionalReviewOptions />
    </div>
  );
};

export default Reviews;