import React from 'react';
import ReviewHeader from './ReviewHeader.jsx';

const Review = (props) => {
  return (
    <div className="review">
      <ReviewHeader rating={props.review.rating}
        productId={props.review.id}
        reviewer_name={props.review.reviewer_name}
        date={props.review.date}
      />
      <div>{props.review.summary.slice(0, 60)}</div>
      <div>{props.review.summary.slice(60)}</div>
      <div>{props.review.body}</div>
      <div>Picture Gallery The Will Be Less Fun Than The Whiteboard</div>
      <div>{props.review.recommend ? 'Check mark! I recommend this product!' : null}</div>
      <div>{props.review.response}</div>
      <div>{props.review.helpfulness} people thought it was helpful. Maybe it'll be reported Anyways</div>
    </div>
  );
};

export default Review;