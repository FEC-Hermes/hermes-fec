import React from 'react';
import ReviewHeader from './ReviewHeader.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import ProductRecommendedRow from './ProductRecommendedRow.jsx';
import Helpfulness from './Helpfulness.jsx';
import styled from 'styled-components';

const Review_Container = styled.div`
  margin: 2.5rem 0 2rem 0;
`;

const Hr = styled.hr`
  margin-top:3rem;
`;

const Img = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
`;

const Reiview_Recommend = styled.div`
  display: flex;
  align-items: center;
`;



const Review = ({ review, setReviewImgUrl}) => {
  return (
    <Review_Container>
      <ReviewHeader rating={review.rating}
        productId={review.id}
        reviewer_name={review.reviewer_name}
        date={review.date}
      />
      <p className="review-summary-primary">{review.summary.slice(0, 60)}</p>
      <p>{review.summary.slice(60)}</p>
      <p>{review.body}</p>
      <PhotoGallery photos={review.photos}
        setReviewImgUrl={setReviewImgUrl}
      />
      <div>{review.recommend ? <ProductRecommendedRow/> : null}</div>
      <p>{review.response}</p>
      <Helpfulness helpfulness={review.helpfulness} reviewId={review.review_id}/>
      <Hr></Hr>
    </Review_Container>
  );
};

export default Review;