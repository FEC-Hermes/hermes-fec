import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';

const ReviewListContainer = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  max-height: 80vh;
`;

const ReviewList = ({ reviews, reviewFilter, filterSignature, sortType, displayCount, setReviewImgUrl}) => {
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
    <ReviewListContainer>
      {
        reviewsShown.map(review => {
          return <Review
            key={review.review_id}
            review={review}
            setReviewImgUrl={setReviewImgUrl}
          />;
        })
      }
    </ReviewListContainer>
  );
};

export default ReviewList;