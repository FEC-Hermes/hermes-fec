import React from 'react';
import RatingCount from './RatingCount.jsx';
import styled from 'styled-components';

const RatingCountContainer = styled.div`
   margin: 1rem 0 0 2rem;
`;

const RatingBreakdown = ({ratings, updateReviewFilter})=> {
  var totalRatings = 0;
  for (var rating in ratings) {
    totalRatings += Number(ratings[rating]);
  }

  return (
    <RatingCountContainer>
      <RatingCount ratingCount={Number(ratings[5])}
        totalRatings={totalRatings}
        count={5}
        updateReviewFilter={updateReviewFilter}
      />
      <RatingCount ratingCount={Number(ratings[4])}
        totalRatings={totalRatings}
        count={4}
        updateReviewFilter={updateReviewFilter}
      />
      <RatingCount ratingCount={Number(ratings[3])}
        totalRatings={totalRatings}
        count={3}
        updateReviewFilter={updateReviewFilter}
      />
      <RatingCount ratingCount={Number(ratings[2])}
        totalRatings={totalRatings}
        count={2}
        updateReviewFilter={updateReviewFilter}
      />
      <RatingCount ratingCount={Number(ratings[1])}
        totalRatings={totalRatings}
        count={1}
        updateReviewFilter={updateReviewFilter}
      />
    </RatingCountContainer>
  );
};

export default RatingBreakdown;