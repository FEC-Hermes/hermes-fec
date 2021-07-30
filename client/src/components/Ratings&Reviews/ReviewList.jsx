import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

const ReviewList = ({reviews}) => {
  const [reviewsShown, updateReviewsShown] = useState(reviews);


  var updateReviews = (reviewsShownCount) => {
    reviewsShown = [];
    var reviewToAdd = 0;
    while (reviewsShown.length < reviewsShownCount) {
      reviewsShown.push(reviews[reviewToAdd]);
    }
  };

  return (
    <div>
      {
        reviewsShown.map(review => {
          return <Review
            key={review.review_id}
            review={review}
          />;
        })
      }
    </div>
  );
};

export default ReviewList;