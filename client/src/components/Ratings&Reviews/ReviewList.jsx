import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

const ReviewList = ({reviews, reviewFilter, filterSignature, sortType, displayCount}) => {
  const [reviewsShown, setReviewsShown] = useState(reviews);

  useEffect(() => {
    var filteredReviews = [];
    reviews.forEach(review => {
      if (filteredReviews.length < displayCount) {
        if (!reviewFilter.active) {
          filteredReviews.push(review);
        } else {
          if (reviewFilter.stars[review.rating]) {
            filteredReviews.push(review);
          }
        }
      }
    });
    setReviewsShown(filteredReviews);
  }, [sortType, displayCount, filterSignature]);

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