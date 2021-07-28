import React from 'react';
import ReviewHeader from './ReviewHeader.jsx';

const Review = ({review}) => {
  return (
    <div className="review">
      <ReviewHeader rating={review.rating}
        productId={review.id}
        reviewer_name={review.reviewer_name}
        date={review.date}
      />
      <div>{review.summary.slice(0, 60)}</div>
      <div>{review.summary.slice(60)}</div>
      <div>{review.body}</div>
      <div>Picture Gallery The Will Be Less Fun Than The Whiteboard</div>
      <div>{review.recommend ? 'Check mark! I recommend this product!' : null}</div>
      <div>{review.response}</div>
      <div>{review.helpfulness} people thought it was helpful. Maybe it'll be reported Anyways</div>
    </div>
  );
};

export default Review;