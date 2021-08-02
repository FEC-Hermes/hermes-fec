import React from 'react';
import ReviewHeader from './ReviewHeader.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import ProductRecommendedRow from './ProductRecommendedRow.jsx';
import Helpfulness from './Helpfulness.jsx';

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
      <PhotoGallery photos={review.photos} />
      <div>{review.recommend ? <ProductRecommendedRow/> : null}</div>
      <div>{review.response}</div>
      <Helpfulness helpfulness={review.helpfulness} reviewId={review.review_id}/>
    </div>
  );
};

export default Review;