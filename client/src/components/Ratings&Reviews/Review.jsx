import React from 'react';
import ReviewHeader from './ReviewHeader.jsx';
import PhotoGallery from './PhotoGallery.jsx';
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
  margin-right:1rem;
`;

const Reiview_Recommend = styled.div`
  display:flex;
  align-items: center;
`;



const Review = ({review}) => {
  return (
    <Review_Container>
      <ReviewHeader rating={review.rating}
        productId={review.id}
        reviewer_name={review.reviewer_name}
        date={review.date}
      />
      <p>{review.summary.slice(0, 60)}</p>
      <p>{review.summary.slice(60)}</p>
      <p>{review.body}</p>
      <PhotoGallery photos={review.photos} />
      <div>
        {
          review.recommend ?
            <Reiview_Recommend>
              <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Check_mark_9x9.svg/1200px-Check_mark_9x9.svg.png"
              />
              <p>I recommend this product</p>
            </Reiview_Recommend>



            : null
        }
      </div>
      <p>{review.response}</p>
      <p>{review.helpfulness} people thought it was helpful. Maybe it'll be reported Anyways. Maybe.</p>
      <Hr></Hr>
    </Review_Container>
  );
};

export default Review;