import React from 'react';
import RatingCount from './RatingCount.jsx';
import styled from 'styled-components';

const RatingCountContainer = styled.div`
   cursor: pointer;
`;

const RatingBreakdown = ({ratings, reviewFilter, updateReviewFilter})=> {
  var totalRatings = 0;
  for (var rating in ratings) {
    totalRatings += Number(ratings[rating]);
  }

  return (
    <RatingCountContainer>
      <RatingCount ratingCount={Number(ratings[5])}
        totalRatings={totalRatings}
        count={5}
        reviewFilter={reviewFilter}
        updateReviewFilter={updateReviewFilter}
      />
      <RatingCount ratingCount={Number(ratings[4])}
        totalRatings={totalRatings}
        count={4}
        reviewFilter={reviewFilter}
        updateReviewFilter={updateReviewFilter}
      />
      <RatingCount ratingCount={Number(ratings[3])}
        totalRatings={totalRatings}
        count={3}
        reviewFilter={reviewFilter}
        updateReviewFilter={updateReviewFilter}
      />
      <RatingCount ratingCount={Number(ratings[2])}
        totalRatings={totalRatings}
        count={2}
        reviewFilter={reviewFilter}
        updateReviewFilter={updateReviewFilter}
      />
      <RatingCount ratingCount={Number(ratings[1])}
        totalRatings={totalRatings}
        count={1}
        reviewFilter={reviewFilter}
        updateReviewFilter={updateReviewFilter}
      />
    </RatingCountContainer>
  );
};

export default RatingBreakdown;